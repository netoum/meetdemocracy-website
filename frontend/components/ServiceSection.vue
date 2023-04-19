<template>
    <section class="wrapper px-8 xl:px-0 my-20">
        <div class="flex lg:flex-row flex-col lg:space-x-5 space-y-10 lg:space-y-0 h-full">
            <div class="w-full lg:w-[50%]">
                <div class="flex justify-center items-center h-full">
                    <nuxt-img provider="strapi" class="h-auto w-auto object-cover p-10 lg:p-20" :src="coverImageUrl"
                        :alt="feature.title" />
                </div>
            </div>
            <a :href=feature.view.url target="_blank"
                class="card cta-hover text-primary hover:text-primary flex flex-col justify-center">
                <h1 class="subtitle-index my-4">{{ feature.subtitle }}</h1>
                <h2 class="title-index">{{ feature.title }}</h2>
                <Markdown :markdown="feature.descriptionCard" />

                <div class="mt-5 flex items-center justify-end">
                    <span class="button-text">
                        {{ feature.view.title }}
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
    name: 'ServiceSection',
    props: ['feature'],

    computed: {

        coverImageUrl() {
            const url = this.$store.state.url
            const imagePath = this.feature.image.data.attributes.formats.medium.url
            console.log(imagePath);
            return url + imagePath
        }
    }
}
</script>

<style scoped></style>