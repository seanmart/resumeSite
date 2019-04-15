<template>
  <div class="page">
    <topnav
      :data="sections"
      :height="page.navHeight"
      :trigger="sections[1].id"
    />
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
    style() {
      return { paddingTop: `${this.navHeight * 1.2}px` }
    },
    sections() {
      return orderBy(values(sectionData), 'order')
    }
  }
}
</script>
