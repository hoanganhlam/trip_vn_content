<template>
    <div style="width: 100%">
        <b-table
            :loading="isLoading"
            :data="response.results"
            :columns="columns"
            ref="table"
            paginated
            :per-page="pageSize"
            detailed
            detail-key="id"
            icon-pack="fa"
            aria-next-label="Next page"
            aria-previous-label="Previous page"
            aria-page-label="Page"
            aria-current-label="Current page">
            <template slot-scope="props">
                <b-table-column
                    v-for="column in columns" :key="column.field"
                    :field="column.field" :label="column.label">
                    <d-field :setting="column" v-model="props.row[column.field]"></d-field>
                </b-table-column>
            </template>
            <template slot="detail" slot-scope="props">
                <d-item v-model="props.row"></d-item>
            </template>
        </b-table>
    </div>
</template>

<script>
    export default {
        name: "index.vue",
        data: () => {
            return {
                response: {
                    count: 0,
                    results: []
                },
                pageSize: 10,
                isLoading: false
            }
        },
        methods: {
            async fetch() {
                this.isLoading = true
                this.pageSize = this.$route.query.page_size || 25
                this.response = await this.$axios.$get(this.$route.path, {params: this.$route.query})
                this.isLoading = false
            }
        },
        created() {
            this.fetch()
        },
        computed: {
            columns() {
                return this.getSchema(this.$route.params.model, true)
            }
        }
    }
</script>

<style scoped>

</style>
