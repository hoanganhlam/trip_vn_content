<template>
    <div>
        <div class="bt_16" v-for="column in fields" :key="column.field">
            <b-field :label="column.label">
                <d-field :setting="column" v-model="data[column.field]"></d-field>
            </b-field>
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
        }
    }
</script>

<style scoped>

</style>
