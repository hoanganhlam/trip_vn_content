require('dotenv').config()

export default {
    mode: 'spa',
    env: {
        domain: process.env.DOMAIN,
        apiDomain: process.env.API_DOMAIN
    },
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
                        url: '/auth/rest-auth/login/',
                        method: 'post',
                        propertyName: 'token',
                        headers: {
                            'Accept': 'application/json',
                            'Content-Type': 'application/json'
                        }
                    },
                    logout: {
                        method: 'post',
                        url: '/auth/rest-auth/logout/'
                    },
                    user: {
                        url: '/auth/user/me/',
                        method: 'get',
                        propertyName: ''
                    }
                },
                tokenRequired: true,
                tokenType: 'JWT'
            },
            google: {
                client_id:
                    '1031942923634-j4m66uaj8toiphphkj2q8q0thkh9horu.apps.googleusercontent.com',
                redirect_uri: process.env.DOMAIN + '/member/callback'
            }
        },
        redirect: {
            login: '/member/login',
            logout: '/member/logout',
            callback: '/member/callback',
            user: '/member/me'
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
