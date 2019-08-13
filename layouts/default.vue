<template>
    <div class="container large" style="margin-top: 3rem">
        <div class="tile is-ancestor">
            <div class="tile is-vertical is-2">
                <aside class="menu">
                    <div class="bt_16" v-for="app in apps" :key="app.title">
                        <p class="menu-label">
                            <n-link :to="app.to">{{app.title}}</n-link>
                        </p>
                        <ul v-if="app.models.length" class="menu-list">
                            <li v-for="model in app.models" :key="model.title">
                                <n-link :to="app.to + model.to">{{model.title}}</n-link>
                            </li>
                        </ul>
                    </div>
                </aside>
            </div>
            <div class="tile is-parent">
                <nuxt/>
            </div>
        </div>
        <div></div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                apps: [
                    {
                        title: 'Destination',
                        icon: 'home',
                        to: '/destination',
                        models: [
                            {
                                title: 'Nation',
                                icon: 'home',
                                to: '/nations/',
                            },
                            {
                                title: 'Area',
                                icon: 'home',
                                to: '/areas/',
                            },
                            {
                                title: 'Destination',
                                icon: 'home',
                                to: '/destinations/',
                            },
                            {
                                title: 'Point',
                                icon: 'home',
                                to: '/points/',
                            },
                            {
                                title: 'Service',
                                icon: 'home',
                                to: '/services/',
                            }
                        ]
                    },
                    {
                        title: 'Trip',
                        icon: 'home',
                        to: '/trip',
                        models: [
                            {
                                title: 'Trip',
                                icon: 'home',
                                to: '/trips/',
                            },
                            {
                                title: 'Step',
                                icon: 'home',
                                to: '/steps/',
                            }
                        ]
                    },
                    {
                        title: 'Group',
                        icon: 'home',
                        to: '/group',
                        models: [
                            {
                                title: 'Group',
                                icon: 'home',
                                to: '/groups/',
                            }
                        ]
                    },
                ]
            }
        }
    }
</script>
