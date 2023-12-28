import React from 'react';
import './Header.css';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';

function Header() {
  return (
    <div className='header'>
        <img
        className='header_logo'
        src='data:image/png;base64,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' alt="amazon logo"
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