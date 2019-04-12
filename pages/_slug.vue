<template>
  <section>
    <topHeader :data="sections"/>
    <component
      v-if="story.content.component"
      :key="story.content._uid"
      :blok="story.content"
      :is="story.content.component"
    ></component>
  </section>
</template>

<script>
import storyblokLivePreview from '@/mixins/storyblokLivePreview'
import topHeader from '@/components/topHeader'
import Introduction from '@/components/Introduction'
export default {
  computed:{
    sections(){
      return this.story.content.body.map(item => {return {ref: item._uid, name: item.header}})
    }
  },
  data () {
    return { story: { content: {} } }
  },
  mixins: [storyblokLivePreview],
  components: { Introduction,topHeader },
  asyncData(context) {
    // Check if we are in the editor mode
    let version =
      context.query._storyblok || context.isDev ? 'draft' : 'published'

    let slug = context.params.slug ? context.params.slug : "home"
    // Load the JSON from the API
    return context.app.$storyapi
      .get(`cdn/stories/${slug}`, {
        version: version
      })
      .then(res => {
        return res.data
      })
      .catch(res => {
        context.error({
          statusCode: res.response.status,
          message: res.response.data
        })
      })
  }
}
</script>
