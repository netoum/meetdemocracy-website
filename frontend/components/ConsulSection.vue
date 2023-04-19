<template>
    <section class="wrapper px-8 xl:px-0 my-20">
        <div class="flex lg:flex-row flex-col lg:space-x-5 space-y-10 lg:space-y-0">
            <div class="w-full lg:w-[50%]">
                <div class="flex justify-center items-center h-full">
                    <nuxt-img provider="strapi" class="h-auto w-auto object-cover p-10 lg:p-20" :src="coverImageUrl"
                        :alt="consul.title" />
                </div>
            </div>
            <a :href=consul.view.url target="_blank" class="cta-hover card flex flex-col justify-center">
                <h1 class="subtitle-index my-4">{{ consul.subtitle }}</h1>
                <h2 class="title-index">{{ consul.title }}</h2>
                <Markdown :markdown="consul.descriptionCard" />

                <div class="mt-5 flex items-center justify-end">
                    <span class="button-text">
                        {{ consul.view.title }}
                    </span>
                    <div class="cta arrow flex-shrink-0">
                        <nuxt-img src="~/assets/icons/arrow.svg" />
                    </div>
                </div>
            </a>
        </div>

    </section>
</template>

<script>

export default {
    name: 'ConsulSection',
    props: ['consul'],
    computed: {

        coverImageUrl() {
            const url = this.$store.state.url
            const imagePath = this.consul.image.data[0].attributes.formats.medium?.url
            return url + imagePath
        }
    }
}
</script>

<style scoped></style>