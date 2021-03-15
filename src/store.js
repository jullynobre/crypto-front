import Vue from 'vue';
import Vuex from 'vuex';
import router from './router';

Vue.use(Vuex);

const apiHost = 'http://localhost:8000/api';

export default new Vuex.Store({
  state: {
    token: null,
    currenciesRate: null,
  },
  mutations: {
    setTokenAndPersist(state, value) {
      state.token = value;
      localStorage.setItem('token', value);
    },
    getTokenFromLocalStorage(state) {
      state.token = localStorage.getItem('token');
    },
    setCurrenciesRate(state, bpi) {
      state.currenciesRate = [
        bpi.USD.rate_float,
        bpi.BRL.rate_float,
        bpi.CAD.rate_float,
        bpi.EUR.rate_float,
      ];
    },
  },
  actions: {
    async requestLogin({ commit }, { email, password }) {
      const response = await fetch(`${apiHost}/login`, {
        method: 'POST',
        mode: 'cors',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email,
          password,
        }),
      });
      if (response.ok) {
        const body = await response.json();
        commit('setTokenAndPersist', body.token);
      } else {
        console.log('Senha ou email incorreto!');
      }
    },
    async getCurrencies({ commit, state }) {
      const response = await fetch(`${apiHost}/crypto/btc`, {
        method: 'GET',
        headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${state.token}` },
      });
      if (response.ok) {
        const body = await response.json();
        commit('setCurrenciesRate', body.BPI);
      } else if (response.status === 401) {
        router.push('/login');
      }
    },
    async updateCurrency({ state, dispatch }, { currency, value }) {
      const response = await fetch(`${apiHost}/crypto/btc`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${state.token}`,
        },
        body: JSON.stringify({ currency, value: parseFloat(value) }),
      });
      if (response.ok) {
        dispatch('getCurrencies');
      }
    },
  },
});
