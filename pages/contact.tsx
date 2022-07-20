import React from 'react'
import Link from 'next/link'

import MainLayout from '../components/layouts/MainLayout'

const contact = () => {
  return (
    <MainLayout>
      <h1>contact page</h1>
      <h1 className={'title'}>
        Welcome to{' '}
        <Link href='/'>
          <a>contact</a>
        </Link>
      </h1>

      <p className={'description'}>
        Get started by editing <code className={'code'}>pages/contact.js</code>
      </p>
    </MainLayout>
  )
}

export default contact
