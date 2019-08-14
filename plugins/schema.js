import Vue from 'vue'

const baseFields = ['updated', 'created']
const makerFields = ['title', 'slug', 'description', 'coordinates', 'address', 'contact', 'updated', 'created', 'g_place_id']
const taxonomyFields = ['title', 'slug', 'description']

const SCHEMA = {
    'areas': makerFields.push('continent'),
    'nations': makerFields.concat(['areas', 'continent', 'poster']),
    'tags': taxonomyFields.concat(['is_important', 'content_types', 'label', 'photo']),
    'destinations': makerFields.concat(['nation', 'poster', 'photos', 'tags', 'staff', 'is_approve',]),
    'points': makerFields.concat(['tags', 'destination', 'poster', 'photos', 'kind', 'staff', 'is_approve', 'extra']),
    'services': taxonomyFields.concat(['poster', 'photos', 'tags', 'is_special', 'is_approve', 'kind']),
    'point-services': ['service', 'point', 'price', 'max_quantity', 'photos', 'is_approve', 'poster', 'extra'],
    'vehicles': taxonomyFields.concat(['code', 'icon']),
    'trips': baseFields.concat([
        'title', 'description', 'slug', 'creator', 'start_date', 'end_date', 'parent',
        'member_count', 'start_point', 'end_point', 'group', 'status', 'tags', 'fixed_price', 'photos', 'kind']),
    'steps': baseFields.concat([
        'title', 'description', 'trip', 'point', 'booking', 'start_point', 'end_point',
        'start_address', 'end_address', 'start_date', 'end_date', 'estimate_price', 'vehicle']),
    'groups': baseFields.concat(taxonomyFields)
}


const fields = [
    {
        field: 'title',
        label: 'Tiêu đề',
        type: 'text',
        show: true,
        update: true
    },
    {
        field: 'slug',
        label: 'Slug',
        type: 'text',
        show: true,
        update: true
    },
    {
        field: 'description',
        label: 'Mô tả',
        type: 'text',
        show: false,
        update: true
    },
    {
        field: 'coordinates',
        label: 'Tọa độ',
        type: 'array',
        show: false,
        update: true
    },
    {
        field: 'address',
        label: 'Địa chỉ',
        type: 'text',
        show: false,
        update: true
    },
    {
        field: 'contact',
        label: 'Liên hệ',
        type: 'object',
        show: false,
        update: true
    },
    {
        field: 'extra',
        label: 'Bổ xung',
        type: 'object',
        show: false,
        update: true
    },
    {
        field: 'continent',
        label: 'Lục địa',
        type: 'String',
        show: false,
        update: true
    },
    {
        field: 'areas',
        label: 'Khu vực',
        type: 'generic',
        show: false,
        update: true,
        source: '/destination/areas/'
    },
    {
        field: 'nation',
        label: 'Quốc gia',
        type: 'generic',
        show: false,
        update: true,
        source: '/destination/nations/'
    },
    {
        field: 'destination',
        label: 'Điểm đến',
        type: 'generic',
        show: false,
        update: true,
        source: '/destination/destinations/'
    },
    {
        field: 'point',
        label: 'Địa điểm',
        type: 'generic',
        show: false,
        update: true,
        source: '/destination/points/'
    },
    {
        field: 'tags',
        label: 'Thẻ',
        type: 'generic',
        show: false,
        update: true,
        source: '/destination/point-tags/'
    },
    {
        field: 'poster',
        label: 'Người đăng',
        type: 'generic',
        show: false,
        update: true,
        source: '/auth/user/'
    },
    {
        field: 'staff',
        label: 'Quản lý',
        type: 'generic',
        show: false,
        update: true,
        source: '/auth/user/'
    },
    {
        field: 'is_important',
        label: 'Quan trọng',
        type: 'boolean',
        show: false,
        update: true
    },
    {
        field: 'is_special',
        label: 'Đặc biệt',
        type: 'boolean',
        show: false,
        update: true
    },
    {
        field: 'is_approve',
        label: 'Phê duyệt',
        type: 'boolean',
        show: true,
        update: true
    },
    {
        field: 'content_types',
        label: 'Content Type',
        type: 'generic',
        show: false,
        update: true,
        source: '/general/content-types/'
    },
    {
        field: 'label',
        label: 'Label',
        type: 'string',
        show: false,
        update: true
    },
    {
        field: 'photo',
        label: 'Hình ảnh',
        type: 'generic',
        show: false,
        update: true,
        source: '/media/media/'
    },
    {
        field: 'photos',
        label: 'Hình ảnh',
        type: 'gallery',
        show: false,
        update: true,
    },
    {
        field: 'price',
        label: 'Giá',
        type: 'text',
        show: true,
        update: true
    },
    {
        field: 'max_quantity',
        label: 'Số lượng',
        type: 'text',
        show: true,
        update: true
    },
    {
        field: 'kind',
        label: 'Kiểu',
        type: 'option',
        show: true,
        update: true,
        model: ['points', 'services'],
        options: [
            {
                value: 'accommodation',
                title: 'Nghỉ ngơi'
            },
            {
                value: 'restaurant',
                title: 'Ăn uống'
            },
            {
                value: 'visit-point',
                title: 'Thăm quan'
            }
        ]
    },
    {
        field: 'kind',
        label: 'Kiểu',
        type: 'option',
        show: true,
        update: true,
        model: ['trips'],
        options: [
            {
                value: 'SINGLE',
                title: 'Nghỉ ngơi'
            },
            {
                value: 'TOUR',
                title: 'Theo nhóm tour'
            },
            {
                value: 'TRAVEL',
                title: 'Theo nhóm tự do'
            },
            {
                value: 'SCOUT',
                title: 'Tiền trạm'
            }
        ]
    },
    {
        field: 'status',
        label: 'Trạng thái',
        type: 'option',
        show: true,
        update: true,
        model: ['trips'],
        options: [
            {
                value: 'DELETE',
                title: 'Đã xóa'
            },
            {
                value: 'OFF',
                title: 'Đóng'
            },
            {
                value: 'ON',
                title: 'Mở'
            },
            {
                value: 'PENDING',
                title: 'Chờ duyệt'
            }
        ]
    },
    {
        field: 'created',
        label: 'Ngày tạo',
        type: 'date',
        show: true,
        update: true
    },
    {
        field: 'start_date',
        label: 'Bắt đầu',
        type: 'date',
        show: false,
        update: true
    },
    {
        field: 'end_date',
        label: 'Kết thúc',
        type: 'date',
        show: false,
        update: true
    },
    {
        field: 'start_point',
        label: 'Bắt đầu',
        type: 'generic',
        show: false,
        update: true,
        model: ['trips'],
        source: '/destination/points/'
    },
    {
        field: 'end_point',
        label: 'Kết thúc',
        type: 'generic',
        show: false,
        update: true,
        model: ['trips'],
        source: '/destination/points/'
    },
    {
        field: 'start_point',
        label: 'Bắt đầu',
        type: 'text',
        show: false,
        update: true,
        model: ['steps'],
    },
    {
        field: 'end_point',
        label: 'Kết thúc',
        type: 'text',
        show: false,
        update: true,
        model: ['steps'],
    },
    {
        field: 'start_address',
        label: 'Vị trí đầu',
        type: 'text',
        show: true,
        update: true
    },
    {
        field: 'end_address',
        label: 'Vị trí cuối',
        type: 'text',
        show: true,
        update: true
    },
    {
        field: 'estimate_price',
        label: 'Giá ước tính',
        type: 'text',
        show: true,
        update: true
    },
]

Vue.mixin({
    methods: {
        getSchema(str, flag) {
            let out = fields.filter(item => item.show === flag && SCHEMA[str].indexOf(item.field) !== -1)
            out = out.filter(item => typeof item.model === 'undefined' || item.model.indexOf(str) !== -1)
            return out
        },
    }
})
