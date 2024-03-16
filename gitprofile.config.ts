// gitprofile.config.ts

const CONFIG = {
  github: {
    username: 'AymaneMehdi', // Your GitHub org/user name. (This is the only required config)
  },
  /**
   * If you are deploying to https://<USERNAME>.github.io/, for example your repository is at https://github.com/arifszn/arifszn.github.io, set base to '/'.
   * If you are deploying to https://<USERNAME>.github.io/<REPO_NAME>/,
   * for example your repository is at https://github.com/arifszn/portfolio, then set base to '/portfolio/'.
   */
  base: '/gitprofile/',
  projects: {
    github: {
      display: true, // Display GitHub projects?
      header: 'Github Projects',
      mode: 'automatic', // Mode can be: 'automatic' or 'manual'
      automatic: {
        sortBy: 'stars', // Sort projects by 'stars' or 'updated'
        limit: 8, // How many projects to display.
        exclude: {
          forks: false, // Forked projects will not be displayed if set to true.
          projects: [], // These projects will not be displayed. example: ['arifszn/my-project1', 'arifszn/my-project2']
        },
      },
      manual: {
        // Properties for manually specifying projects
        projects: ['arifszn/gitprofile', 'arifszn/pandora'], // List of repository names to display. example: ['arifszn/my-project1', 'arifszn/my-project2']
      },
    },
    external: {
      header: 'My Projects',
      // To hide the `External Projects` section, keep it empty.
      projects: [
        {
          title: 'Coffee Shop',
          imageUrl: './public/Coffee-free-coffee-shop-bootstrap-template-1.jpg',
          link: 'https://github.com/AymaneMehdi/coffee',
        },
        {
          title: 'Restaurant',
          imageUrl:
            './public/Pato-Bootstrap-4-Restaurant-Website-Template-1.jpg',
          link: 'https://github.com/AymaneMehdi/Restaurant',
        },
        {
          title: 'lighten',
          imageUrl: './public/lighten.png',
          link: 'https://github.com/AymaneMehdi/lighten',
        },
      ],
    },
  },
  seo: {
    title: 'Portfolio of Ariful Alam',
    description: '',
    imageURL: '',
  },
  social: {
    linkedin: '@AymaneMehdi',
    researchGate: '',
    facebook: '',
    instagram: '',
    youtube: '', // example: 'pewdiepie'
    dribbble: '',
    behance: '',
    stackoverflow: '', // example: '1/jeff-atwood'
    skype: '',
    telegram: '',
    phone: '+212 660915536',
    email: 'AymaneMehdi.IT@gmail.com',
  },
  resume: {
    fileUrl: './AymaneMEHDI.pdf', // Empty fileUrl will hide the `Download Resume` button.
  },
  skills: [
    'JavaScript',
    'React.js',
    'Node.js',
    'Nest.js',
    'Next.js',
    'Express.js',
    'HTML',
    'CSS',
    'GitHub',
    'Git',
    'Tailwind',
    'Figma',
    'MongoDB',
    'JWT',
    'Passport.js',
    'GraphQL',
    'Redux / Redux Toolkit',
    'Jest',
    'SQL',
    'SQL Server',
    'ASP.net',
    'Vue.js',
  ],
  experiences: [
    {
      company: 'ARK-X Talent Factory',
      position: 'MERN Stack Developer',
      from: '2024',
      to: 'Present',
    },
    {
      company: 'Khamsat.com',
      position: 'Full Stack Developer : Freelance',
      from: '2023',
      to: 'Present',
    },
    {
      company: 'Mostaql.com',
      position: 'Full Stack Developer : Freelance',
      from: '2023',
      to: 'Present',
    },
  ],
  certifications: [
    {
      name: 'LinkedIn ',
      body: 'Node.js Essential Training',
    },
    {
      name: 'LinkedIn ',
      body: 'React - Server-Side Rendering',
    },
    {
      name: 'LinkedIn ',
      body: 'React Hooks',
    },
    {
      name: 'LinkedIn ',
      body: 'Node.js Essential Training',
    },
    {
      name: 'LinkedIn ',
      body: 'React.js Authentication',
    },
    {
      name: 'MongoDB ',
      body: 'M001 - MongoDB Basics',
    },
  ],
  educations: [
    {
      institution: 'JobIntech',
      degree: 'MERN Stack Developer',
      from: '2023',
      to: '2024',
    },
    {
      institution: 'Holberton Schoo',
      degree: 'Software Enginee ',
      from: '2023',
      to: '2024',
    },
    {
      institution: 'OFPPT',
      degree: 'Full Stack Developer',
      from: '2019',
      to: '2021',
    },
  ],
  publications: [],
  // Display articles from your medium or dev account. (Optional)
  googleAnalytics: {
    id: '', // GA3 tracking id/GA4 tag id UA-XXXXXXXXX-X | G-XXXXXXXXXX
  },
  // Track visitor interaction and behavior. https://www.hotjar.com
  hotjar: {
    id: '',
    snippetVersion: 6,
  },
  themeConfig: {
    defaultTheme: 'lofi',

    // Hides the switch in the navbar
    // Useful if you want to support a single color mode
    disableSwitch: false,

    // Should use the prefers-color-scheme media-query,
    // using user system preferences, instead of the hardcoded defaultTheme
    respectPrefersColorScheme: false,

    // Display the ring in Profile picture
    displayAvatarRing: true,

    // Available themes. To remove any theme, exclude from here.
    themes: ['dark', 'light'],
    // Custom theme, applied to `procyon` theme
    customTheme: {
      primary: '#fc055b',
      secondary: '#219aaf',
      accent: '#e8d03a',
      neutral: '#2A2730',
      'base-100': '#E3E3ED',
      '--rounded-box': '3rem',
      '--rounded-btn': '3rem',
    },
  },
  enablePWA: true,
};

export default CONFIG;
