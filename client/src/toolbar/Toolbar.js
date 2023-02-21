import React from 'react';

import ToolNavbar from './ToolNavbar';
import MyModal from './MyModal';
import CheckModal from './CheckModal';

function Toolbar() {
  return (
    <>      
      <ToolNavbar/>
      <MyModal/>
      <CheckModal/>
    </>
  );
}

export default Toolbar;