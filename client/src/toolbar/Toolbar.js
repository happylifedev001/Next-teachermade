import React, { useState } from 'react';

import MyNavbar from './MyNavbar';
import MyModal from './MyModal';

function Toolbar() {
  const [showInsertToolset, setShowInsertToolset] = useState(false);
  const closeInsertToolset = () => setShowInsertToolset(false);
  const openInsertToolset = () => setShowInsertToolset(true);
  return (
    <>      
      <MyNavbar openInsertToolset={openInsertToolset}/>
      <MyModal show={showInsertToolset} closeInsertToolset={closeInsertToolset}/>
    </>
  );
}

export default Toolbar;