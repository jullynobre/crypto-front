<template>
  <form class="container-sm">
    <label for="login-user">User:</label>
    <input id="login-user" type="text" required />

    <label for="login-password">Password:</label>
    <input
      id="login-password"
      type="password"
      maxlength="6"
      minlength="6"
      pattern="^[0-9]*$"
      title="A senha deverá conter 6 caracteres, todos números."
      required
    />

    <input type="submit" value="Entrar" class="login-button" />
  </form>
</template>

<script>
export default {};
</script>

<style>
</style>
