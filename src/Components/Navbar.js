import React from 'react'
import './NavBar.css';
import bags from '../icons/shoppingbags.jpg'
import {RiShoppingCartLine} from 'react-icons/ri';
import {BsPersonCircle} from 'react-icons/bs';
import {FcSearch} from 'react-icons/fc';

export default function Navbar() {
  return (
    <>
    <nav className='navbar'>
        <label className='bag-name'><img src={bags} alt='bags icon' className='bag-img'/><span className='app-name'>&nbsp;WEB-Shopping</span></label>
        <label className='navbar-searchbar'><input type='search' placeholder='Search...' className='searchbar'/><FcSearch className='FcSearch'/></label>
        <label className='navbar-carts'>Cart<RiShoppingCartLine className='RiShoppingCartLine'/><span className='carts-count'>5</span></label>
        <label className='navbar-user'><BsPersonCircle className='BsPersonCircle'/>&nbsp;user name</label>
    </nav>
    </>
  )
}
