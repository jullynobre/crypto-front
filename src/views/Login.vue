<template>
  <form class="container-sm" @submit.prevent="login()">
    <label for="login-user">User:</label>
    <input v-model="email" id="login-user" type="text"  required />

    <label for="login-password">Password:</label>
    <input
      v-model="password"
      id="login-password"
      type="password"
      maxlength="6"
      minlength="6"
      pattern="^[0-9]*$"
      title="A senha deverá conter 6 caracteres, todos números."
      required
    />

    <input type="submit" value="Entrar"  class="login-button"/>
    <!-- <button class="" >Entrar</button> -->
    <p style="color:red">{{message}}</p>
  </form>
</template>

<script>
export default {
  name: 'Login',
  data: () => ({
    email: null,
    password: null,
    message: null,
  }),
  methods: {
    async login() {
      await this.$store.dispatch('requestLogin', { email: this.email, password: this.password });
      if (this.$store.state.token) {
        this.$router.push('/');
      } else {
        this.message = 'Campos inválidos!';
      }
    },
  },
};
</script>

<style>
</style>
