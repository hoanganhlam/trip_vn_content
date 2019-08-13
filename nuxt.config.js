require('dotenv').config()

export default {
    mode: 'spa',
    /*
    ** Headers of the page
    */
    head: {
        title: process.env.npm_package_name || '',
        meta: [
            {charset: 'utf-8'},
            {name: 'viewport', content: 'width=device-width, initial-scale=1'},
            {hid: 'description', name: 'description', content: process.env.npm_package_description || ''}
        ],
        link: [
            {rel: 'icon', type: 'image/x-icon', href: '/favicon.ico'}
        ]
    },
    /*
    ** Customize the progress-bar color
    */
    loading: {color: '#fff'},
    /*
    ** Global CSS
    */
    css: [
        '@fortawesome/fontawesome-free/css/all.css',
        'buefy/dist/buefy.css',
        '@/style/_app.scss',
    ],
    /*
    ** Plugins to load before mounting the App
    */
    plugins: [
        {src: '@/plugins/components.js', ssr: false},
        '@/plugins/mixins',
        '@/plugins/repository',
        '@/plugins/schema',
    ],
    /*
    ** Nuxt.js modules
    */
    modules: [
        // Doc: https://buefy.github.io/#/documentation
        ['nuxt-buefy', {css: false, materialDesignIcons: false}],
        // Doc: https://axios.nuxtjs.org/usage
        '@nuxtjs/axios',
        '@nuxtjs/auth',
    ],
    /*
    ** Axios module configuration
    ** See https://axios.nuxtjs.org/options
    */
    axios: {
        baseURL: process.env.API_DOMAIN + '/api/v1/'
    },
    auth: {
        strategies: {
            local: {
                endpoints: {
                    login: {
                        url: '/users/login/',
                        method: 'post',
                        propertyName: 'token',
                        headers: {
                            'Accept': 'application/json',
                            'Content-Type': 'application/json'
                        }
                    },
                    logout: {
                        method: 'post',
                        url: '/users/logout/'
                    },
                    user: {
                        url: '/users/me/',
                        method: 'get',
                        propertyName: ''
                    }
                },
                tokenRequired: true,
                tokenType: 'Bearer'
            }
        },
        redirect: {
            login: '/dashboard/login',
            logout: '/dashboard/logout',
            callback: '/dashboard/callback',
            user: '/dashboard/me'
        },
    },
    /*
    ** Build configuration
    */
    build: {
        /*
        ** You can extend webpack config here
        */
        extend(config, ctx) {
        }
    }
}
