import React, { Fragment } from 'react';
import { useContext } from 'react';
import { AuthProvider } from './Components/contexts/authContext';
import { CountProvider, useCount } from './Components/contexts/countContext';
import { GalleryProvider } from './Components/contexts/galleryContext';
import CartList from './Components/ReactJs/gallery/CartList';
import PhotoList from './Components/ReactJs/gallery/PhotoList';
import HeaderMain from './Components/ReactJs/Header/HeaderMain';

const App = () => {
  return (
    <Fragment>
      <AuthProvider>
        <GalleryProvider>
          <HeaderMain></HeaderMain>
          <PhotoList></PhotoList>
          <CartList></CartList>
        </GalleryProvider>
      </AuthProvider>
      {/* <div>
      <CountProvider>
        <Counter></Counter>
        <CountDisplay></CountDisplay>
      </CountProvider>
    </div> */}
    </Fragment>
  );
};

export default App;
