<template>
    <div class="my-20 lg:my-8">
        <div class="relative bg-[#f3f7f4] h-full lg:h-auto overflow-hidden mt-0 lg:-mt-52">

            <div class="absolute -right-60 lg:right-96 -top-80">
                <img src="~/assets/images/gradient-radial2.png" alt="gradient2" />
            </div>
            <div class="absolute -right-20 lg:right-20 -top-96">
                <img src="~/assets/images/gradient-radial2.png" alt="gradient2" />
            </div>

            <section class="wrapper z-30 lg:px-8 my-20 lg:my-44 flex justify-center items-start">
                <div class="w-full lg:w-[60%] px-6 md:px-8 xl:px-0 py-20">
                    <h2 class="title">{{ Homepage.pricing.title }}</h2>
                    <Markdown :markdown="Homepage.pricing.richDescription" classMarkdown="mt-8 text-lg lg:text-xl" />
                </div>
            </section>

        </div>
        <section class="max-w-7xl mx-auto px-6 md:px-8 xl:px-0 my-40">
            <h2 class="title">
                {{ Homepage.pricing.hosted.title }}
            </h2>
            <p class="description">
                {{ Homepage.pricing.hosted.description }}
            </p>

        </section>

        <div v-if="this.$i18n.locale === 'en'" class="my-10 lg:my-20">
<stripe-pricing-table pricing-table-id="prctbl_1NKDrtBgLc2EM681tZp7uIpk"
publishable-key="pk_live_51NHOzeBgLc2EM681OYNUSlvL6FpdZAixw3ZWxSx6aTKipnkCIZAimEj9msR6HJ5iU6qjZ9IJnuvc9Kxkkjrerfl400iDr2pnrB">
</stripe-pricing-table>
        </div>

        <div v-else class="my-10 lg:my-20">
<stripe-pricing-table pricing-table-id="prctbl_1NKE13BgLc2EM6814q9yDYLN"
publishable-key="pk_live_51NHOzeBgLc2EM681OYNUSlvL6FpdZAixw3ZWxSx6aTKipnkCIZAimEj9msR6HJ5iU6qjZ9IJnuvc9Kxkkjrerfl400iDr2pnrB">
</stripe-pricing-table>
        </div>

        <div class="max-w-7xl mx-auto">
            <nuxt-link :to=Homepage.action.url class="cta-hover my-5 cursor-pointer flex items-center justify-center">
                <button class="text-lg md:text-xl lg:text-2xl mr-5">
                    {{ Homepage.action.title }}
                </button>
                <div class="cta arrow">
                    <nuxt-img src="~/assets/icons/arrow.svg" />
                </div>
            </nuxt-link>
        </div>

        <section class="max-w-7xl mx-auto px-6 md:px-8 xl:px-0 my-40">
            <h2 class="title">
                {{ Homepage.pricing.selfhosted.title }}
            </h2>
            <p class="description">
                {{ Homepage.pricing.selfhosted.description }}
            </p>
        </section>

        <div v-if="this.$i18n.locale === 'en'" class="my-10 lg:my-20">
<stripe-pricing-table pricing-table-id="prctbl_1NKDxJBgLc2EM681iINLpb8w"
publishable-key="pk_live_51NHOzeBgLc2EM681OYNUSlvL6FpdZAixw3ZWxSx6aTKipnkCIZAimEj9msR6HJ5iU6qjZ9IJnuvc9Kxkkjrerfl400iDr2pnrB">
</stripe-pricing-table>
        </div>
        <div v-else class="my-10 lg:my-20">
<stripe-pricing-table pricing-table-id="prctbl_1NKEIpBgLc2EM681stkEJUPf"
publishable-key="pk_live_51NHOzeBgLc2EM681OYNUSlvL6FpdZAixw3ZWxSx6aTKipnkCIZAimEj9msR6HJ5iU6qjZ9IJnuvc9Kxkkjrerfl400iDr2pnrB">
</stripe-pricing-table>
        </div>

        <div class="max-w-7xl mx-auto my-20">
            <nuxt-link :to=Homepage.action.url class="cta-hover my-5 cursor-pointer flex items-center justify-center">
                <button class="text-lg md:text-xl lg:text-2xl mr-5">
                    {{ Homepage.action.title }}
                </button>
                <div class="cta arrow">
                    <nuxt-img src="~/assets/icons/arrow.svg" />
                </div>
            </nuxt-link>
        </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
    name: 'PricingIndex',

    computed: {
        ...mapGetters(['Homepage']),

    },

}
</script>

<style scoped></style>