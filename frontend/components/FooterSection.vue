<template>
    <footer v-if="Footers" class="relative bg-[#f3f7f4] pt-10 pb-6 px-8 xl:px-0">
        <div class="wrapper">
            <div class="flex flex-wrap text-left text-primary_bg lg:text-left">
                <div class="w-full lg:w-6/12">
                    <div class="mb-5 h-[80px]">
                        <Logo />
                    </div>

                    <Markdown :markdown="Footers.richDescription" />
                </div>
                <div class="w-full lg:w-6/12 text-primary_bg">
                    <div class="flex flex-wrap items-top mb-6">
                        <div class="w-full lg:w-4/12 lg:px-4 ml-auto mt-8 lg:mt-0">
                            <ul class="list-none">
                                <li v-for="(footer, index) in Footers.link" :key="index" v-if="index < 5">

                                    <a :href="footer.url" target="_blank" class="footer-link">{{
                                        footer.title
                                    }}
                                    </a>
                                </li>

                            </ul>

                        </div>
                        <div class="w-full lg:w-4/12 lg:px-4 my-10 lg:my-0">
                            <ul class="list-none">
                                <li v-for="(footer, index) in Footers.link" :key="index" v-if="index >= 5">
                                    <a :href="footer.url" target="_blank" class="footer-link">{{
                                        footer.title
                                    }}
                                    </a>
                                </li>

                            </ul>
                        </div>
                    </div>
                    <newsletter />
                </div>
            </div>

            <div class="flex flex-wrap items-center md:justify-between justify-center text-primary_bg mt-10">
                <div class="w-full md:w-4/12 px-4 mx-auto text-center">
                    <div class="text-sm py-1">
                        {{ Footers.copyrigth }}

                    </div>
                </div>
            </div>
        </div>

    </footer>
</template>

<script>

export default {
    name: 'NavBar',
    data() {
        return {
            Footers: null
        }
    },
    methods: {
        async getFooter() {
            const footers = await this.$axios.$get(`${this.$store.state.apiUrl}/footer?locale=${this.$i18n.locale}&populate=*`)
            this.Footers = footers.data.attributes

        }
    },

    mounted() {
        this.getFooter()
    },


}
</script>
