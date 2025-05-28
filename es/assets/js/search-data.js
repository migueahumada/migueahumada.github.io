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
  },{id: "nav-audio",
          title: "🔉 Audio",
          description: "First of all, I&#39;m an audio engineer and these are a few projects I&#39;ve worked on.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/audio-projects/";
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
        },{id: "nav-️-blog",
          title: "🗣️ Blog",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/blog/";
          },
        },{id: "post-how-to-set-up-the-fmod-api-in-xcode-by-miguel-a-ahumada-medium",
        
          title: 'How to set up the FMOD API in Xcode | by Miguel A.... <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "First download the FMOD API from this website. You’ll probably need to log in. If you don’t have an account just make one. Don’t overthink it. I created another folder called FMOD_API and within that…",
        section: "Posts",
        handler: () => {
          
            window.open("https://medium.com/@migangahuga/how-to-set-up-the-fmod-api-in-xcode-bc855d92f245", "_blank");
          
        },
      },{id: "post-play-an-audio-file-with-xaudio2-by-miguel-a-ahumada-medium",
        
          title: '🔊Play an audio file with XAudio2 | by Miguel A. Ahumada | Medium... <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "Alright, I hope that with this you can get an idea on how to play an audio file using XAudio2, which is a low level audio API used for games in Windows.",
        section: "Posts",
        handler: () => {
          
            window.open("https://medium.com/@migangahuga/play-an-audio-file-with-xaudio2-cd7759c554c5", "_blank");
          
        },
      },{id: "post-how-to-set-up-the-fmod-api-in-visual-studio-by-miguel-a-ahumada-medium",
        
          title: '🔉 How to set up the FMOD API in Visual Studio | by... <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "Go to this site to download the FMOD API. Sign in, and then click in the FMOD engine to find your chosen version. I used 2.02.12 for Windows, not Windows 10 UWP. Click on the FMOD API installer and…",
        section: "Posts",
        handler: () => {
          
            window.open("https://medium.com/@migangahuga/how-to-set-up-the-fmod-api-in-visual-studio-9353fbbd2144", "_blank");
          
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
