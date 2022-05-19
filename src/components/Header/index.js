import React from 'react';
import './Header.css';

export default ({black}) => {
  return(

    <header className={black ? 'black' : ''}>
      <div className="header--logo">
        <a href="#">
          <img src="https://th.bing.com/th/id/R.fbf1182c09e23e861f4a74991e58095d?rik=RHDHsSEH136mKQ&pid=ImgRaw&r=0" alt="Logo Netflix"/>
        </a>
      </div>
      <div className="header--user">
        <a href="#">
          <img src="https://th.bing.com/th/id/OIP.ILMxWcabmvZwHq8H8rtjigHaHa?pid=ImgDet&rs=1" alt="Usuário"/>
        </a>
      </div>
    </header>

  );
}