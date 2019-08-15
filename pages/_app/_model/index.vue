<template>
    <div style="width: 100%">
        <b-table
            :loading="isLoading"
            :data="results"
            :columns="columns"
            ref="table"
            paginated
            backend-sorting
            backend-pagination
            :total="count"
            :per-page="pageSize"
            @page-change="onPageChange"
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
                count: 0,
                results: [],
                page: 1,
                pageSize: 25,
                isLoading: false
            }
        },
        methods: {
            async fetch() {
                this.isLoading = true
                this.pageSize = this.$route.query.page_size || 25
                let query = this.$route.query
                query.page = this.page
                query.page_size = this.pageSize
                let res = await this.$axios.$get(this.$route.path, {
                    params: query
                }).catch(err => {
                    console.log(err);
                })
                this.results = []
                this.count = res.count
                this.results = res.results
                this.isLoading = false
            },
            onPageChange(page) {
                this.page = page
                this.fetch()
            },
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
