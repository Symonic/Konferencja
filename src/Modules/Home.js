import '../Styles/Home.css'

import Navbar from './Navbar.js'
import Footer from './Footer.js'

import tlo from '../Graphics/tlo.png'
import galazka from '../Graphics/galazka.png'
import ludzie from '../Graphics/ludzie.png'
import poli from '../Graphics/poli.jpg'


const Home = () => {
    return <div>
        <Navbar />
        <div id='home-content-block'>
            <div id="container">
                <div id="zglos-udzial">
                    <h1 id="home-header">Zglos swoj udzial w międzynarodowej konferencji!</h1>
                </div>
                <div id="zapisz-sie">
                Zapraszamy osoby zainteresowane tematyką finansów
                oraz inwestowania do wzięcia udziału w studenckiej konferencji naukowej.
                    <div id="wez-udzial-butt">
                        <a href='/sign'><b>ZAPISZ SIĘ ZA DARMO!</b></a>
                    </div>
                </div>
                
                
                <div id="obraz-ludzie">
                    <img src={ludzie} id="ludzie" />
                    <img src={tlo} class="tlo"/>
                </div>

                <div id="poli-div">
                    <img src={poli} id="poli" />
                </div>
                <div id="info">
                    <p id="info-par"><b>INFORMACJE O KONFERENCJI</b></p>
                    <h1>
                        Inwestycje i rynek finansowy – 
                        aspekty teoretyczne i praktyczne
                    </h1>
                </div>
                
                
            </div>
            
            <div id="sponsorzy">
                sponsorzy
            </div>
        </div>
        <Footer />
    </div>
}

export default Home