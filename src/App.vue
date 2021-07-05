<template>
  <div class="container">
    <AppHeader />
    <InfoForm @save-info="saveInfo" />
  </div>
</template>

<script>
import InfoForm from './components/InfoForm.vue';
import AppHeader from './components/AppHeader.vue';

export default {
  name: 'App',
  components: {
    InfoForm,
    AppHeader,
  },
  data: () => (
    {
      info: null,
    }
  ),
  methods: {
    saveInfo(newInfo) {
      this.info = newInfo;
      console.log(this.info);
    },
  },
};
</script>

<style lang="scss">
  .container {
    max-width: 1000px;
    margin: 0 auto;
  }
</style>
