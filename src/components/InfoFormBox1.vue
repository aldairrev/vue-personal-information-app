<template>
  <div class="form-step">
    <div class="form-step__title">
      {{ $t('form.step_number', {number: 1}) }}
    </div>
    <div class="form-step__list">
      <div class="form-step__group form-step__group--2">
        <div class="form-step__box">
          <div class="form-step__field-name">Name <span>*</span></div>
          <input class="form-step__field" type="text" placeholder="Joe" required>
        </div>
        <div class="form-step__box">
          <div class="form-step__field-name">Lastname <span>*</span></div>
          <input class="form-step__field" type="text" placeholder="Dohn" required>
        </div>
      </div>
      <div class="form-step__group form-step__group--3">
        <div class="form-step__box">
          <div class="form-step__field-name">Birthday <span>*</span></div>
          <input class="form-step__field" type="date" v-model="text" required>
        </div>
        <div class="form-step__box">
          <div class="form-step__field-name">Email <span>*</span></div>
          <input class="form-step__field" type="email" placeholder="example@noreply.com" required>
        </div>
        <div class="form-step__box">
          <div class="form-step__field-name">Phone <span>*</span></div>
          <input class="form-step__field" type="tel" placeholder="000-000-0000" required>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'InfoFormBox1',
};
</script>
