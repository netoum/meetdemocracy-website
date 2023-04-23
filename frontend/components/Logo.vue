<template>
  <div>
    <nuxt-img format="webp" :src="logo" alt="logo" />
  </div>
</template>
  
<script>
export default {
  computed: {
    logo() {
      if (process.client) {
        if (window.innerWidth < 768) {
          // Mobile logo
          return '/images/LogoMeetDemocracyMobile.png';
        } else {
          // Desktop logo
          return '/images/LogoMeetDemocracy.png';
        }
      }
    },
  },
};
</script>