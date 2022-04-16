import React, {useEffect, useState} from 'react'
import './Nav.css'

export const Nav = () => {

    const [show, handleShow] = useState(false)

    useEffect(() => {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 100) {
                handleShow(true);
            } else handleShow(false)
        });
        return () => {
            window.removeEventListener('scroll', () => {
                
            })
        }
    })

    

  return (
    <div className={`nav ${show && 'nav_black'} `}>

        <img className='logo' src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/Logonetflix.png/1200px-Logonetflix.png?20170904093427" alt='netflix'/>
        <img className='profile' src='https://ih0.redbubble.net/image.618427277.3222/flat,1000x1000,075,f.u2.jpg' alt='profile'/>
    </div>





  )
}