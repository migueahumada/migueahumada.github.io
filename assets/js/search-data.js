// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "🤓 About",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-️-blog",
          title: "🗣️ Blog",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/blog/";
          },
        },{id: "nav-games",
          title: "🎮 Games",
          description: "Some videogames I&#39;ve been involved in. They&#39;re not like AAA stuff but they&#39;re still games.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/game-projects/";
          },
        },{id: "nav-dev",
          title: "💻 Dev",
          description: "Software development stuff I&#39;m working on.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/dev-projects/";
          },
        },{id: "nav-audio",
          title: "🔉 Audio",
          description: "First of all, I&#39;m an audio engineer and these are a few projects I&#39;ve worked on.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/audio-projects/";
          },
        },{id: "post-custom-audio-engine",
        
          title: "Custom Audio Engine",
        
        description: "Custom audio engine developed on top of my custom engine with XAudio2.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2025/custom-audio-engine/";
          
        },
      },{id: "post-wav-encoder-decoder",
        
          title: "Wav encoder/decoder",
        
        description: "Custom wav encoder/decoder with some signal processing.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2025/wav-encoder-decoder/";
          
        },
      },{id: "post-simple-rasterizer",
        
          title: "Simple Rasterizer",
        
        description: "Simple rasterizer made with DirectX11, XAudio2, ImGui and Assimp.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2025/simple-rasterizer/";
          
        },
      },{id: "post-convolution-plugin",
        
          title: "Convolution Plugin",
        
        description: "Convolution Plugin made with JUCE",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2025/convolution-plugin/";
          
        },
      },{id: "post-play-an-audio-file-with-xaudio2",
        
          title: "Play an audio file with XAudio2",
        
        description: "Play an audio file with XAudio2",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2025/Play-audio-xaudio2/";
          
        },
      },{id: "projects-compressor-plugin-development",
          title: 'Compressor Plugin Development',
          description: "Compressor plugin with simple parameters.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/CompressorPlugin/";
            },},{id: "projects-convolution-plugin-development",
          title: 'Convolution Plugin Development',
          description: "Reverb plugin with waveshaping distortion.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/ConvolutionPlugin/";
            },},{id: "projects-custom-game-audio-engine",
          title: 'Custom Game Audio Engine',
          description: "Implementation of a custom audio engine made with XAudio2",
          section: "Projects",handler: () => {
              window.location.href = "/projects/CustomGameAudioEngine/";
            },},{id: "projects-playing-a-sound-with-portaudio-and-libsndfile",
          title: 'Playing a sound with portaudio and libsndfile',
          description: "Low level audio implementation.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/PortaudioLibsndfile/";
            },},{id: "projects-simple-rasterizer",
          title: 'Simple Rasterizer',
          description: "Simple rasterizer with custom audio engine.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/SimpleRasterizer/";
            },},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%6D%69%67%75%65%6C.%61%68%75%6D%61%64%61@%72%65%63%6D%75%73%69%63%61.%63%6F%6D", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/migueahumada", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/miguelangelahumadagaona", "_blank");
        },
      },{
        id: 'social-medium',
        title: 'Medium',
        section: 'Socials',
        handler: () => {
          window.open("https://medium.com/@migangahuga", "_blank");
        },
      },{
        id: 'social-youtube',
        title: 'YouTube',
        section: 'Socials',
        handler: () => {
          window.open("https://youtube.com/@miquelsounds", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
