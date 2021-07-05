<template>
  <div class="info-form">
    <InfoFormBox @save-info="saveInfo" />
  </div>
</template>

<script>
import InfoFormBox from './InfoFormBox.vue';

export default {
  name: 'InfoForm',
  components: {
    InfoFormBox,
  },
  methods: {
    saveInfo(newInfo) {
      this.$emit('save-info', newInfo);
    },
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
  display: flex;
  flex-direction: column;
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
  &__btn {
    width: 300px;
    margin: 20px auto;
    padding: 15px 30px;
    border-radius: $round-corner;
    outline: none;
    border: 2px $primary solid;
    background-color: $primary;
    font-size: 18px;
    font-weight: bold;
    color: white;
    @media screen and (max-width: 1000px) {
      width: 100%;
    }
  }
}
</style>
