<template>
  <div>
    <sectionNav
      :data="data"
      :style="{ height: `${navHeight}px` }"
      :show="showNav"
    />
    <introduction
      :data="data.introduction"
      :style="{ paddingTop: `${navHeight * 1.5}px` }"
    />
    <trigger @trigger="showNav = $event" />
    <videos />
    <videos />
  </div>
</template>

<script>
import data from '@/content/data'
import trigger from '@/components/trigger'
import sectionNav from '@/components/sectionNav'
import introduction from '@/components/Introduction'
import videos from '@/components/Videos'
export default {
  components: { sectionNav, introduction, videos, trigger },
  data() {
    return {
      data: data,
      navHeight: 60,
      showNav: false
    }
  }
}
</script>
