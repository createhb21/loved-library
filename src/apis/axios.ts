import axios, { CreateAxiosDefaults } from 'axios'

export const BASE_URL = 'https://api.itbook.store/'

const options: CreateAxiosDefaults = {
  timeout: 3000,
  baseURL: BASE_URL,
}

export const ax = axios.create({
  ...options,
})
