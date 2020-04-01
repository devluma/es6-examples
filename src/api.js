import axios from 'axios';

const _BASE_URL_ = 'https://api.github.com';

axios.defaults.baseURL = _BASE_URL_;

const api = axios.create({baseUrl: _BASE_URL_});

export default api;