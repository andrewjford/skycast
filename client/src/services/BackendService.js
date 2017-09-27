import fetch from 'isomorphic-fetch';

export function fetchCurrent(address) {
  return fetch("/current?address=" + address)
}

export function fetchHistory(address, time) {
  return fetch(`/history?address=${address}&time=${time}`)
}
