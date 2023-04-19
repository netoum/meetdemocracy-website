<template>
    <main>
        <section class="relative bg-[#f3f7f4] h-full lg:h-auto lg:mt-28 overflow-hidden">

            <nuxt-img provider="static" src="/images/gradient-radial4.png"
                class="absolute -left-40 lg:-left-60 lg:top-40 w-[400px] h-[400px] lg:w-[700px] lg:h-[700px]"
                alt="gradient4" />

            <nuxt-img provider="static" src="/images/gradient-radial5.png"
                class="absolute -right-60 top-0 w-[400px] h-[400px] lg:w-[700px] lg:h-[700px]" alt="gradient5" />

            <div class="wrapper h-full pt-10 px-8 xl:px-0 pb-32 lg:pb-48">
                <div class="flex wrap">
                    <article
                        class="lg:w-4/5 mx-auto text-primary_bg mt-10 xl:mt-20 flex justify-center items-start flex-col h-full">
                        <h1 class="subtitle-index">
                            {{ feature.subtitle }}
                        </h1>
                        <h2 class="title mt-6">{{ feature.title }}</h2>
                        <p class="description">
                            {{ feature.description }}
                        </p>
                    </article>
                </div>
            </div>

        </section>
        <service-section v-for="feature in featureCards" :key="'a' + feature.id" :feature="feature.attributes" />

    </main>
</template>

<script>
export default {
    name: 'ServicesPage',
    async asyncData({ i18n, store }) {
        try {

            const features = await (
                await fetch(`${store.state.apiUrl}/feature?locale=${i18n.locale}&populate=*`)
            ).json()
            const featureCards = await (
                await fetch(`${store.state.apiUrl}/featurecards?locale=${i18n.locale}&populate=deep&sort=rank:asc`)
            ).json()


            return {
                feature: features.data.attributes,
                featureCards: featureCards.data,
            }
        }
        catch (error) {
            console.log(error);
        }
    },

    head() {
        return {
            title: this.feature.Seo.metaTitle,
            descrption: this.feature.Seo.metaDescription,
            meta: [
                {
                    hid: 'og:title',
                    name: 'og:title',
                    content: this.feature.Seo.metaTitle,
                },
                {
                    hid: 'og:description',
                    name: 'og:description',
                    content: this.feature.Seo.metaDescription,
                }
            ]

        }
    }

}
</script>