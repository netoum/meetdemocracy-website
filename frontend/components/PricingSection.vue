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
             <stripe-pricing-table pricing-table-id="prctbl_1MldpkJpugXzHFOvmCB4ttoD"
                publishable-key="pk_live_51MWNk2JpugXzHFOvPvu6h6i8F5jUV0lyYjJzOj1PrL477t7e9VO9zu8EjkaP4KYo5QoS2d2Yxg4lU99c5fNMmY5K00uwJvmF21">
            </stripe-pricing-table>
        </div>

        <div v-else class="my-10 lg:my-20">
             <stripe-pricing-table pricing-table-id="prctbl_1MtSzbJpugXzHFOvPV0FXAnU"
                publishable-key="pk_live_51MWNk2JpugXzHFOvPvu6h6i8F5jUV0lyYjJzOj1PrL477t7e9VO9zu8EjkaP4KYo5QoS2d2Yxg4lU99c5fNMmY5K00uwJvmF21">
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
                     <stripe-pricing-table pricing-table-id="prctbl_1MleBmJpugXzHFOvTT1PvKYN"
                    publishable-key="pk_live_51MWNk2JpugXzHFOvPvu6h6i8F5jUV0lyYjJzOj1PrL477t7e9VO9zu8EjkaP4KYo5QoS2d2Yxg4lU99c5fNMmY5K00uwJvmF21">
                </stripe-pricing-table>
            </div>
            <div v-else class="my-10 lg:my-20">
                     <stripe-pricing-table pricing-table-id="prctbl_1MtT2mJpugXzHFOv81oN5KBR"
                    publishable-key="pk_live_51MWNk2JpugXzHFOvPvu6h6i8F5jUV0lyYjJzOj1PrL477t7e9VO9zu8EjkaP4KYo5QoS2d2Yxg4lU99c5fNMmY5K00uwJvmF21">
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