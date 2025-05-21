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
        },{id: "post-google-gemini-updates-flash-1-5-gemma-2-and-project-astra",
        
          title: 'Google Gemini updates: Flash 1.5, Gemma 2 and Project Astra <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "We’re sharing updates across our Gemini family of models and a glimpse of Project Astra, our vision for the future of AI assistants.",
        section: "Posts",
        handler: () => {
          
            window.open("https://blog.google/technology/ai/google-gemini-update-flash-ai-assistant-io-2024/", "_blank");
          
        },
      },{id: "post-displaying-external-posts-on-your-al-folio-blog",
        
          title: 'Displaying External Posts on Your al-folio Blog <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.open("https://medium.com/@al-folio/displaying-external-posts-on-your-al-folio-blog-b60a1d241a0a?source=rss-17feae71c3c4------2", "_blank");
          
        },
      },{id: "books-the-godfather",
          title: 'The Godfather',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/the_godfather/";
            },},{id: "news-a-simple-inline-announcement",
          title: 'A simple inline announcement.',
          description: "",
          section: "News",},{id: "news-a-long-announcement-with-details",
          title: 'A long announcement with details',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/announcement_2/";
            },},{id: "news-a-simple-inline-announcement-with-markdown-emoji-sparkles-smile",
          title: 'A simple inline announcement with Markdown emoji! :sparkles: :smile:',
          description: "",
          section: "News",},{id: "projects-compressor-plugin-development",
          title: 'Compressor Plugin Development',
          description: "Compressor plugin with simple parameters.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/CompressorPlugin/";
            },},{id: "projects-convolution-plugin-development",
          title: 'Convolution Plugin Development',
          description: "Reverb plugin with waveshaping distortion",
          section: "Projects",handler: () => {
              window.location.href = "/projects/ConvolutionPlugin/";
            },},{id: "projects-playing-a-sound-with-portaudio-and-libsndfile",
          title: 'Playing a sound with portaudio and libsndfile',
          description: "Low level play sound implementation",
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
