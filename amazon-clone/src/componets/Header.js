import React from 'react';
import './Header.css';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';

function Header() {
  return (
    <div className='header'>
        <img
        className='header_logo'
        src='http://pngimg.com/uploads/amazon/amazon_PNG11.png' alt="amazon logo"
        />
      <div className="header_search">
        <input 
        className="header_searchInput" type="text" />
        <SearchIcon className="header_searchIcon" />
      </div>
      <div className="header_navigation">
        <div className="header_option">
          <span className="header_option1">Hello Edemialem</span>
          <span className="header_option2">Sign In</span>
        </div>
        <div className="header_option">
          <span className="header_option1">Returns</span>
          <span className="header_option2">Orders</span>
        </div>
        <div className="header_option">
          <span className="header_option1">Your</span>
          <span className="header_option2">Prime</span>
        </div> 
        <div className="header_optionBasket">
          <ShoppingBasketIcon />
          <span className="header_option2 headear_basketCount">0</span>
        </div>
        </div>
      </div>
  );
}

export default Header