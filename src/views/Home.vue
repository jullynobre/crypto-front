<template>
  <div class="container-md">
    <div class="grid-container">
      <div>
        <h2>Valores Atuais</h2>
        <p>1 BTC</p>
        <p>300 USD</p>
        <p>300 BRL</p>
        <p>300 CAD</p>
        <p>300 EUR</p>
      </div>
      <div>
        <h2>Atualizar</h2>
        <form>
          <label for="value">Currency:</label>
          <input id="value" type="text" required />

          <label for="value">Novo Valor:</label>
          <input id="value" type="text" required />

          <input type="submit" value="Atualizar Valor Monetário" />
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home',

};
</script>
