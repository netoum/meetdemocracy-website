<template>
    <div class="wrapper mt-0 lg:-mt-20 flex flex-col lg:p-20 z-20 p-10">
        <section class="w-full md:px-8 xl:px-0 mb-10">
            <div class="py-20">
                <h2 class="title">
                    {{ Homepage.consulplatform.title }}</h2>
                <p class="description">
                    {{ Homepage.consulplatform.description }}
                </p>
            </div>
        </section>
        <div v-for="card in Homepage.consulplatform.cards" :key="card.id"
            class="flex lg:flex-row flex-col lg:space-x-5 space-y-2 lg:space-y-0">
            <div class="w-full lg:w-[50%]">
                <div class="flex justify-center items-center h-full">
                    <img class="h-auto w-auto object-cover" :src="coverImageUrl(card)" alt="consul-index">
                </div>
            </div>
            <nuxt-link :to=card.url class="cta-hover card flex flex-col justify-center">
                <h1 class="subtitle-index md:text-lg">{{ card.subtitle }}</h1>
                <h2 class="title-index md:text-4xl">{{ card.name }}</h2>
                <p class="text-[16px] md:text-[18px] lg:text-lg mb-[40px] text-primary_bg">{{ card.description }}</p>
                <div class="mt-5 flex items-center justify-end">
                    <span class="button-text md:text-xl">
                        {{ card.button }}
                    </span>
                    <div class="cta arrow flex-shrink-0">
                        <nuxt-img src="~/assets/icons/arrow.svg" />
                    </div>
                </div>
            </nuxt-link>
        </div>

    </div>
</template>

<script>

import { mapGetters } from 'vuex'


export default {
    name: 'ConsulPlatformIndex',

    computed: {
        ...mapGetters(['Homepage']),
    },

    methods: {
        coverImageUrl(card) {
            const url = this.$store.state.url
            const imagePath = card.image.data.attributes.formats.medium.url
            return url + imagePath
        }
    }



}
</script>

<style scoped>
.cta-hover:hover .cta {
    transform: translateX(10px);
}
</style>