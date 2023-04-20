<template>
  <div>
    <img :src="logo" alt="logo" />
    <nuxt-img :src="logo" alt="logo" />
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