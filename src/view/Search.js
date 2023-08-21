import React from 'react';
import '../view/style/Search.css';

export default function Search() {
  return (
    <div className='searchMain'>
      <div className='searchContainer'>
        <input type='Text' className='search' placeholder='Search for venues' />
        <i className="bi bi-search searchIcon" style={{ fontSize: '25px' }}></i>
      </div>
    </div>
  );
}
