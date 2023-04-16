<template>
  <main>
    <hero-section />
    <service-index />
    <consul-platform-index />
    <pricing-index />
  </main>
</template>


<script>

export default {
  name: 'IndexPage',
  async asyncData({ store, i18n }) {
    try {
      const homepage = await (
        await fetch(`${store.state.apiUrl}/homepage?locale=${i18n.locale}&populate=deep`)
      ).json()
      store.commit('setHomepage', homepage.data.attributes)
      return {
        homepage: homepage.data.attributes
      }
    }
    catch (error) {
      console.log(error);
    }
  },

  head() {
    return {
      title: this.homepage.Seo.metaTitle,
      description: this.homepage.Seo.metaDescription,

      meta: [
        {
          hid: 'og:title',
          name: 'og:title',
          content: this.homepage.Seo.metaTitle,
        },
        {
          hid: 'og:description',
          name: 'og:description',
          content: this.homepage.Seo.metaDescription
        }
      ]


    }
  },
}
</script>
