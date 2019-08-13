<template>
    <b-field label="Find a movie">
        <b-autocomplete
            :data="data"
            :field="field"
            :loading="isFetching"
            @typing="getAsyncData"
            @select="handleSelect">
            <template slot-scope="props">
                {{ props.option.title }}
            </template>
        </b-autocomplete>
    </b-field>
</template>

<script>
    import debounce from 'lodash/debounce'

    export default {
        props: {
            endpoint: String,
            field: {
                default: 'title',
                type: String
            }
        },
        data() {
            return {
                data: [],
                selected: null,
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
