<template>
  <div class="container">
    <AppHeader />
    <InfoForm />
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
};
</script>

<style lang="scss">
  .container {
    max-width: 1000px;
    margin: 0 auto;
  }
</style>
