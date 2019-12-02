export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-blog'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5de55279f543fc22323df9f8',
                  title: 'Sanity Studio',
                  name: 'sapper-fucker-studio',
                  apiId: '2c36cdda-eb2d-4704-a43b-89d562b1711e'
                },
                {
                  buildHookId: '5de5527ad95d36a07785e54c',
                  title: 'Blog Website',
                  name: 'sapper-fucker',
                  apiId: '6aa1b202-ee99-49b2-8124-25045abb3e1b'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/thegravurebackup/sapper-fucker',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sapper-fucker.netlify.com', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
