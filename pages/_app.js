import 'tailwindcss/tailwind.css'
import "/styles/globals.css"

function MyApp({ Component, pageProps }) {
  return (       
    <div className="font-body text-white flex flex-col background-gradient h-screen">
      <Component {...pageProps} />
    </div>
  )
}

export default MyApp
