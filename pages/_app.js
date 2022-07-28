import '../styles/globals.css'
import '../styles/about.css'
import '../styles/footer.css'
import '../styles/nav.css'
import '../styles/contact.css'
import '../styles/globals.css'
import '../styles/tech.css'
import '../styles/services.css'
import '../styles/news.css'
import '../styles/menu.css'
import { NextSeo } from "next-seo";

import '../styles/home.css'
import '../styles/form.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/accodion.css'
import { RecoilRoot } from "recoil";
function MyApp({ Component, pageProps }) {

  return(
    <RecoilRoot>
      
         <NextSeo
        title="Iphone tricks and tips , iphone 14"
        titleTemplate="Iphone 14"
        defaultTitle="Iphone news and release"
        description="The latest new and iphone update , iphone 14 release is cool
        read our blog to know more about iphones"
        canonical="hookwal.com"
        openGraph={{
          url: "iphonebay.vercel.app",
          title: "iphones are impresive",
          description: "New leaks reveal the iPhone 14 Pro is the one to get excited about",
          images: [
            {
              url: "https://cdn.mos.cms.futurecdn.net/JMZ7CUFKVmQvdCYaxVrkWa-970-80.jpeg.webp",
              width: 800,
              height: 420,
              alt: "iphone",
            },
          ],
        }}
        twitter={{
          handle: "@pehjos",
          site: "hookwal.com",
          cardType: "summary_large_image",
        }}
      />

   <Component {...pageProps} />
   
   </RecoilRoot>
  )
}

export default MyApp
