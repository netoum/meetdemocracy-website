<template>
    <main>
        <section class="relative bg-[#f3f7f4] h-full lg:h-auto lg:mt-28 overflow-hidden">

            <nuxt-img provider="static" src="/images/gradient-radial3.png"
                class="absolute -right-60 top-60 w-[400px] h-[400px] lg:w-[700px] lg:h-[700px]" alt="gradient5" />


            <div class="wrapper h-full pt-10 px-8 xl:px-0 pb-32 lg:pb-48">
                <div class="flex flex-col md:flex-row">
                    <article
                        class="lg:w-4/5 mx-auto text-primary_bg mt-10 xl:mt-20 flex justify-center items-start flex-col h-full">
                        <h1 class="subtitle-index">
                            {{ consulFeatures.subtitle }}
                        </h1>
                        <h2 class="title mt-6">{{ consulFeatures.title }}</h2>
                        <p class="description">
                            {{ consulFeatures.description }}
                        </p>
                    </article>
                </div>
            </div>
        </section>
        <consul-section v-for="consul in consulCards" :key="'b' + consul.id" :consul="consul.attributes" />
    </main>
</template>

<script>

export default {
    name: 'ConsulPage',
    async asyncData({ i18n, store }) {
        try {

            const consulFeatures = await (
                await fetch(`${store.state.apiUrl}/consul?locale=${i18n.locale}&populate=*`)
            ).json()

            const consulCards = await (
                await fetch(`${store.state.apiUrl}/consulcards?locale=${i18n.locale}&populate=deep&sort=rank:asc`)
            ).json()

            return {
                consulFeatures: consulFeatures.data.attributes,
                consulCards: consulCards.data,

            }
        }
        catch (error) {
            console.log(error);
        }
    },

    head() {
        return {
            title: this.consulFeatures.Seo.metaTitle,
            descrption: this.consulFeatures.Seo.metaDescription,
            meta: [
                {
                    hid: 'og:title',
                    name: 'og:title',
                    content: this.consulFeatures.Seo.metaTitle,
                },
                {
                    hid: 'og:description',
                    name: 'og:description',
                    content: this.consulFeatures.Seo.metaDescription,
                }
            ]

        }
    }

}
</script>