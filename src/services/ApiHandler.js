// eslint-disable-next-line no-unused-vars

import axios from 'axios';

const apiKey = 'e0e574dd9df5df0103086b8ce0f44e12a089b609dff68d32b71ab476d6c522d3';

export default class ApiHandler {
  constructor(apiUrl) {
    this.axios = axios;
    this.apiUrl = apiUrl || '';
    this.config = {
      baseURL: this.apiUrl || 'https://min-api.cryptocompare.com',
    };
  }

  singleSymbolPrice(payload) {
    return new Promise((resolve) => {
      this.axios.get(`/data/price?fsym=${payload.fsym}&tsyms=${payload.tsym}&api_key=${apiKey}`, this.config)
        .then((response) => resolve(response.data));
    });
  }

  multySymbolPrice(payload) {
    return new Promise((resolve) => {
      this.axios.get(`/data/pricemulti?fsyms=${payload.fsym.join(',')}&tsyms=${payload.tsyms.join(',')}&api_key=${apiKey}`, this.config)
        .then((response) => resolve(response.data));
    });
  }

  multipleSymbolsFullData(payload) {
    return new Promise((resolve) => {
      this.axios.get(`/data/pricemultifull?fsyms=${payload.fsym.join(',')}&tsyms=${payload.tsyms.join(',')}&api_key=${apiKey}`, this.config)
        .then((response) => resolve(response.data));
    });
  }

  getCoinList() {
    return new Promise((resolve) => {
      this.axios.get(`/data/blockchain/list?api_key=${apiKey}`, this.config)
        .then((response) => resolve(response.data));
    });
  }

  TopPairs(payload) {
    return new Promise((resolve) => {
      this.axios.get(`/data/top/pairs?fsym=${payload}`, this.config)
        .then((response) => resolve(response.data));
    });
  }

  ListNews() {
    return new Promise((resolve) => {
      this.axios.get('/data/v2/news/?lang=EN', this.config)
        .then((response) => resolve(response.data));
    });
  }
}
