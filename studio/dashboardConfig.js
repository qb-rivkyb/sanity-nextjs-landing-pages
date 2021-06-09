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
                  buildHookId: '60c0eb7f950eaf0de4882371',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-ov8qesy4',
                  apiId: '5d6ff271-76aa-45e9-b645-70af9e2ad352'
                },
                {
                  buildHookId: '60c0eb7f1010820c539b95fa',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-j3bhpw12',
                  apiId: '6b6c2a80-e8b9-4c8b-99b1-e1430f8a28d2'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/qb-rivkyb/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-j3bhpw12.netlify.app', category: 'apps'}
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
