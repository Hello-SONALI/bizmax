import Footer from '@/components/common/Footer'
import TopNavbar from '@/components/common/TopNavbar'
import '@/styles/globals.css'

export default function App({ Component, pageProps }) {
  return (
  <>
  <TopNavbar/>
  <Component {...pageProps} />
  <Footer/>
  
  </>)
}
