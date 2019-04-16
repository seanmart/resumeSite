<template>
  <div class="page site-width fade-on">
    <topnav :data="sections" :page="page" />
    <template v-for="section in sections">
      <component :is="section.id" :data="{ ...section, page }" />
    </template>
  </div>
</template>

<script>
import sectionData from '@/content/sections'
import topnav from '@/components/Nav'
import introduction from '@/components/Introduction'
import skills from '@/components/Skills'
import videos from '@/components/Videos'
import contact from '@/components/Contact'
import { orderBy, values } from 'lodash'
export default {
  components: {
    topnav,
    introduction,
    videos,
    skills,
    contact
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
      return orderBy(values(sectionData), 'order')
    }
  },
  methods: {}
}
</script>
<style lang="css" scoped>
.page {
  background: #fff;
  margin: 0px auto;
}
</style>
