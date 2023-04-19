<template>
    <section class="relative bg-[#f3f7f4] h-auto lg:mt-28 lg:pb-20 overflow-hidden">
        <nuxt-img provider="static" src="/images/gradient-radial4.png"
            class="absolute -left-40 lg:-left-96 lg:-top-24 w-[400px] h-[400px] lg:w-[900px] lg:h-[900px]"
            alt="gradient4" />

        <nuxt-img provider="static" src="/images/gradient-radial5.png"
            class="absolute -right-60 top-60 w-[400px] h-[400px] lg:w-[700px] lg:h-[700px]" alt="gradient5" />
        <div class="wrapper h-full pt-12 lg:pt-24 px-8 xl:px-0 pb-20 lg:pb-36">
            <div class="flex flex-col lg:flex-wrap lg:h-[600px]">
                <div class="w-auto lg:w-[45%] text-primary_bg mt-5 xl:mt-10 flex flex-col h-full">
                    <h1 class="subtitle text-[#3e6b65]  my-4">
                        {{ Homepage.hero.subtitle }}
                    </h1>
                    <h2 class="title font-bold">
                        {{ Homepage.hero.title }}
                    </h2>
                    <p class="description">
                        {{ Homepage.hero.description }}
                    </p>
                    <nuxt-link :to=Homepage.hero.action.url>
                        <span class="btn inline-block text-center mt-[35px]">
                            {{ Homepage.hero.action.name }}
                        </span>
                    </nuxt-link>

                </div>

                <div class="relative lg:static z-20 h-[500px] lg:h-full max-w-full mt-24 flex justify-center items-center">
                    <div
                        class="absolute lg:right-[50px] 2xl:right-[40px] bottom-[200px] lg:bottom-[350px] h-auto w-[350px] md:w-[410px] lg:w-[420px] 2xl:w-[440px]">
                        <nuxt-img provider="static" class="object-cover" src="~/assets/images/desktop-meetdemocracy.png"
                            alt="desktop-image" />
                    </div>
                    <div
                        class="absolute mr-12 md:mr-60 lg:mr-0 top-[240px] lg:top-[340px] lg:right-[220px] 2xl:right-[170px] h-auto w-[300px] md:w-[380px] lg:w-[420px] 2xl:w-[490px]">
                        <nuxt-img provider="static" class="object-cover" src="~/assets/images/laptop-meetdemocracy.png"
                            alt="laptop-image" />
                    </div>
                    <div
                        class="absolute -mr-44 md:-mr-60 lg:mr-0 top-[210px] lg:top-[300px] lg:-right-[10px] 2xl:-right-[20px] h-auto w-[150px] md:w-[210px] lg:w-[230px] 2xl:w-[250px]">
                        <nuxt-img provider="static" class="object-cover" src="~/assets/images/tablette-meetdemocracy.png"
                            alt="tablette-image" />
                    </div>
                    <div
                        class="absolute mr-20 lg:mr-0 top-[330px] lg:top-[420px] lg:-right-[30px] 2xl:-right-[80px] lg:h-[150px] md:h-[135px] h-[120px] w-[80px] md:w-[110px] lg:w-[130px] 2xl:w-[150px]">
                        <nuxt-img provider="static" class="object-cover" src="~/assets/images/phone-meetdemocracy.png"
                            alt="mobile-hero-image" />
                    </div>
                </div>

            </div>
            <div class="lg:hidden absolute -bottom-60">
                <nuxt-img provider="static" src="/images/gradient-radial2.png" alt="gradient2" />
            </div>
        </div>

    </section>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
    name: 'HeroSection',
    computed: {
        ...mapGetters(['Homepage']),

        coverImageUrl() {
            const url = this.$store.state.url
            const imagePath = this.Homepage.hero.image.data.attributes.formats.small.url
            return url + imagePath
        }
    },

}
</script>

<style scoped></style>