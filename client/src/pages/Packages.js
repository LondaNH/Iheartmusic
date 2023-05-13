import React from 'react';
import PackageMenu from '../components/PackageMenu';
import PackageList from '../components/PackageList';
import Cart from '../components/Cart';
import '../styles/PackageMenu.css'


function Packages(){
    return (
          <div className="pmcontainer">
      <PackageMenu />
      <PackageList />
      <Cart />
    </div>
    );
};

export default Packages