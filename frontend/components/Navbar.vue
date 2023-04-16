<template>
    <header v-if="Navbar" class="header lg:h-28 px-8 xl:px-0 py-5 lg:py-0"
        :class="{ 'lg:bg-white lg:shadow-md': isScrolled }">
        <nav class="wrapper flex flex-wrap items-center justify-between lg:h-full">
            <nuxt-link :to=Navbar.logo_url>
                <Logo />
            </nuxt-link>
            <div class="ml-auto lg:hidden flex items-center">
                <div class="block lg:hidden">
                    <local-switchers />
                </div>
                <button type="button" @click="isOpen = !isOpen">
                    <svg :class="{ 'hidden': isOpen }" width="38" height="38" viewBox="0 0 24 24" fill="#201E25"
                        xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 18H3V16H12V18ZM21 13H3V11H21V13ZM21 8H12V6H21V8Z" fill="#201E25" />
                    </svg>
                    <svg :class="{ 'hidden': !isOpen }" width="38" height="38" viewBox="0 0 33 33" fill="#201E25"
                        xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M8.8 26.125L6.875 24.2L14.575 16.5L6.875 8.8L8.8 6.875L16.5 14.575L24.2 6.875L26.125 8.8L18.425 16.5L26.125 24.2L24.2 26.125L16.5 18.425L8.8 26.125Z"
                            fill="#201E25" />
                    </svg>

                </button>
            </div>
            <div class="w-full lg:flex lg:items-center lg:w-auto mt-12 lg:mt-0" :class="isOpen ? '' : 'hidden'">
                <ul class="lg:flex space-y-8 lg:space-y-0 lg:space-x-8 list-none">
                    <li v-for="link in Navbar.item" :key="link.id" class="lg:hoverlink">
                        <a :href="link.url" class="menu-link block">
                            {{ link.title }}
                        </a>
                    </li>
                </ul>
                <div class="hidden lg:block">
                    <local-switchers />
                </div>
                <a :href="Navbar.button.url" target="_blank" class="btn block text-center lg:ml-6 my-6 lg:my-0">
                    {{ Navbar.button.name }}
                </a>

            </div>
        </nav>
    </header>
</template>

<script>
// import { mapGetters } from 'vuex'
export default {
    name: 'NavBar',
    data() {
        return {
            Navbar: null,
            isOpen: false,
            isScrolled: false
        }
    },
    async fetch() {
        const response = await this.$axios.get(`${this.$store.state.apiUrl}/navbar?locale=${this.$i18n.locale}&populate=*`)
        this.Navbar = response.data.data.attributes

    },

    mounted() {
        window.addEventListener('scroll', this.handleScroll)
    },

    beforeDestroy() {
        window.removeEventListener('scoll', this.handleScroll)
    },

    methods: {
        handleScroll() {
            this.isScrolled = window.scrollY > 1
        }
    },

}
</script>

<style scoped>
/* .nuxt-link-exact-active {
    @apply text-primary_text font-semibold
} */
</style>