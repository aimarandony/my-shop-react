import React from 'react'

import { NavLink } from 'react-router-dom'

import { MdBook, MdShop } from "react-icons/md";

import './NavigationBottom.css'

const NavigationBottom = () => {
    return (
        <ul className="Nav">
            <li>
                <NavLink to="/supervisar" activeClassName="active"><MdBook /><span>Supervisar</span></NavLink>
            </li>
            <li>
                <NavLink to="/pedido" activeClassName="active"><MdShop /><span>Pedidos</span></NavLink>
            </li>
        </ul>
    )
}

export default NavigationBottom
