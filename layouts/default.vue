<template>
    <div>
        <b-navbar>
            <template slot="brand">
                <b-navbar-item href="/">
                    <img
                        src="https://raw.githubusercontent.com/buefy/buefy/dev/static/img/buefy-logo.png"
                        alt="Lightweight UI components for Vue.js based on Bulma"
                    >
                </b-navbar-item>
            </template>
            <template slot="start">
                <b-navbar-item href="#">
                    Product
                </b-navbar-item>
                <b-navbar-item>
                    <n-link to="/activity/activities/">Test</n-link>
                </b-navbar-item>
            </template>

            <template slot="end">
                <b-navbar-item tag="div">
                    <div class="buttons">
                        <div v-if="!$auth.loggedIn" class="button is-primary" @click="isOpen = !isOpen">
                            <strong>Log in</strong>
                        </div>
                    </div>
                </b-navbar-item>
            </template>
        </b-navbar>
        <div class="container large" style="margin-top: 3rem">
            <div class="tile is-ancestor">
                <div class="tile is-vertical is-2">
                    <aside class="menu">
                        <div class="bt_16" v-for="app in apps" :key="app.title">
                            <p class="menu-label">
                                <n-link v-bind:class="{'is-active': app.to === $route.path}" :to="app.to">{{app.title}}</n-link>
                            </p>
                            <ul v-if="app.models.length" class="menu-list">
                                <li v-for="model in app.models" :key="model.title">
                                    <n-link v-bind:class="{'is-active': app.to + model.to === $route.path}" :to="app.to + model.to">{{model.title}}</n-link>
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
        <b-modal :active.sync="isOpen" has-modal-card>
            <div class="modal-card" style="width: 500px">
                <section class="modal-card-body">
                    <b-field label="Username">
                        <b-input v-model="form.email" maxlength="30"/>
                    </b-field>
                    <b-field label="Password">
                        <b-input v-model="form.password" type="password" maxlength="30"/>
                    </b-field>
                    <b-field>
                        <b-button @click="login">Đăng nhập</b-button>
                    </b-field>
                </section>
            </div>
        </b-modal>
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
                            },
                            {
                                title: 'Point Service',
                                icon: 'home',
                                to: '/point-services/',
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
                ],
                isOpen: false,
                form: {
                    email: '',
                    password: ''
                }
            }
        },
        methods: {
            login() {
                this.$auth
                    .loginWith('local', {
                        data: this.form
                    })
                    .then(res => {
                        console.log(res)
                    })
                    .catch(err => {
                        console.log(err)
                    }).finally(() => {
                        this.isOpen = false
                    }
                )
            }
        }
    }
</script>
