export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
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
                  buildHookId: '5ea09b2a5b92d04ff3bdaa14',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-3ocpqgqv',
                  apiId: '0f082f25-2ae7-4213-8870-6c608d838d55'
                },
                {
                  buildHookId: '5ea09b2af66f9acbf986a827',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-gtvcysro',
                  apiId: 'f509e790-f15d-4b23-b5a3-1f399ae4cf18'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/al-kivi/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-gtvcysro.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
