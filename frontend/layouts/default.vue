<template>
    <div class="antialiased relative font-fontBase font-light flex flex-col min-h-screen overflow-hidden text-primary">

        <navbar />
        <div class="flex-grow">
            <Nuxt />
        </div>
        <div id="zammad-chat"></div>

        <!-- <button @click="openModal()" id="contact-button" type="button"
            class="fixed lg:right-8 lg:bottom-8 right-4 bottom-4 p-1 lg:p-3 z-50 transition duration-700 ease-in-out opacity-0">
            <div
                class=" bg-primary_text lg:hover:bg-opacity-80 text-white w-14 h-14 rounded-full flex justify-center
                                                                                                                                                                                                                                                                                                                                                                                    items-center transition duration-400 ease-in-out">
                <svg width="26" height="26" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clip-path="url(#clip0_84_2)">
                        <path fill-rule="evenodd" clip-rule="evenodd"
                            d="M0 4C0 1.78667 1.78933 0 4 0H36C38.2107 0 40 1.78667 40 4V27.9813C40 30.1947 38.2107 31.9813 36 31.9813H26.048L21.1093 39.3813C20.9876 39.5639 20.8226 39.7137 20.6291 39.8172C20.4356 39.9208 20.2195 39.975 20 39.975C19.7805 39.975 19.5644 39.9208 19.3709 39.8172C19.1774 39.7137 19.0124 39.5639 18.8907 39.3813L13.9547 31.9813H4C1.78933 31.9813 0 30.1947 0 27.9813V4ZM18.6667 24V18.6667H13.3333V16H18.6667V10.6667H21.3333V16H26.6667V18.6667H21.3333V24H18.6667Z"
                            fill="white" />
                    </g>
                    <defs>
                        <clipPath id="clip0_84_2">
                            <rect width="40" height="40" fill="white" />
                        </clipPath>
                    </defs>
                </svg>

            </div>

        </button>

        <div v-if="isModal" class="fixed z-10 inset-0 overflow-y-auto">
            <div class="flex items-center justify-center min-h-screen bg-black bg-opacity-20">
                <div class="bg-white shadow-lg rounded-lg w-[350px] lg:w-[500px]">
                    <div class="bg-gradient-to-r from-primary_text to-purple-800 p-4 lg:p-6 rounded-lg text-white">
                        <h1 class="text-xl font-semibold text-center">
                            Contact Us
                        </h1>
                        <p class="text-center text-sm font-medium my-2">
                            We're here if you need us, do not hesitate to contact us
                        </p>
                    </div>
                    <form class="p-6 lg:p-8">
                        <div class="">
                            <label for="full-name" class="block text-base font-normal">Full Name</label>
                            <input type="text" id="full-name"
                                class="h-10 mt-2 shadow-md rounded-md w-full outline-none px-4"
                                placeholder="Meziani Belkacem">
                        </div>
                        <div class="mt-6">
                            <label for="email" class="block text-base font-normal">Email</label>
                            <input type="email" id="email" class="h-10 mt-2 shadow-md rounded-md w-full outline-none px-4"
                                placeholder="belkacemeziani@gmail.fr">
                        </div>
                        <div class="mt-6">
                            <label for="message" class="block text-base font-normal">Message</label>

                            <textarea id="message" name="message" rows="4"
                                class="mt-2 shadow-md rounded-md w-full outline-none px-4"
                                placeholder="Your message"></textarea>


                        </div>
                        <div class="mt-6">
                            <button type="submit"
                                class="w-full rounded-md bg-gradient-to-r from-primary_text to-purple-800 text-center text-white h-10 font-medium">Send</button>
                        </div>
                    </form>
                </div>

            </div>
        </div> -->
        <footer-section />
    </div>
</template>

<script>

export default {
    name: 'LayoutDefault',
    data() {
        return {
            isModal: false,
        }
    },
    mounted() {
        window.addEventListener('scroll', this.handleScroll)
    },

    methods: {
        handleScroll() {
            this.scrollY = window.scrollY
            let contactButton = document.getElementById("contact-button")

            if (contactButton !== null) {
                if (window.scrollY > 100) {
                    contactButton.classList.remove("opacity-0");

                } else {
                    contactButton.classList.add('opacity-0')
                }
            }

        },

        openModal() {
            this.isModal = !this.isModal
        }

    },
    beforeDestroy() {
        window.removeEventListener("scroll", this.handleScroll);
    }



}
</script>