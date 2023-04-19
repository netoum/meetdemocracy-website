<template>
    <main>
        <section class="relative bg-[#f3f7f4] h-full lg:h-auto lg:mt-28 overflow-hidden">
            <nuxt-img provider="static" src="/images/gradient-radial2.png"
                class="absolute -left-40 lg:-left-40 lg:-top-10 w-[400px] h-[400px] lg:w-[700px] lg:h-[700px]"
                alt="gradient4" />

            <nuxt-img provider="static" src="/images/gradient-radial3.png"
                class="absolute -right-60 top-60 w-[400px] h-[400px] lg:w-[700px] lg:h-[700px]" alt="gradient5" />

            <div class="wrapper h-full pt-10 px-8 xl:px-0 pb-32 lg:pb-48">
                <div class="flex flex-col md:flex-row">
                    <article
                        class="lg:w-4/5 mx-auto text-primary_bg mt-10 xl:mt-20 flex justify-center items-start flex-col h-full">
                        <h1 class="subtitle-index">
                            {{ pricing.subtitle }}
                        </h1>
                        <h2 class="title mt-6">{{ pricing.title }}</h2>
                        <p class="description">
                            {{ pricing.description }}
                        </p>
                    </article>
                </div>
            </div>
        </section>
        <pricing-section />
        <pricing-table-features />
    </main>
</template>

<script>

export default {
    name: 'PricingPage',
    async asyncData({ i18n, store }) {
        try {

            const pricing = await (
                await fetch(`${store.state.apiUrl}/pricing?locale=${i18n.locale}&populate=deep`)
            ).json()

            store.commit('setPricing', pricing.data.attributes)
            return {
                pricing: pricing.data.attributes
            }
        }
        catch (error) {
            console.log(error);
        }
    },
    head() {
        return {
            title: this.pricing.Seo.metaTitle,
            descrption: this.pricing.Seo.metaDescription,
            meta: [
                {
                    hid: 'og:title',
                    name: 'og:title',
                    content: this.pricing.Seo.metaTitle,
                },
                {
                    hid: 'og:description',
                    name: 'og:description',
                    content: this.pricing.Seo.metaDescription,
                }
            ]

        }
    }
}
</script>

<style scoped></style>