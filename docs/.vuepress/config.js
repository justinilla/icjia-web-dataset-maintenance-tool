module.exports = {
    base: '/icjia-web-dataset-maintenance-tool/',
    title: 'ICJIA Web Dataset Maintenance Tool',
    description: 'Faster · Easier · Automated',
    head: [
        ['link', { rel: 'icon', href: 'http://www.icjia.state.il.us/assets/img/icjia-default.jpg'}]
    ],
    themeConfig: {
        nav: [
            { text: 'Guide', link: '/guide/'},
            { text: 'GitHub', link: 'https://github.com/bobaekang/icjia-web-dataset-maintenance-tool'}
        ],
        sidebar: {
            '/guide/': [
                {
                    title: 'Guide',
                    collapsable: false,
                    children: [
                        '',
                        'prerequisites',
                        'start',
                        'guide',
                        'output',
                        'source',
                        'database',
                        'program'        
                    ]
                }
            ]
        },
        lastUpdated: 'Last Updated',
    }
}