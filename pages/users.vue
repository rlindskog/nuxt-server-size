<template>
  <div>
    Users!
    <router-link :to="{ params: { id: +$route.params.id - 1 } }">Previous</router-link>
    <router-link :to="{ params: { id: +$route.params.id + 1 } }">Next</router-link>
    <router-view/>
  </div>
</template>

<script>
export default {
  mounted () {
      if (!this.$route.params.id) {
        console.log('Nice!')
        this.$router.replace({ params: { id: 1 } })
      }
  }
}
</script>
