<template>
    <b-input v-model="data"></b-input>
</template>

<script>
    export default {
        name: "Array",
        props: ['value'],
        data() {
            return {
                data: this.value ? this.value.toString() : ''
            }
        },
        watch: {
            data() {
                this.$emit('input', this.data.split(","))
            }
        }
    }
</script>

<style scoped>

</style>
