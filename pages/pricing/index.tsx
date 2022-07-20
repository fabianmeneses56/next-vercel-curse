import Link from 'next/link'
import React from 'react'
import MainLayout from '../../components/layouts/MainLayout'

const index = () => {
  return (
    <MainLayout>
      <h1>pricing page</h1>
      <h1 className={'title'}>
        Welcome to{' '}
        <Link href='/'>
          <a>pricing</a>
        </Link>
      </h1>

      <p className={'description'}>
        Get started by editing <code className={'code'}>pages/pricing.js</code>
      </p>
    </MainLayout>
  )
}

export default index
