<template>
    <b-input v-model="data"></b-input>
</template>

<script>
    export default {
        name: "Array",
        props: ['value'],
        data() {
            return {
                data: this.value.toString()
            }
        }
    }
</script>

<style scoped>

</style>
