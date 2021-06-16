module.exports = {
    title: '知码学院',
    description: '君哥带你上王者',
    dest: './dist',
    port: '7777',
    head: [
        ['link', { rel: 'icon', href: '/logo.jpg' }]
    ],
    markdown: {
        lineNumbers: true
    },
    // theme:'reco',
    themeConfig: {
        type: 'blog',
        smoothScroll:true,
        nav: require('./nav.js'),
        sidebar: {
            '/guide/': require('../guide/sidebar'),
            '/baodian/zero': require('../baodian/zero/sidebar'),
            '/baodian/high': require('../baodian/high/sidebar'),
        },
        sidebarDepth: 2,
        lastUpdated: 'Last Updated',
        searchMaxSuggestoins: 10,
        serviceWorker: {
            updatePopup: {
                message: "有新的内容.",
                buttonText: '更新'
            }
        },
        editLinks: true,
        editLinkText: '在 GitHub 上编辑此页 ！'
    }
}
