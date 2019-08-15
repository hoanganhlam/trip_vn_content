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
                <b-button @click="handleSave">Save</b-button>
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
                data: this.value
            }
        },
        computed: {
            fields() {
                return this.getSchema(this.$route.params.model, false)
            }
        },
        methods: {
            handleSave() {
                let body = {}
                let fields = Object.keys(this.data)
                fields.forEach(field => {
                    if (Array.isArray(this.data[field])) {
                        body[field] = []
                        this.data[field].forEach(data => {
                            if (typeof data === 'object') {
                                body[field].push(data['id'])
                            } else {
                                body[field].push(data)
                            }
                        })
                    } else if (typeof this.data[field] === 'object') {
                        body[field] = this.data[field]['id']
                    } else {
                        body[field] = this.data[field]
                    }
                })
                console.log(body);
            }
        }
    }
</script>

<style scoped>

</style>
