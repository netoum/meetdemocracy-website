<template>
    <main>
        <section class="relative bg-[#f3f7f4] h-full lg:h-auto lg:mt-28 overflow-hidden">
            <div class="absolute -left-40 lg:-left-40 hero-bg-1 w-[400px] h-[400px] lg:w-[900px] lg:h-[900px]" />
            <div class="absolute -right-60 lg:-right-32 hero-bg-2 w-[400px] h-[400px] lg:w-[600px] lg:h-[500px]" />
            <div class="wrapper h-full pt-10 px-8 xl:px-0 pb-28">
                <div class="flex flex-col lg:ml-20">
                    <h2 class="title mt-8">{{ terms.title }}</h2>
                </div>
                <!-- {{ terms.document }} -->
            </div>
        </section>
        <section class="my-20 container max-w-7xl mx-auto">
            <terms-article v-for="term in terms.document" :key="term.id" :term="term" />
        </section>
    </main>
</template>
  
  
<script>

export default {
    name: 'TermPage',
    async asyncData({ store, i18n }) {
        try {
            const terms = await (
                await fetch(`${store.state.apiUrl}/term?locale=${i18n.locale}&populate=*`)
            ).json()

            return {
                terms: terms.data.attributes
            }
        }
        catch (error) {
            console.log(error);
        }
    },

    head() {
        return {
            title: this.terms.Seo.metaTitle,
            description: this.terms.Seo.metaDescription,

            meta: [
                {
                    hid: 'og:title',
                    name: 'og:title',
                    content: this.terms.Seo.metaTitle,
                },
                {
                    hid: 'og:description',
                    name: 'og:description',
                    content: this.terms.Seo.metaDescription
                }
            ]
        }
    },




}
</script>