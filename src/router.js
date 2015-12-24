import Router from 'ampersand-router'
import React from 'react'
import LoginPage from './pages/login'
import ReposPage from './pages/repos'

export default Router.extend({
  routes: {
    '': 'home',
    'repos': 'repos'
  },

  home () {
    React.render(<LoginPage />, document.body)
  },

  repos () {
    React.render(<ReposPage />, document.body)
  }
})
