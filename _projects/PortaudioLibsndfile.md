---
layout: page
title: Playing a sound with portaudio and libsndfile
description: Low level play sound implementation
img: https://images.unsplash.com/photo-1623282033815-40b05d96c903?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D
importance: 1
category: work
related_publications: false
---

This is a low-level audio playback implementation using libsndfile to read audio data from a .wav file and PortAudio to stream the audio to the default output device. It includes memory management, a stream callback function, and basic file I/O error handling.

With libsndfile I can easily retrive wav data.

  ```cpp
  soundData->soundfile = sf_open("D:/Coding/C++/Test_Portaudio_Libsndfile/assets/Audio_01.wav", 
                                 SFM_READ, 
                                 &soundData->info);
      if (soundData->soundfile == NULL) {
          printf("Error: Couldn't open the soundfile.\n");
          free(soundData);
          return EXIT_FAILURE;
      }
  ```
A custom callback is created to pass the wav data to the output buffer.

  ```cpp
  static int myCallback(const void* input, void* output, unsigned long frameCount,
    const PaStreamCallbackTimeInfo* timeInfo,
    PaStreamCallbackFlags statusFlags, void* userData)
  {
    SoundData* data = (SoundData*)userData;
    float* out = (float*)output;
    (void)input;
    
    unsigned long totalSamples = frameCount * data->info.channels;

    sf_count_t readSamples = sf_read_float(data->soundfile, out, totalSamples);

    if (readSamples < totalSamples) 
    {
        for (sf_count_t i = readSamples; i < totalSamples; i++) 
        {
            out[i] = 0.0f; 
        }
        return paComplete; 
    }

    return paContinue;   
  }
  ```
 
 <h2 style="color: #2698ba;"> Result </h2>

<div class="container">
  <div class="row">
    <div class="col-sm col-12">
        {% include video.liquid path="https://www.youtube.com/embed/3HAab9DwCTA?si=BbVte-lK0h06XEHT" class="img-fluid rounded z-depth-1" %}
    </div>
  </div>
</div>
<br>

You can find the code in my repo <a href="https://github.com/migueahumada/Test_Portaudio_Libsndfile">here</a>!  



---
