import Footer from '@/components/footer'
import React from 'react'

function layout({children}) {
  return (
    <div>
      {children}
      <Footer />
    </div>
  )
}

export default layout
