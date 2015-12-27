import LocalLinks from 'local-links'
import React from 'react'

export default React.createClass({
  render (){
    return (
      onclick (event){
        const pathname = LocalLinks.getLocalPathname(event)
        if(pathname){
          event.preventDefault()
          app.router.history.navigate(pathname)
        }
      }
    )
  }
})
