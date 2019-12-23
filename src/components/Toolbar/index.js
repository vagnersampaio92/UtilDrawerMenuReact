import React from 'react';
import './styles.css'
import DrawerToggleButton from '../SideDrawer/DrawerToggleButton';


const Toolbar = props => (
    <header className="toolbar">
        <nav className="toolbar_navegation">
            <div className='toolbar_toggle-button'>
                <DrawerToggleButton click={props.drawerClickHandler}/>
            </div>
            <div className="toolbar_logo "><a href="/">the logo</a></div>
            <div className="spacer"></div>
            <div className="toolbar_navegation-itens "> 
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="/">Tipo de serviço</a></li>
                    <li><a href="/">Como funciona</a></li>
                    <li><a href="/">Contato</a></li>
                    <li><a href="/">Solicite seu seriço</a></li>
                </ul>
            </div>
        </nav>
    
    </header>
);
export default Toolbar;