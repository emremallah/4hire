import Footer from '@/components/footer'
import Header from '@/components/header'
import React from 'react'

function layout({children}) {
  return (
    <div>
      <Header />
      {children}
      <Footer />
    </div>
  )
}

export default layout
