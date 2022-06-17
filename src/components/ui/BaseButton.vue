<template>
    <button v-if="!link" :class="mode" class="btn btn-primary submit_btn">

        <slot>

        </slot>
    </button>
    <router-link v-else :to="to" :class="mode">
        <button class="btn btn-primary add_btn">

            <slot></slot>
        </button>

    </router-link>
</template>

<script>
export default {
    props: {
        mode: {
            type: String,
            required: false,
            default: null
        },
        link: {
            type: Boolean,
            required: false,
            default: null
        },
        to: {
            type: String,
            required: false,
            default: '/'
        }
    }
}
</script>


<style scoped>
.add_btn {}
</style>