<template>
  <div class="page">
    <topnav :data="data.nav" :navHeight="navHeight" navActive="highlights" />
    <introduction :data="data.sections.introduction" :style="style" />
    <highlights :data="data.sections.highlights" :style="style" />
    <videos :data="data.sections.videos" :style="style" />
    <contact :data="data.sections.contact" :style="style" />
  </div>
</template>

<script>
import sectionData from '@/content/sections'
import topnav from '@/components/Nav'
import introduction from '@/components/Introduction'
import highlights from '@/components/Highlights'
import videos from '@/components/Videos'
import contact from '@/components/Contact'
export default {
  components: {
    topnav,
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
    style() {
      return { paddingTop: `${this.navHeight}px` }
    },
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
