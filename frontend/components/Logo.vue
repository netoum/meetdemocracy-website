<template>
  <div>
    <nuxt-img :src="logo" alt="logo" :format="'webp'" />
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