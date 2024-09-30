<template>
  <form @submit.prevent="handleSubmit">
    <input v-model="name" type="text" placeholder="Enter your name" />
    <input v-model="email" type="email" placeholder="Enter your email" />
    <input v-model="password" type="password" placeholder="Enter your password" />
    <button type="submit">Submit</button>
  </form>
</template>

<script>
export default {
  data() {
    return {
      name: '',
      email: '',
      password: '',
    };
  },
  methods: {
    handleSubmit() {
      this.$emit('submitted', { name: this.name, email: this.email, password: this.password });
      this.name = '';
      this.email = '';
      this.password = '';
    },
  },
};
</script>
