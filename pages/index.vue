<template>
  <div class="page site-width fade-on">
    <topnav :data="sections" :page="page" />
    <template v-for="section in sections">
      <component :is="section.component" :data="section" />
    </template>
    <modal />
  </div>
</template>

<script>
import sectionData from '@/content/sections'
import topnav from '@/components/Nav'
import introduction from '@/components/Introduction'
import news from '@/components/News'
import skills from '@/components/Skills'
import videos from '@/components/Videos'
import contact from '@/components/Contact'
import modal from '@/components/Modal'
import { orderBy, values } from 'lodash'
export default {
  components: {
    topnav,
    introduction,
    news,
    videos,
    skills,
    contact,
    modal
  },
  data() {
    return {
      page: {
        navHeight: 80
      }
    }
  },
  computed: {
    sections() {
      return sectionData
    }
  },
  methods: {}
}
</script>
<style lang="css" scoped>
.page {
  animation: fadeon 2s;
  background: #fff;
  margin: 0px auto;
}
</style>
