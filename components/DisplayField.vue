<template>
    <div>
        <b-switch v-if="type ==='boolean'" type="is-success" size="is-small" v-model="data">Approve</b-switch>
        <g-date v-else-if="type ==='date'" v-model="data"/>
        <b-input v-else v-model="data"></b-input>
    </div>
</template>

<script>
    export default {
        name: "DisplayField",
        props: {
            value: {},
            type: {}
        },
        data() {
            return {
                data: this.value
            }
        }
    }
</script>

<style scoped>

</style>
