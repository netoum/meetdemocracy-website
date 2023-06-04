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
<stripe-pricing-table pricing-table-id="prctbl_1NFCnkLOhqkFFBKGs1nEjgCp"
publishable-key="pk_live_51NETryLOhqkFFBKGcvxVXAps3nsApWa8ubQECrWU4jXGoIp4rwQI12MHVhuRbOuwFLT0WZAQosQCsbzy9kC6zW9s00HoWu4B8p">
</stripe-pricing-table>
        </div>

        <div v-else class="my-10 lg:my-20">
<stripe-pricing-table pricing-table-id="prctbl_1NFGDILOhqkFFBKGBVyTdgr8"
publishable-key="pk_live_51NETryLOhqkFFBKGcvxVXAps3nsApWa8ubQECrWU4jXGoIp4rwQI12MHVhuRbOuwFLT0WZAQosQCsbzy9kC6zW9s00HoWu4B8p">
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
<stripe-pricing-table pricing-table-id="prctbl_1NFDPRLOhqkFFBKGQSjS0G78"
publishable-key="pk_live_51NETryLOhqkFFBKGcvxVXAps3nsApWa8ubQECrWU4jXGoIp4rwQI12MHVhuRbOuwFLT0WZAQosQCsbzy9kC6zW9s00HoWu4B8p">
</stripe-pricing-table>
            </div>
            <div v-else class="my-10 lg:my-20">
<stripe-pricing-table pricing-table-id="prctbl_1NFGF5LOhqkFFBKGXMW4b4O4"
publishable-key="pk_live_51NETryLOhqkFFBKGcvxVXAps3nsApWa8ubQECrWU4jXGoIp4rwQI12MHVhuRbOuwFLT0WZAQosQCsbzy9kC6zW9s00HoWu4B8p">
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