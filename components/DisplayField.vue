<template>
    <div>
        <b-switch v-if="setting.type ==='boolean'" type="is-success" size="is-small" v-model="data">Approve</b-switch>
        <g-date v-else-if="setting.type ==='date'" v-model="data"/>
        <g-array v-else-if="setting.type ==='array'" v-model="data"/>
        <g-array v-else-if="setting.type ==='array'" v-model="data"/>
        <b-select v-else-if="setting.type ==='option'" v-model="data">
            <option v-for="option in setting.options" :value="option.value" :key="option.value">
                {{ option.title }}
            </option>
        </b-select>
        <g-select v-else-if="setting.type ==='generic'" :endpoint="setting.source"></g-select>
        <b-input v-else v-model="data"></b-input>
    </div>
</template>

<script>
    export default {
        name: "DisplayField",
        props: {
            value: {},
            setting: {}
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
