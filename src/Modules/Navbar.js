import '../Styles/Navbar.css'
import fire from '../Graphics/fire.png' 

window.addEventListener("scroll", () => {
    document.querySelector('#main-navbar-block').classList.toggle("sticky", window.scrollY > 0);
})

const Navbar = () => {
    return <div id="main-navbar-block">
        
            <img src={fire} id='logo-navbar'/>
            <input type="checkbox" id="check" />
            <label htmlFor='check' className='checkbtn'>
                <svg xmlns="http://www.w3.org/2000/svg" height="16" width="14" viewBox="0 0 448 512"><path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z"/></svg>
            </label>

            
            
        
            <ul>
                <li><a href='/'>Strona główna</a></li>
                <li><a href='/About'>O nas</a></li>
                <li><a href='/Guests'>Goście specjalni</a></li>
                <li><a href='/Program'>Program konferencji</a></li>
                <li><a href='/Contact'>Kontakt</a></li>
                <li><a href='/Sign'>Zapisz się!</a></li>
            </ul>
    
    </div>
}

export default Navbar