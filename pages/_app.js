import 'tailwindcss/tailwind.css'
import "/styles/globals.css"
import { Router } from 'next/dist/client/router'
import nProgress from 'nprogress'
import "/styles/nprogress.css"

nProgress.configure({ showSpinner: false });
Router.events.on("routeChangeStart", () => {
   nProgress.start()
})
Router.events.on("routeChangeComplete", () => {
   nProgress.done()
})
Router.events.on("routeChangeError", () => {
   nProgress.done()
})


function MyApp({ Component, pageProps }) {
  return (       
    <div className="font-body text-white flex flex-col h-screen background-gradient">
      <Component {...pageProps} />
    </div>
  )
}

export default MyApp
