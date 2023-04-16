<template>
    <main>
        <section class="relative bg-[#f3f7f4] h-full lg:h-auto lg:mt-28 overflow-hidden">
            <div class="absolute -left-40 lg:-left-40 hero-bg-1 w-[400px] h-[400px] lg:w-[900px] lg:h-[900px]" />
            <div class="absolute -right-60 lg:-right-32 hero-bg-2 w-[400px] h-[400px] lg:w-[600px] lg:h-[500px]" />
            <div class="wrapper h-full pt-10 px-8 xl:px-0 pb-28">
                <div class="flex flex-col lg:ml-20">
                    <h2 class="text-4xl lg:text-6xl font-medium font-fontHero ">{{ privacy.title }}</h2>
                </div>
            </div>
        </section>
        <section class="my-20 container max-w-7xl mx-auto">
            <privacy-article v-for="priv in privacy.document" :key="priv.id" :priv="priv" />
        </section>
    </main>
</template>
  
  
<script>

export default {
    name: 'PrivacyPage',
    async asyncData({ store, i18n }) {
        try {
            const privacy = await (
                await fetch(`${store.state.apiUrl}/privacy?locale=${i18n.locale}&populate=*`)
            ).json()
            console.log(privacy);
            return {
                privacy: privacy.data.attributes
            }
        }
        catch (error) {
            console.log(error);
        }
    },

    head() {
        return {
            title: this.privacy.Seo.metaTitle,
            description: this.privacy.Seo.metaDescription,

            meta: [
                {
                    hid: 'og:title',
                    name: 'og:title',
                    content: this.privacy.Seo.metaTitle,
                },
                {
                    hid: 'og:description',
                    name: 'og:description',
                    content: this.privacy.Seo.metaDescription
                }
            ]
        }
    },



}
</script>