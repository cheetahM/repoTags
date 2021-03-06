import Router from 'ampersand-router'
import React from 'react'
import LoginPage from './pages/login'
import ReposPage from './pages/repos'
import Layout from './layout'

export default Router.extend({
  renderPage (page, opts ={layout:true}) {
    if(opts.layout){
      page = (
        <Layout>
          {page}
        </Layout>
      )
    }
    React.render(page, document.body)
  },
  routes: {
    '': 'home',
    'repos': 'repos'
  },

  home () {
    this.renderPage(<LoginPage />, {layout:false})
  },

  repos () {
    this.renderPage(<ReposPage />)
  }
})
