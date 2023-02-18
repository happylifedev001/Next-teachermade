import React, { useState } from 'react';

import ToolNavbar from './ToolNavbar';
import MyModal from './MyModal';

function Toolbar() {
  const [showInsertToolset, setShowInsertToolset] = useState(false);
  const closeInsertToolset = () => setShowInsertToolset(false);
  const openInsertToolset = () => setShowInsertToolset(true);
  return (
    <>      
      <ToolNavbar openInsertToolset={openInsertToolset}/>
      <MyModal show={showInsertToolset} closeInsertToolset={closeInsertToolset}/>
    </>
  );
}

export default Toolbar;