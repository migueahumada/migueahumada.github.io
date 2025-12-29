---
layout: post
title: Custom Audio Engine
date: 2025-12-29 15:20:00
description: Custom audio engine developed on top of my custom engine with XAudio2.
tags: audio-programming game-programming
categories: sample-posts
thumbnail: https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhhUmuzJxyAS2olyoCCqAiPBpp1YulQF-r0fx5mWPToiYVIvchIoUWdpi0ZFAz8UFJT3ORfB5g8ach6uewtAdcXd2ySyKBWoCijxLBQsaOUqlLTPqw8Z_XYgk7SQ5E7kN4ZAUWUyME256gJhDOLIRwLnusBZB91joyBfMW6MCf6Ryi3dApJS7I93pHgdQc/s2638/Screenshot%202025-10-25%20at%2012.58.07.png
toc:
  sidebar: left
--- 


**Status: In development**

# Overview

This is a custom implementation of a sound engine made in my custom game engine. This implementation is inspired by the way <a href="https://www.fmod.com/docs/2.03/api/core-api.html">FMOD</a> and <a href="https://learn.microsoft.com/es-es/windows/win32/xaudio2/xaudio2-apis-portal">XAudio2</a> work. It was also inspired by a Guy Somberg's <a href="https://www.youtube.com/watch?v=M8Bd7uHH4Yg">conference video</a> on the CppCon.

<div class="container">
  <div class="row">
    <div class="col-sm col-12">
        {% include figure.liquid path="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhhUmuzJxyAS2olyoCCqAiPBpp1YulQF-r0fx5mWPToiYVIvchIoUWdpi0ZFAz8UFJT3ORfB5g8ach6uewtAdcXd2ySyKBWoCijxLBQsaOUqlLTPqw8Z_XYgk7SQ5E7kN4ZAUWUyME256gJhDOLIRwLnusBZB91joyBfMW6MCf6Ryi3dApJS7I93pHgdQc/s2638/Screenshot%202025-10-25%20at%2012.58.07.png" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
  </div>
</div>

The main classes of this implementation are:

- **Audio**
  - It's the place where my audio data is contained. Here I have my buffer of samples.

- **Channel**
  - This is the abstraction of my sound voices. Channels can be routed to the main output or to submixes.

- **Submix**
  - Used to group channels,for volume control, and digital signal processing.

- **Master**
  - Is the main output, the endpoint that communicates with the sound card.

- **Audio API** 
  - The place where XAudio2 objects are created. It's like a factory class.

- **Sound Engine** 
  - The place where actions are done such as play or pause.

- **Audio Component** 
  - The interface between the sound engine and scene objects from the game engine. 
 
---

# AudioAPI

My AudioAPI is like a factory that creates Audio, Channel, Submix and Master objects.

```cpp
SPtr<Audio> CreateAudio(const String& name,
                        const String& filepath,
                        const SPtr<VoiceCallback>& pCallback = nullptr);

SPtr<Channel> CreateChannel(const SPtr<Audio>& pAudio = nullptr,
                            uint32 inputChannels = 2,
                            uint32 inputSampleRate = 48000);

SPtr<Submix> CreateSubmix(uint32 inputChannels = 2,
                          uint32 inputSampleRate = 48000);

SPtr<Master> CreateMaster(uint32 inChannels = XAUDIO2_DEFAULT_CHANNELS,
                          uint32 inSampleRate = XAUDIO2_DEFAULT_SAMPLERATE,
                          uint32 flags = 0);
  ```

Those are <a href="https://learn.microsoft.com/es-es/windows/win32/xaudio2/xaudio2-apis-portal">XAudio2</a> objects underneath, it's basically a wrapper class.

```cpp
#pragma once
#include "HelperMacros.h"
#include <xaudio2.h>
#include <xaudio2fx.h>

class Submix;
class VoiceCallback;
class Audio;

class Channel
{
 public:
  Channel(unsigned int inputChannels, 
          unsigned int inputSampleRate);
  ~Channel();
  
  inline unsigned int getInputChannels() const {
    return m_inputChannels;
  }

  inline unsigned int getInputSampleRate() const {
    return m_inputSampleRate;
  }

  void SubmitAudio(const WPtr<Audio>& pAudio);

  void Route(const WPtr<Submix>& channel,
             unsigned int flags = 0);
  
  bool isPlaying();


 private:
  friend class AudioAPI;
  friend class SoundEngine;
  IXAudio2SourceVoice* m_pSourceVoice = nullptr;

  unsigned int m_inputChannels;
  unsigned int m_inputSampleRate;
  
  XAUDIO2_VOICE_STATE m_voiceState;

  //Sends 
  XAUDIO2_VOICE_SENDS m_sends{ 0 };
  Vector<XAUDIO2_SEND_DESCRIPTOR> m_sendList;

  //FX
  XAUDIO2_EFFECT_CHAIN m_fxs{ 0 };
  Vector<XAUDIO2_EFFECT_DESCRIPTOR> m_fxsList;

};
```

# Sound Engine

Those objects are then managed by the Sound Engine where two maps live, one for Channels and the other one for Audios.
```cpp
#pragma once
#include "Module.h"
#include "AudioDevice.h"
#include "AudioAPI.h"

using ChannelMap = Map<String, SPtr<Channel>>;
using AudioMap = Map<String, SPtr<Audio>>;
using SubmixMap = Map<String, SPtr<Submix>>;

class SoundEngine : public Module<SoundEngine>
{
 public:

  SoundEngine() = default;
  virtual ~SoundEngine() = default;

  virtual void OnStartUp() override;
  virtual void OnShutdown() override;

  void Play(const WPtr<Channel>& channel, float volume = 0.0f);

  void Update();

  const ChannelMap& GetChannels() const
  {
    return m_mapChannels;
  }

  const AudioMap& GetAudios() const
  {
    return m_mapAudios;
  }

  bool CreateAudio(const String& name,
                   const String& filePath);
  
  bool CreateChannel(const String& name,
                     const SPtr<Audio>& pAudio,
                     int32 numChannels,
                     int32 inSampleRate);

 protected:

  SPtr<Master> m_pMasterOutput;

  ChannelMap m_mapChannels;
  AudioMap m_mapAudios;
  SubmixMap m_mapSubmixes;
};

SoundEngine& g_soundEngine();
```

In the Sound Engine we define methods to play, but they're not used here.
```cpp
void SoundEngine::Play(const WPtr<Channel>& channel, float volume)
{
  if (channel.expired())
  {
    return;
  }

  auto CHANNEL = channel.lock();

  CHANNEL->m_pSourceVoice->SetVolume(volume);

  CHANNEL->m_pSourceVoice->Start(0);
  
}
```

# Audio Component

Here we can call the methods defined in the Sound Engine to play audios.

```cpp
bool AudioComponent::Play()
{
  if (m_channel.expired() && m_audio.expired())
  {
    return false;
  }

  g_soundEngine().Play(m_channel,1.0f);

  return true;
}
```

You can find the code in my repo <a href="https://github.com/migueahumada/SimpleRasterizer">here</a>!  


