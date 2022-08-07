import React from 'react'
import { Link } from "react-router-dom";
import './header.css'
import Logo from '../../assets/amazon_PNG11.png'

import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

import { useStateValue } from '../../StateProvider'
import {auth} from '../../firebase'

const Header = () => {
    const [{ basket, user }, dispatch] = useStateValue();
    const handleAuthenticaton = () => {
        if (user) {
          auth.signOut();
        }
      }
    return (
        <nav className='header'>

            {/* ===ANAZON LOGO== */}
            <Link to="/">
                <img src={Logo} alt="Amazon logo" className='header__logo' />
            </Link>
            {/* ==SEARCH BOX== */}
            <div className='header__search'>
                <input type="text" className="header__searchInput" />
                <SearchIcon className='header__searchIcon' />
            </div>

            {/* ==LINKS== */}
            <div className='header__nav'>
                <Link to={!user && '/login'} className='header__link'>
                    <div onClick={handleAuthenticaton} className='header__option'>
                        <span className="header__optionLineOne">Hello {!user ? 'Guest' : user.email}</span>
                        <span className="header__optionLineTwo">{user ? 'Sign Out' : 'Sign In'}</span>
                    </div>
                </Link>

                <Link to="/login" className='header__link'>
                    <div className='header__option'>
                        <span className='header__optionLineOne'>Return</span>
                        <span className='header__optionLineTwo'>& Order</span>
                    </div>
                </Link>

                <Link to="/login" className='header__link'>
                    <div className='header__option'>
                        <span className='header__optionLineOne'>Your</span>
                        <span className='header__optionLineTwo'>Prime</span>
                    </div>
                </Link>

                <Link to='/checkout' className='header__link'>
                    <div className="header__optionBasket">
                        <ShoppingCartIcon />
                        <span className='header__optionLineTwo header__basketCount'>{basket?.length}</span>
                    </div>
                </Link>
            </div>


        </nav>
    )
}

export default Header