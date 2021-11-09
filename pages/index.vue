<template>
  <div>
    <Header />
    <section class="mt-6">

      <Search @isSearch="getEmit"/>

      <MoveCategory class="mt-5" v-show="!isSearch"/>

      <MoveList class="mt-4" v-show="!isSearch"/>
    </section>
  </div>
</template>

<script>
export default {
    data() {
      return {
        isSearch: false,
      }
    },
    methods: {
      getEmit(data) {
        this.isSearch = data
      }
    },
    head() {
      return {
        title: 'Paradox - Документ',
      }
    }
}
</script>