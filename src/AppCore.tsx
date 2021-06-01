import React from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import Root from './Root/Root'

interface AppCoreUI {
  store: any;
}

export const AppCore = (props: AppCoreUI) => {

  return (
    <BrowserRouter>
      <Provider store={props.store}>
        <Root />
      </Provider>
    </BrowserRouter>
  )
}
