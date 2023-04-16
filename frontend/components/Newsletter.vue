<template>
    <div v-if="newsletter" class="mt-14">
        <h6 class="text-lg lg:text-xl text-primary_bg mb-2 font-normal">{{ newsletter.title }}</h6>

        <form @submit="sendSubscribers" class="relative">
            <div v-if="success === false"
                class="flex flex-col lg:flex-row items-center mt-3 space-y-8 lg:space-y-0 lg:space-x-8 space-x-0">
                <input v-model="email" type="email" id="email" class="h-12 shadow-md rounded-md w-full outline-none px-4"
                    placeholder="Email*">

                <button type="submit" class="btn">
                    {{ newsletter.button }}
                </button>
            </div>
            <div v-if="success" class="mb-2 w-full bg-white text-primary_bg px-4 py-3 rounded-lg">
                {{ newsletter.thanking }}
            </div>
        </form>
    </div>
</template>

<script>

export default {
    name: 'NewsLetter',


    data() {
        return {
            email: '',
            success: false,
            newsletter: null
        }
    },


    async fetch() {
        const response = await this.$axios.get(`${this.$store.state.apiUrl}/newsletter?locale=${this.$i18n.locale}&populate=*`)
        this.newsletter = response.data.data.attributes
    },
    methods: {
        async sendSubscribers(e) {
            e.preventDefault()
            const data = {
                email: this.email
            }

            try {
                const msgs = await fetch(`${this.$store.state.apiUrl}/subscribers`, {
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
    }

}
</script>
