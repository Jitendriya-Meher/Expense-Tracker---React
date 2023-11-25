import { configureStore } from '@reduxjs/toolkit'
import transactions from './Slices/transactions'

export const store = configureStore({
  reducer: {
    trans: transactions
  },
})