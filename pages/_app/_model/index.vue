<template>
    <div style="width: 100%">
        <div class="level bt_16">
            <div class="level-left">
                <div style="margin-right: 10px" v-for="column in filters" :key="column.field">
                    <d-field :setting="column" v-model="filter[column.field]"/>
                </div>
                <b-button style="margin-right: 10px" @click="fetch">
                    <b-icon pack="fa" icon="sort"></b-icon>
                </b-button>
                <b-button @click="addNew">
                    <b-icon pack="fa" icon="plus"></b-icon>
                </b-button>
            </div>
        </div>
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
                    <d-field :setting="column" v-model="props.row[column.field]"/>
                </b-table-column>
            </template>
            <template slot="detail" slot-scope="props">
                <d-item v-model="props.row" @delete="fetch()" @create="fetch()"/>
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
                isLoading: false,
                filter: {}
            }
        },
        head() {
            return {
                title: "Model"
            }
        },
        methods: {
            async fetch() {
                this.isLoading = true
                this.pageSize = this.$route.query.page_size || 25
                let query = this.filter
                for (let i in this.filter) {
                    if (Array.isArray(this.filter[i])) {
                        query[i] = this.filter[i].map(x => x.id).toString()
                    } else if (typeof this.filter[i] === "object") {
                        query[i] = query[i].id
                    } else if (this.filter[i]) {
                        query[i] = this.filter[i]
                    }
                }
                console.log(query);
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
            addNew() {
                this.results.unshift({})
            }
        },
        created() {
            this.fetch()
        },
        computed: {
            columns() {
                return this.getSchema(this.$route.params.model, true)
            },
            filters() {
                return this.allSchema(this.$route.params.model).filter(x => x.filter === true)
            }
        }
    }
</script>

<style scoped>

</style>
