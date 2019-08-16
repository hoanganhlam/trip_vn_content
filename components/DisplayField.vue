<template>
    <div>
        <b-switch v-if="setting.type ==='boolean'" type="is-success" size="is-small" v-model="data">Approve</b-switch>
        <g-date :placeholder="setting.label" v-else-if="setting.type ==='date'" v-model="data"/>
        <g-array :placeholder="setting.label" v-else-if="setting.type ==='array'" v-model="data"/>
        <b-select :placeholder="setting.label" v-else-if="setting.type ==='option'" v-model="data">
            <option v-for="option in setting.options" :value="option.value" :key="option.value">
                {{ option.title }}
            </option>
        </b-select>
        <g-select
            :placeholder="setting.label"
            v-else-if="setting.type ==='generic'"
            :endpoint="setting.source" v-model="data"
            :field="setting.showField"
        ></g-select>
        <g-tag
            :placeholder="setting.label"
            v-else-if="setting.type ==='tag'"
            :endpoint="setting.source" v-model="data"
            :field="setting.showField"></g-tag>
        <b-input :placeholder="setting.label" v-else-if="setting.type ==='text'" v-model="data"></b-input>
        <b-input :placeholder="setting.label" v-else-if="setting.type ==='number'" type="number" v-model="data"></b-input>
        <gm-browser :placeholder="setting.label" v-else-if="setting.type ==='gallery'" v-model="data"></gm-browser>
        <g-object :placeholder="setting.label" v-else-if="setting.type ==='object'" v-model="data"></g-object>
        <div v-else>
            {{data}}
        </div>
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
        },
        watch: {
            data() {
                this.$emit('input', this.data)
            },
            value() {
                this.data = this.value
            }
        }
    }
</script>

<style scoped>

</style>
