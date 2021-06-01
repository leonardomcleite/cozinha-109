import React from 'react'
import { render } from 'react-dom'
import { applyMiddleware, createStore } from 'redux'
import thunkMiddleware from 'redux-thunk'
import { AppCore } from './AppCore'
import reducers from './reducers'
import './styles/index.scss'

const store = createStore(reducers, applyMiddleware(thunkMiddleware))

render(<AppCore store={store} />, document.getElementById('root'))
