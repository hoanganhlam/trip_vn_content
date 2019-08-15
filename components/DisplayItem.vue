<template>
    <div>
        <div class="bt_16" v-for="column in fields" :key="column.field">
            <b-field :label="column.label">
                <d-field :setting="column" v-model="data[column.field]"></d-field>
            </b-field>
        </div>
        <div class="level">
            <div class="level-left"></div>
            <div class="level-right">
                <div class="buttons">
                    <b-button @click="handleDelete">{{sure?'Sure':'Delete'}}</b-button>
                    <b-button @click="handleSave">Save</b-button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "DisplayItem",
        props: {
            value: {}
        },
        data() {
            return {
                data: this.value,
                sure: false
            }
        },
        computed: {
            fields() {
                return this.getSchema(this.$route.params.model, false)
            }
        },
        methods: {
            async handleSave() {
                let body = {}
                let fields = Object.keys(this.data)
                fields.forEach(field => {
                    if (Array.isArray(this.data[field])) {
                        body[field] = []
                        this.data[field].forEach(data => {
                            if (typeof data === 'object' && data && data['id']) {
                                body[field].push(data['id'])
                            } else {
                                body[field].push(data)
                            }
                        })
                    } else if (typeof this.data[field] === 'object' && this.data[field] && this.data[field]['id']) {
                        body[field] = this.data[field]['id']
                    } else {
                        body[field] = this.data[field]
                    }
                })
                console.log(body);
                if (body.id) {
                    await this.$axios.$put(`${this.$route.path + body.id}/`, body)
                } else {
                    await this.$axios.$post(`${this.$route.path}`, body)
                    this.$emit('create')
                }
            },
            async handleDelete() {
                if (this.sure) {
                    if (this.data.slug) {
                        await this.$axios.$delete(`${this.$route.path + this.data.slug}/`)
                    } else {
                        await this.$axios.$delete(`${this.$route.path + this.data.id}/`)
                    }
                    this.$emit('delete')
                } else {
                    this.sure = true
                }

            }
        }
    }
</script>

<style scoped>

</style>
