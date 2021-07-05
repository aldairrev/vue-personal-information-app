<template>
  <form @submit="onSubmit" class="form-step">
    <div class="form-step__title">
      {{ $t('form.step_number', {number: 1}) }}
    </div>
    <div class="form-step__list">
      <div class="form-step__group form-step__group--2">
        <div class="form-step__box">
          <div class="form-step__field-name">Name <span>*</span></div>
          <input class="form-step__field"
            type="text"
            name="name"
            placeholder="Joe"
            v-model="name"
            required>
        </div>
        <div class="form-step__box">
          <div class="form-step__field-name">Lastname <span>*</span></div>
          <input class="form-step__field"
            type="text"
            name="lastname"
            placeholder="Dohn"
            v-model="lastname"
            required>
        </div>
      </div>
      <div class="form-step__group form-step__group--3">
        <div class="form-step__box">
          <div class="form-step__field-name">Birthday <span>*</span></div>
          <input class="form-step__field"
            type="date"
            name="birthday"
            v-model="birthday"
            required>
        </div>
        <div class="form-step__box">
          <div class="form-step__field-name">Email <span>*</span></div>
          <input class="form-step__field"
            type="email"
            name="email"
            placeholder="example@noreply.com"
            v-model="email"
            required>
        </div>
        <div class="form-step__box">
          <div class="form-step__field-name">Phone <span>*</span></div>
          <input class="form-step__field"
            type="tel"
            name="phone"
            placeholder="000-000-0000"
            v-model="phone"
            required>
        </div>
      </div>
    </div>
    <button class="form-step__btn" type="submit">Submit</button>
  </form>
</template>

<script>

export default {
  name: 'InfoFormBox',
  data: () => (
    {
      name: null,
      lastname: null,
      birthday: null,
      email: null,
      phone: null,
    }
  ),
  methods: {
    onSubmit(e) {
      e.preventDefault();
      const info = {
        name: this.name,
        lastname: this.lastname,
        birthday: this.birthday,
        email: this.email,
        phone: this.phone,
      };
      this.$emit('save-info', info);
    },
  },
};
</script>
