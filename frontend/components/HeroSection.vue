<template>
    <section class="relative bg-[#f3f7f4] h-auto lg:mt-28 lg:pb-20 overflow-hidden">
        <img src="~/assets/images/gradient-radial4.png"
            class="absolute -left-40 lg:-left-96 lg:-top-24 w-[400px] h-[400px] lg:w-[900px] lg:h-[900px]" alt="gradient4">

        <img src="~/assets/images/gradient-radial5.png"
            class="absolute -right-60 top-60 w-[400px] h-[400px] lg:w-[700px] lg:h-[700px]" alt="gradient5">
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
                    <div class="absolute lg:right-[50px] 2xl:right-[40px] bottom-[200px] lg:bottom-[350px] h-auto">
                        <nuxt-img class="object-cover" src="/images/desktop-meetdemocracy.png"
                            sizes="sm:350px md:410px lg:420px 2xl:440px" />
                    </div>
                    <div
                        class="absolute mr-12 md:mr-60 lg:mr-0 top-[240px] lg:top-[340px] lg:right-[220px] 2xl:right-[170px] h-auto">
                        <nuxt-img class="object-cover" src="/images/laptop-meetdemocracy.png"
                            sizes="300px md:380px lg:420px 2xl:490px" />
                    </div>
                    <div
                        class="absolute -mr-44 md:-mr-60 lg:mr-0 top-[210px] lg:top-[300px] lg:-right-[10px] 2xl:-right-[20px] h-auto ">
                        <nuxt-img class="object-cover" src="/images/tablette-meetdemocracy.png"
                            sizes="150px md:210px lg:230px 2xl:250px" />
                    </div>
                    <div
                        class="absolute mr-20 lg:mr-0 top-[330px] lg:top-[420px] lg:-right-[30px] 2xl:-right-[80px] lg:h-[150px] md:h-[135px] h-[120px] ">
                        <nuxt-img class="object-cover" src="/images/phone-meetdemocracy.png"
                            sizes="80px md:110px lg:130px 2xl:150px" />
                    </div>
                </div>

            </div>
            <div class="lg:hidden absolute -bottom-60">
                <img class="" src="~/assets/images/gradient-radial2.png" alt="gradient2">
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