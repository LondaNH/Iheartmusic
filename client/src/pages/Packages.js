import React from 'react';
import PackageMenu from '../components/PackageMenu';
import PackageList from '../components/PackageList';
import Cart from '../components/Cart';


function Packages(){
    return (
          <div className="container">
      <PackageMenu />
      <PackageList />
      <Cart />
    </div>
            )
}

export default Packages