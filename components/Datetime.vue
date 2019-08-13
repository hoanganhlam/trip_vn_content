<template>
    <div>
        <div class="columns is-multiline">
            <div class="column">
                <b-datepicker
                    v-model="date"
                    icon-pack="fa"
                    icon="calendar"
                    :size="size"
                    placeholder="Chọn ngày"
                    :unselectable-days-of-week="[0, 6]">
                </b-datepicker>
            </div>
            <div class="column">
                <b-clockpicker
                    v-model="date"
                    placeholder="Chọn giờ"
                    :size="size"
                    hour-format="24"></b-clockpicker>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Datetime",
        props: {
            value: {},
            size: {
                default: 'is-default'
            }
        },
        data() {
            return {
                date: new Date(this.value)
            }
        }
    }
</script>

<style scoped>

</style>
