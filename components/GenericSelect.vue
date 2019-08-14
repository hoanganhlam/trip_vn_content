<template>
    <b-autocomplete
        :value="selected[field]"
        :data="data"
        :field="field"
        :loading="isFetching"
        @typing="getAsyncData"
        @select="handleSelect">
        <template slot-scope="props">
            {{ props.option[field] }}
        </template>
    </b-autocomplete>
</template>

<script>
    import debounce from 'lodash/debounce'

    export default {
        props: {
            value: {},
            endpoint: String,
            field: {
                default: 'title',
                type: String
            }
        },
        data() {
            return {
                data: [],
                selected: this.value,
                isFetching: false
            }
        },
        methods: {
            getAsyncData: debounce(function (name) {
                if (!name.length) {
                    this.data = []
                    return
                }
                this.isFetching = true
                this.$axios.$get(this.endpoint).then(res => {
                    this.data = res.results
                }).finally(() => {
                    this.isFetching = false
                })
            }, 500),
            handleSelect(option) {
                this.selected = option
            }
        }
    }
</script>
