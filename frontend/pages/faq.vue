<template>
    <main>
        <section class="relative bg-[#f3f7f4] h-full lg:h-auto lg:mt-28 overflow-hidden">
            <nuxt-img provider="static" src="/images/gradient-radial5.png"
                class="absolute -right-60 top-60 w-[400px] h-[400px] lg:w-[700px] lg:h-[700px]" alt="gradient5" />
            <div class="wrapper h-full pt-10 px-8 xl:px-0 pb-20 lg:pb-48">
                <div class="flex flex-col lg:ml-20">
                    <h1 class="subtitle-index">
                        {{ faqPage.subtitle }}
                    </h1>
                    <h2 class="title mt-6">{{ faqPage.title }}</h2>
                </div>
            </div>

        </section>

        <div class="wrapper lg:-mt-20 bg-white lg:p-20 p-8">
            <div class="container flex flex-wrap">
                <div class="hidden lg:block lg:w-[35%] my-7">
                    <ul v-for="(category, index) in categories" :key="category.id" class="mr-12 border-r">
                        <li @click="scrollToCategory(index)" class="faq-category-name">
                            {{ category.attributes.name }}
                        </li>
                    </ul>
                </div>
                <div class="w-full lg:w-[65%]">
                    <div v-for="(category, index) in categories" :key="category.id">
                        <h2 class="faq-category-name-question" ref="categoryName">
                            {{ category.attributes.name }}
                        </h2>
                        <div v-for="(faq, faqIndex) in faqsByCategory(category.id)" :key="faq.id"
                            class="border-b py-3 cursor-pointer"
                            :class="{ active: activeIndex === faqIndex && activeCategory === index }"
                            @click="toggleAccordion(index, faqIndex)">
                            <div class=" text-primary_bg hover:text-opacity-60 transform duration-300 ease-in-out">
                                <h3 class="faq-question ">
                                    {{ faq.attributes.question }}
                                </h3>
                            </div>
                            <div v-if="activeIndex == faqIndex && activeCategory == index" class="overflow-hidden">
                                <Markdown :markdown="faq.attributes.reponse" />
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </main>
</template>
  
<script>

export default {
    async asyncData({ store, i18n }) {
        try {
            const faqPage = await (
                await fetch(`${store.state.apiUrl}/faqpage?locale=${i18n.locale}&populate=*`)
            ).json()

            return {
                faqPage: faqPage.data.attributes
            }
        }
        catch (error) {
            console.log(error);
        }
    },
    head() {
        return {
            title: this.faqPage.Seo.metaTitle,
            description: this.faqPage.Seo.metaDescription,

            meta: [
                {
                    hid: 'og:title',
                    name: 'og:title',
                    content: this.faqPage.Seo.metaTitle,
                },
                {
                    hid: 'og:description',
                    name: 'og:description',
                    content: this.faqPage.Seo.metaDescription
                }
            ]
        }
    },

    data() {
        return {
            categories: [],
            faqs: [],
            activeCategory: null,
            activeIndex: null,

        };
    },
    async mounted() {
        try {
            const response = await this.$axios.$get(`${this.$store.state.apiUrl}/categories?locale=${this.$i18n.locale}`);
            this.categories = response.data;
            const faqsResponse = await this.$axios.$get(`${this.$store.state.apiUrl}/faqs?locale=${this.$i18n.locale}&populate=*`);
            this.faqs = faqsResponse.data;

        } catch (error) {
            console.error(error);
        }
    },
    methods: {
        faqsByCategory(categoryId) {
            return this.faqs.filter(faq => faq.attributes.category.data.id === categoryId);
        },
        toggleAccordion(categoryIndex, faqIndex) {
            this.activeCategory = categoryIndex
            this.activeIndex = this.activeIndex === faqIndex && this.activeCategory === categoryIndex ? null : faqIndex
        },

        scrollToCategory(categoryIndex) {
            const categoryName = this.$refs.categoryName[categoryIndex];
            const offset = -130;
            const position = categoryName.getBoundingClientRect().top;
            const offsetPosition = position + window.pageYOffset + offset;
            window.scrollTo({
                top: offsetPosition,
                behavior: "smooth"
            });
        },
    },

}
</script>