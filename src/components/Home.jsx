import "../styles/Home.css"
// import { Link } from 'react-router-dom'
import Cards from "./Cards"
// import { useState } from "react"
import data from "../data"
import logo from '../assets/logoJuan.svg'



export default function Home(){

    const cards = data.map(item => {
        return (
            <Cards
            key={item.id}
            item={item}
            // image = {item.coverImage}
            // artist={item.artist}
            // song={item.song}
            // link={item.link}

            //se puede usar {..item} (sp operator) y borrar los item de los props, para una mejor sintaxis, en este caso no estamos transformando los datos asi que no es del todo necesario


            />
        )
    })

    return(
        <div  className="home-container back">
            <div  
             className="main-container--grid">
                {cards}
            </div>
            <footer className="footer">
                <img src={logo} className="footer-logo"/>
                <h3 className="footer-cr">© Made by Juan Veron 2022</h3>
            </footer>
            
         
        </div>
        )
        
}
    


        

    