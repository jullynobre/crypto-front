<template>
  <div class="container-md">
    <div class="grid-container">
      <div>
        <h2>Valores Atuais</h2>
        <p>1 BTC</p>
        <p v-for="(curr, i) in currenciesNames" :key="curr">{{currenciesRate[i]}} {{curr}}</p>

      </div>
      <div>
        <h2>Atualizar</h2>
        <form  @submit.prevent="updateCurrency()">
          <label for="currency">Currency:</label>
          <select v-model="currency" name="currency" id="currency" required>
            <option value="BRL">BRL</option>
            <option value="CAD">CAD</option>
            <option value="EUR">EUR</option>
          </select>

          <label for="value">Novo Valor:</label>
          <input v-model="currencyValue" id="value" type="number" required />

          <input type="submit" value="Atualizar Valor Monetário" />
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data: () => ({
    currenciesNames: ['USD', 'BRL', 'CAD', 'EUR'],
    currency: 'BRL',
    currencyValue: null,
  }),
  created() {
    this.$store.dispatch('getCurrencies');
  },
  computed: {
    currenciesRate() {
      return this.$store.state.currenciesRate ?? [];
    },
  },
  methods: {
    updateCurrency() {
      this.$store.dispatch('updateCurrency', { currency: this.currency, value: this.currencyValue });
    },
  },
};
</script>
