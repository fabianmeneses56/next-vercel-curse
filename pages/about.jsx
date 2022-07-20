import Link from 'next/link'
import DarkLayout from '../components/layouts/DarkLayout'
import MainLayout from '../components/layouts/MainLayout'

export default function AboutPage() {
  return (
    <>
      <h1>about page</h1>
      <h1 className={'title'}>
        Welcome to{' '}
        <Link href='/'>
          <a>Home</a>
        </Link>
      </h1>

      <p className={'description'}>
        Get started by editing <code className={'code'}>pages/about.js</code>
      </p>
    </>
  )
}

// esto permite anidar layouts
// cuando se usa esto hay que cambiar el _app.jsx
AboutPage.getLayout = function getLayout(page) {
  return (
    <MainLayout>
      <DarkLayout>{page}</DarkLayout>
    </MainLayout>
  )
}
