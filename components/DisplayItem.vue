<template>
    <div>
        <div
            class="bt_16"
            v-for="column in fields" :key="column.field"
            :field="column.field" >
            <b-field :label="column.label">
                <d-field :type="column.type" v-model="value[column.field]"></d-field>
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
        computed: {
            fields() {
                return this.getSchema(this.$route.params.model, false)
            }
        }
    }
</script>

<style scoped>

</style>
