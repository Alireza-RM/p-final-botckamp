import { Toaster } from 'react-hot-toast'
import Layout from '../src/components/partials/container/layout/Layout'
import TanstackQueryProvider from '../src/components/partials/provider/TanstackQueryProvider'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <TanstackQueryProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
      <Toaster />
    </TanstackQueryProvider>
  )
}

export default MyApp
