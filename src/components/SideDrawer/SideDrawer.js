import React from 'react';
import './sideDrawer.css';

const SideDrawer = props => {
    let drawerClasses = 'sideDrawer';
    if(props.show){
        drawerClasses='sideDrawer open';
    }
    return (
        <nav className={drawerClasses}>
            <ul>
                <li><a href="/">Home</a></li>
                <li><a href="/">Tipo de serviço</a></li>
                <li><a href="/">Como funciona</a></li>
                <li><a href="/">Contato</a></li>
                <li><a href="/">Solicite seu seriço</a></li>
            </ul>
        </nav>
    )
};

export default SideDrawer;