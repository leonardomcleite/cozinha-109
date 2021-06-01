import React from 'react'
import { Route, Switch } from 'react-router-dom'
import PageTransition from 'react-router-page-transition'
import { Footer } from '../components/Footer/Footer'
import { Toolbar } from '../components/Toolbar/Toolbar'
import { MENU_MOCK } from '../mocks/menus'
import { About } from '../pages/About/About'
import { Contact } from '../pages/Contact/Contact'
import { HomePage } from '../pages/HomePage/HomePage'

const Root = () => {

  return (
    <Route render={ ({ location })=> ( 
      <>
        <Toolbar />
        <PageTransition timeout={ 500 }>
          <Switch location={ location }>
            <Route exact path="/" component={ HomePage } />
            <Route exact path="/about" component={ About } />
            <Route exact path="/contact" component={ Contact } />
            <Route component={ HomePage } />
          </Switch> 
        </PageTransition>
        <Footer menus={MENU_MOCK}/>
      </>
    )}/>
  )
}

export default Root