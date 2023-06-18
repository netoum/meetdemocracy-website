<template>
    <div class="flex flex-col">
        <section class="wrapper px-6 md:px-8 xl:px-0 my-10 lg:my-20">
            <h2 class="pricing-title">
                {{ Pricing.hosted.title }}
            </h2>
            <!-- <button type="button" @click="switchDataObject">Switch</button> -->
            <p class="pricing-description">
                {{ Pricing.hosted.description }}
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

        <pricing-table-hosted />

        <section class="max-w-7xl mx-auto px-6 md:px-8 xl:px-0 my-10 lg:my-20">
            <h2 class="pricing-title">
                {{ Pricing.selfhosted.title }}
            </h2>
            <!-- <button type="button" @click="switchDataObject">Switch</button> -->
            <p class="pricing-description">
                {{ Pricing.selfhosted.description }}
            </p>

        </section>
        <div class="my-10 lg:mb-20">
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
        </div>

        <pricing-table-self-hosted />

    </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
    name: 'PricingSection',
    computed: {
        ...mapGetters(['Pricing']),
    },

}
</script>