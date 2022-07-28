import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Homepage from '../components/Home';
import Nav from '../components/Nav';
import Resume from '../components/Resume';
import Works from '../components/Works';
import About from '../components/About';
import Services from '../components/Services';
import ClientSucess from '../components/ClientSucess'
import Contact from '../components/Contact'
import Footer from '../components/Footer'


export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Iphonebay buy the latest iphone</title>
        <meta name="description" content="read about iphones before buying you preffered " />
        <link rel="icon" href="https://www.apple.com/newsroom/images/product/iphone/standard/Apple_announce-iphone12pro_10132020.jpg.landing-big_2x.jpg" />

      </Head>
      <div className="App">
      <Nav/>
      <Homepage/>
      <About/>
      <Services/>
      <div className="client">
        <h5>CLIENT SUCESS IN OUR COMPANY</h5>
      <ClientSucess/>
      </div>
    <Contact/>
      <Resume/>
      <Works/>
      <Footer/>
    </div>

    </div>
  )
}
