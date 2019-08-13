import Vue from 'vue'

const fields = [
    {
        field: 'title',
        label: 'Tiêu đề',
        models: ['trips', 'destinations', 'points'],
        type: 'text',
        show: true,
        update: true
    },
    {
        field: 'slug',
        label: 'Slug',
        models: ['trips', 'destinations', 'points'],
        type: 'text',
        show: true,
        update: true
    },
    {
        field: 'is_approve',
        label: 'Phê duyệt',
        models: ['trips', 'destinations', 'points'],
        type: 'boolean',
        show: true,
        update: true
    },
    {
        field: 'created',
        label: 'Ngày tạo',
        models: ['trips', 'destinations', 'points'],
        type: 'date',
        show: true,
        update: true
    },
    {
        field: 'kind',
        label: 'Kiểu',
        models: ['points'],
        type: 'text',
        show: true,
        update: true
    },
    {
        field: 'address',
        label: 'Địa chỉ',
        models: ['points', 'destinations'],
        type: 'text',
        show: false,
        update: true
    },
    {
        field: 'description',
        label: 'Mô tả',
        models: ['points', 'destinations'],
        type: 'text',
        show: false,
        update: true
    },
    {
        field: 'destination',
        label: 'Điểm đến',
        models: ['points'],
        type: 'select',
        show: false,
        update: false
    },
]

Vue.mixin({
    methods: {
        getSchema(str, flag) {
            return fields.filter(item => item.show === flag && item.models.indexOf(str) !== -1)
        },
    }
})
