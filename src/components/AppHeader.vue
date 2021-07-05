<template>
  <div class="header-box">
    <img class="header-box__logo" alt="Vue logo" src="@/assets/logo.png">
    <div class="header-box__title">{{ $t('header.title') }}</div>
  </div>
</template>

<script>
export default {
  name: 'AppHeader',
};
</script>

<style lang="scss" scoped>
$primary: #41B883;
$secondary: #35495E;

.header-box {
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: white;
  &__logo {
    width: 100px;
    margin: 20px 0;
  }
  &__title {
    font-size: 24px;
    font-weight: bold;
    color: $secondary;
  }
}
</style>
