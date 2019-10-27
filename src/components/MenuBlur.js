import React, {  useState } from 'react';
import './menu.styles.scss';

const Menu = (props) => {
    
    //Hooks

    const [title, setTitle] = useState('menu-close');
    const [menuTexto, setMenuTexto] = useState('no-visible');
    const [menuBlur, setMenuBlur] = useState('container');

    //Handlers
    
    const handleMenu = () => {
        title === 'menu-close' ? setTitle('menu-open') : setTitle('menu-close');
        menuTexto === 'no-visible' ? setMenuTexto('visible') : setMenuTexto('no-visible');
        menuBlur === 'container' ? props.data('container-blur') : setMenuBlur('container');
        menuBlur === 'container-blur' ? props.data('container') : setMenuBlur('container-blur');
    }

    return (
   
        <div className='menu' >
            <div className='menu-container' onClick={handleMenu}>
                <div className={title}/>  
            </div >       
            <div className={`${menuTexto}1`} >
                <div className={`link`}>Home</div>
            </div>
            <div className={`${menuTexto}2`} >
            <div className='link'>About</div>
            </div>
            <div className={`${menuTexto}3`} >
              <div className='link'>Services</div>
            </div>
            <div className={`${menuTexto}4`} >
               <div className='link'>Contact</div>
            </div>       
        </div>
    )
}

export default Menu;