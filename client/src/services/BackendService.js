import fetch from 'isomorphic-fetch';

const API_URL = "http://localhost:3001";

export function fetchCurrent(address) {
  return fetch(API_URL + "/current?address=" + address)
}

export function fetchHistory(address, time) {
  return fetch(API_URL + `/history?address=${address}&time=${time}`)
}
