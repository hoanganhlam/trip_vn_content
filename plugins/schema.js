import Vue from 'vue'

const TRIP = [
    {
        field: 'title',
        label: '',
    },
    {
        field: 'slug',
        label: '',
    },
    {
        field: 'description',
        label: '',
    },
    {
        field: 'estimate_price',
        label: '',
    },
    {
        field: 'fixed_price',
        label: '',
    },
    {
        field: 'photos',
        label: '',
    },
    {
        field: 'creator',
        label: '',
    },
    {
        field: 'created',
        label: '',
    },
]

const DESTINATION = [
    {
        field: 'title',
        label: '',
    },
    {
        field: 'slug',
        label: '',
    },
    {
        field: 'description',
        label: '',
    },
    {
        field: 'address',
        label: '',
    },
    {
        field: 'g_place_id',
        label: '',
    },
    {
        field: 'poster',
        label: '',
    },
    {
        field: 'photos',
        label: '',
    },
    {
        field: 'is_approve',
        label: '',
    },
    {
        field: 'created',
        label: '',
    },
]

const POINT = [
    {
        field: 'title',
        label: '',
    },
    {
        field: 'slug',
        label: '',
    },
    {
        field: 'description',
        label: '',
    },
    {
        field: 'address',
        label: '',
    },
    {
        field: 'description',
        label: '',
    },
    {
        field: 'kind',
        label: '',
    },
    {
        field: 'is_approve',
        label: '',
    },

    {
        field: 'created',
        label: '',
    },
]


Vue.mixin({
    methods: {
        getSchena(str) {
            switch (str) {
                case 'trips':
                    return TRIP
                case 'destinations':
                    return DESTINATION
                case 'points':
                    return POINT
                default:
                    return null
            }
        },
    }
})
