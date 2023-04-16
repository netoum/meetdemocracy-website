<template>
    <div class="relative lg:ml-12" ref="dropdown">
        <button @click="isOpen = !isOpen" class="focus:outline-none py-2 px-4">

            <img src="~/assets/icons/world.svg" alt="icon-world">

        </button>
        <transition name="dropdown">
            <div v-if="isOpen" class="absolute inset-0 mt-12 rounded-md shadow-lg" @click.self="closeDropdown">
                <div class="bg-white rounded-md shadow-md w-32">
                    <ul class="py-3 px-2">
                        <li v-for="locale in availableLocales" :key="locale.id">
                            <a :href="switchLocalePath(locale.code)" class="flex flex-row justify-start items-center">
                                <img class="h-7 w-7" :src="require(`~/assets/icons/${locale.icon}`)" :alt=locale.code>
                                <span class="ml-2 capitalize text-base font-normal">{{ locale.text }}</span>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </transition>

    </div>
</template>


<script>
export default {
    data() {
        return {
            isOpen: false,
            localeSwitch: null
        }
    },
    computed: {
        availableLocales() {
            const localeIcons = {
                en: 'en.svg',
                fr: 'fr.svg',

            }

            const localeText = {
                en: 'english',
                fr: 'français'
            }
            const locale_switch = this.$i18n.locales.filter(i => i.code !== this.$i18n.locale)

            const localeSwitch = locale_switch.map(locale => {
                return {
                    code: locale,
                    icon: localeIcons[locale],
                    text: localeText[locale]
                }
            })

            this.localeSwitch = localeSwitch

            return localeSwitch
        },

        closeDropdown(event) {
            if (!this.$refs.dropdown.contains(event.target)) {
                this.isOpen = false
            }
        }
    },


}
</script>

<style scoped>
.dropdown-enter-active,
.dropdown-leave-active {
    transition: all 0.3s ease-out;
}

.dropdown-enter,
.dropdown-leave-to {
    opacity: 0;
    transform: translateY(-10px);
}
</style>