<template>
    <div v-html="html" :class="classMarkdown"></div>
</template>
  
<script>
import MarkdownIt from 'markdown-it'

export default {
    props: {
        markdown: {
            type: String,
            required: true
        },

        classMarkdown: {
            type: String,
            default: 'markdown text-base mt-4 text-primary'
        }
    },
    computed: {
        html() {
            const md = new MarkdownIt({
                html: true,
                linkify: true,
                typographer: true,
                breaks: true,
                quotes: '“”‘’',
                use: [
                    'markdown-it-attrs',
                    'markdown-it-highlightjs'
                ]
            })
            return md.render(this.markdown)
        }
    }
}
</script>