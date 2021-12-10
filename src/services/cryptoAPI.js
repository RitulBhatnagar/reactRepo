import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react"

const cryptoApiHeaders = {
  'x-rapidapi-host': 'coinranking1.p.rapidapi.com',
  'x-rapidapi-key': 'e53e2ef485mshfbcb69af9d7a538p11c32ejsn068502999d52'
}
const baseUrl = 'https://coinranking1.p.rapidapi.com'

const createRequest = (url) => ({url, headers : cryptoApiHeaders})
export const cryptoApi = createApi({
    reducer : 'cryptoApi',
    baseQuery : fetchBaseQuery({baseUrl}
    ),
    endpoints : (builder) => ({
      getCryptos  : builder.query({ 
        query : (count)=>  createRequest(`/coins?limit=${count}`)
      }),
      getExchanges: builder.query({
        query: () => createRequest('/exchanges'),
      }),
      getCryptoDetails: builder.query({
        query: (id) => createRequest(`/coin/${id}`),
      }),
      getCryptoHistory: builder.query({
        query: ({id, TimePeriod}) => createRequest(`/coin/${id}/history/${TimePeriod}`),
      })
    })
  })

  export const {
    useGetCryptosQuery, useGetCryptoDetailsQuery, useGetCryptoHistoryQuery, useGetExchangesQuery
  } = cryptoApi