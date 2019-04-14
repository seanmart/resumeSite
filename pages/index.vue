<template>
  <div class="page">
    <section-nav :data="data.nav" navActive="highlights" />
    <introduction :data="data.sections.introduction" />
    <highlights :data="data.sections.highlights" />
    <videos :data="data.sections.videos" />
    <contact :data="data.sections.contact" />
  </div>
</template>

<script>
import sectionData from '@/content/sections'
import sectionNav from '@/components/sectionNav'
import introduction from '@/components/Introduction'
import highlights from '@/components/Highlights'
import videos from '@/components/Videos'
import contact from '@/components/Contact'
export default {
  components: {
    sectionNav,
    introduction,
    videos,
    highlights,
    contact
  },
  data() {
    return {
      navHeight: 80
    }
  },
  computed: {
    data() {
      let data = {}
      data.sections = sectionData
      data.nav = [
        sectionData.introduction,
        sectionData.highlights,
        sectionData.videos,
        sectionData.contact
      ]
      return data
    }
  }
}
</script>
