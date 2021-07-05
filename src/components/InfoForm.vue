<template>
  <div class="info-form">
    <InfoFormBox1 />
  </div>
</template>

<script>
import InfoFormBox1 from './InfoFormBox1.vue';

export default {
  name: 'InfoForm',
  components: {
    InfoFormBox1,
  },
};
</script>

<style lang="scss">
$primary: #41B883;
$secondary: #35495E;
$round-corner: 20px;
$bg: #F9F9F9;
$margin: 20px;
$padding: 20px;

.info-form {
  margin-top: $margin;
  margin-left: $margin;
  margin-right: $margin;
  background-color: $bg;
  border-radius: $round-corner;
  padding: 20px;
}
.form-step {
  &__group {
    display: grid;
    gap: 10px;
    &--2 {
      grid-template-columns: repeat(2, 1fr);
    }
    &--3 {
      grid-template-columns: repeat(3, 1fr);
    }
    @media screen and (max-width: 1000px) {
      gap: 0px;
      grid-template-columns: 1fr;
    }
  }
  &__title {
    color: $primary;
    font-size: 24px;
    font-weight: bold;
    text-align: center;
  }
  &__box {
    width: 100%;
    padding: $padding;
    box-sizing: border-box;
  }
  &__field-name {
    color: $secondary;
    font-weight: bold;
    margin-bottom: 10px;
  }
  &__field {
    box-sizing: border-box;
    padding: 10px 15px;
    width: 100%;
    border-radius: 10px;
    outline: none;
    border: solid 1px gray;
    background: white;
  }
}
</style>
