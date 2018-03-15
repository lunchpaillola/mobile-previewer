import React from 'react'
import { createStore, combineReducers } from 'redux'
import { Provider } from 'react-redux'
import { ActionSheetProvider } from '@expo/react-native-action-sheet'
import { reducer as formReducer } from 'redux-form'

import * as reducers from './ducks'
import App from './components/App'
import { connectSocket } from './utils/io'

const store = createStore(combineReducers({
  ...reducers,
  form: formReducer
}))

connectSocket(store)

export default () => (
  <Provider store={store}>
    <ActionSheetProvider>
      <App />
    </ActionSheetProvider>
  </Provider>
)
