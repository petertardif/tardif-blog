import React from 'react';
import Header from './header';
import Footer from './footer';
import containerStyles from '../styles/layout.module.css';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

library.add(fab, faEnvelope)

export default ({ children }) => {
  return (
    <div className={containerStyles.siteContainer}>
      <Header />
      <div className={containerStyles.contentContainer}>
        {children}
      </div>
      <Footer />
    </div>
  )
}
