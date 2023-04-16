<template>
    <div class="px-8 lg:px-0 py-3">

        <h1 class="capitalize font-normal my-1 text-3xl lg:text-4xl font-fontHero">{{ priv.name }}</h1>
        <p class="py-2 text-sm lg:text-[18px] font-light leading-6">
            {{ priv.description }}
        </p>

    </div>
</template>

<script>

export default {
    name: 'PrivacyArticle',
    props: ['priv'],

}
</script>