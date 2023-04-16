<template>
    <div class="px-8 lg:px-0 py-3">

        <h1 class="title-index capitalize">{{ term.name }}</h1>
        <p class="description">
            {{ term.description }}
        </p>

    </div>
</template>

<script>

export default {
    name: 'TermsArticle',
    props: ['term'],


}


</script>