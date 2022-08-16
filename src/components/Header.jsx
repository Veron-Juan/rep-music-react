import '../styles/Header.css'
import { useState } from 'react'
import logo from "../assets/logoreact.svg"




export default function Header(){
    const [toggle, setToggle] = useState(false);

    const handleTogle = () => {
        setToggle(!toggle);
        
    }
    
    return(
        <header className='header'>
          

          
          <div className='cont-title'>
            <h3>Music reproductor with React</h3>
            <img className='logo' src={logo}/>
          </div>
        
          <span onClick={handleTogle} className="material-symbols-outlined">
menu
</span>
        {toggle && <nav className='menu-mobile'>
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
        </nav>}
        
        
      </header>
    )
}