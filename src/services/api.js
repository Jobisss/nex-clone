// src/services/api.js
import axios from 'axios';

const api = axios.create({
  baseURL: 'https://api-dev.nexevent.com.br/api', // URL base da API
  timeout: 10000, // Tempo máximo de resposta
  headers: {
    'Content-Type': 'application/json',
  },
});

export default api;
