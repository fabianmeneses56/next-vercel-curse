import { NextPage } from 'next'
import { AppProps } from 'next/app'

import '../styles/globals.css'

// definir le tipo de datos que es una pagina

type NextPageWithLayout = NextPage & {
  getLayout?: (page: JSX.Element) => JSX.Element
}

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}

// punto central de la aplicación
// parte de cada una de las pantallas
function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout || (page => page)
  // return <Component {...pageProps} />
  return getLayout(<Component {...pageProps} />)
}

export default MyApp
