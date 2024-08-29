import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Groogair",
  description: "Kiran Sai Subramanyam K",
  head: [
    ['link', { rel: 'stylesheet', href: '/styles.css' }]
  ],
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Articles', link: '/articles' },
      { text: 'About Me', link: '/about-me' }
    ],

    sidebar: {
      '/articles/': [
        {
          text: 'All articles',
          link: '/articles'
        },
        {
          text: 'Featured Articles',
          items: [
            { text: 'Sample Article', link: '/articles/sample-article' },
            { text: 'Another Article', link: '/articles/another-article' },
            // Add more articles as needed
          ]
        },
        {
          text: 'Categories',
          items: [
            { text: 'Vue/Nuxt', link: '/articles/category/technology' },
            { text: 'Rust', link: '/articles/category/technology' },
            { text: 'Freelancing', link: '/articles/category/freelancing' },
            // Add more categories as needed
          ]
        }
      ],
      // Define other sidebars for different sections if needed
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/saikksub' },
      { icon: 'linkedin', link: 'https://www.linkedin.com/in/saikksub' },
      { icon: 'x', link: 'https://www.x.com/saikksub' },
      {
        icon: {
          svg: '<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="M17.47 6.07a4.54 4.54 0 0 0-4.38 3.69a20 20 0 0 1-2.28-4.9H8.55v6a2.14 2.14 0 1 1-4.28 0v-6L2 4.91v6a4.4 4.4 0 1 0 8.8-.05v-1a20.6 20.6 0 0 0 1.65 2.7l-1.38 6.61h2.32l1-4.81a5.6 5.6 0 0 0 3.11.89a4.57 4.57 0 0 0 0-9.14zm0 6.83a4.1 4.1 0 0 1-2.55-1l.23-.91v-.05c.16-1 .66-2.6 2.35-2.6a2.25 2.25 0 0 1 2.27 2.24a2.41 2.41 0 0 1-2.27 2.32z"/></svg>'
        },
        link: 'https://www.upwork.com/fl/~01c9c6d3b8ccbde1e5'
      }
    ]
  }
})
