<template>
    <main class="bg-white relative overflow-hidden">
        <section class="wrapper h-full lg:mt-44 mb-40 ">
            <div class="absolute top-60 lg:-top-20 -left-44 lg:-left-80">
                <img class="object-cover" src="~/assets/images/gradient-radial2.png" alt="gradient2">
            </div>
            <div class="absolute bottom-0 lg:-bottom-96 right-0 lg:-right-60">
                <img class="object-cover" src="~/assets/images/gradient-radial3.png" alt="gradient2">
            </div>
            <div
                class="flex flex-col lg:flex-row justify-center items-center space-x-0 lg:space-x-20 px-8 lg:px-0 mt-40 lg:mt-0">
                <div class="z-20 w-full lg:w-[55%] h-auto lg:h-96 flex flex-col justify-start items-start lg:ml-10">
                    <h1 class="text-4xl font-semibold">
                        {{ contactPage.title }}
                    </h1>
                    <Markdown :markdown="contactPage.richDescription" />
                    <p class="hoverlink text-xl mt-5">
                        {{ contactPage.email }}
                    </p>
                    <p class="my-8 text-sm leading-5 text-gray-500 w-[80%]">
                        {{ contactPage.info }}
                    </p>
                </div>
                <div class="z-20 w-full bg-[#f3f7f4]  lg:w-[45%] my-16 shadow-lg rounded-md p-6 lg:p-20">
                    <h1 class="text-3xl lg:text-4xl font-normal font-fontHero mb-12 lg:mb-8">
                        {{ contactPage.titleForm }}
                    </h1>

                    <form v-if="success === false" class="mt-4 lg:mt-14">
                        <div class="mt-2">
                            <label for="full-name" class="input-label">
                                {{ contactPage.input[0].label }}
                            </label>
                            <input v-model="fullname" type="text" id="full-name" class="input-class"
                                :placeholder=contactPage.input[0].placeholder :class="{ 'input-error': showError }"
                                @blur="verifyFullname" @click="showError = !isFullnameValid && fullname.length === 1">
                            <p v-show="showError && !isFullnameValid" class="error-message"> {{
                                contactPage.messageError }} </p>
                        </div>
                        <div class="mt-6">
                            <label for="email" class="input-label">{{ contactPage.input[1].label }}</label>
                            <input v-model="email" type="email" id="email" class="input-class"
                                :class="{ 'input-error': showErrorEmail }" @blur="verifyEmail"
                                @click="showErrorEmail = !isEmailValid && email.length === 1"
                                :placeholder=contactPage.input[1].placeholder>
                            <p v-show="showErrorEmail && !isEmailValid" class="error-message"> {{
                                contactPage.messageError }} </p>
                        </div>
                        <div class="mt-6">
                            <label for="message" class="input-label">{{ contactPage.input[2].label }}</label>
                            <textarea v-model="message" id="message" name="message" rows="4"
                                class="mt-2 shadow-md rounded-md w-full outline-none px-4 py-2"
                                :class="{ 'input-error': showErrorMessage }" @blur="verifyMessage"
                                @click="showErrorMessage = !isMessageValid && message.length === 1"
                                :placeholder=contactPage.input[2].placeholder></textarea>

                            <p v-show="showErrorMessage && !isMessageValid" class="error-message"> {{
                                contactPage.messageError }} </p>

                        </div>
                        <div class="mt-6">
                            <button @click.prevent="sendEmail" type="button" class="btn font-semibold">
                                {{ contactPage.buttonForm }}
                            </button>
                        </div>
                    </form>
                    <div v-if="success" class="success-message-form">
                        {{ contactPage.lastmessage }}
                    </div>
                </div>
            </div>

        </section>
    </main>
</template>

<script>

export default {
    name: 'ContactPage',

    async asyncData({ store, i18n }) {
        try {
            const contactPage = await (
                await fetch(`${store.state.apiUrl}/contact?locale=${i18n.locale}&populate=*`)
            ).json()

            return {
                contactPage: contactPage.data.attributes
            }
        }
        catch (error) {
            console.log(error);
        }
    },

    head() {
        return {
            title: this.contactPage.Seo[0].metaTitle,
            description: this.contactPage.Seo[0].metaDescription,

            meta: [
                {
                    hid: 'og:title',
                    name: 'og:title',
                    content: this.contactPage.Seo[0].metaTitle,
                },
                {
                    hid: 'og:description',
                    name: 'og:description',
                    content: this.contactPage.Seo[0].metaDescription
                }
            ]


        }
    },

    data() {
        return {
            fullname: '',
            email: '',
            message: '',
            success: false,

            isFullnameValid: false,
            showError: false,

            isEmailValid: false,
            showErrorEmail: false,

            isMessageValid: false,
            showErrorMessage: false
        }
    },

    methods: {
        async sendEmail(e) {
            e.preventDefault()

            if (this.isFullnameValid && this.isEmailValid) {

                const data = {
                    fullname: this.fullname,
                    email: this.email,
                    message: this.message
                }

                try {
                    const msgs = await fetch(`${this.$store.state.apiUrl}/contact-forms`, {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify({ data })
                    })
                    if (msgs) {
                        this.success = true
                    }
                }
                catch (error) {
                    console.log(error);
                }
            }
            else {
                this.showError = !this.isFullnameValid
                this.showErrorEmail = !this.isEmailValid
                this.showErrorMessage = !this.isMessageValid
            }


        },

        verifyFullname() {
            if (this.fullname.trim() !== '') {
                this.isFullnameValid = true
                this.showError = false
            } else {
                this.isFullnameValid = false
                this.showError = true
            }
        },

        verifyEmail() {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (emailRegex.test(this.email)) {
                this.isEmailValid = true
                this.showErrorEmail = false
            } else {
                this.isEmailValid = false
                this.showErrorEmail = true
            }
        },

        verifyMessage() {
            if (this.message.trim() !== '') {
                this.isMessagelValid = true
                this.showErrorMessage = false
            } else {
                this.isMessageValid = false
                this.showErrorMessage = true
            }
        }
    }


}
</script>