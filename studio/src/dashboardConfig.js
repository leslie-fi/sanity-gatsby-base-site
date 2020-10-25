export default {
  widgets: [
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
                  buildHookId: '5f95eadeb259c888bb057ed9',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-base-site-studio-s98krz4u',
                  apiId: '16cc40bd-31f6-494c-910e-97ed12209fe7'
                },
                {
                  buildHookId: '5f95eade72e152949bc9a0bf',
                  title: 'Frontend Website',
                  name: 'sanity-gatsby-base-site-web',
                  apiId: 'c92c8780-3af7-4080-ac29-d7896ffa53c6'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/leslie-fi/sanity-gatsby-base-site',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-gatsby-base-site-web.netlify.app', category: 'apps'}
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
