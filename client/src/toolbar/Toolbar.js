import React, { useState } from 'react';

import ToolNavbar from './ToolNavbar';
import MyModal from './MyModal';
import { connect } from 'react-redux';
import { setItem } from '../actions/stageAction';

function Toolbar({ setItem}) {
  const [showInsertToolset, setShowInsertToolset] = useState(false);
  const closeInsertToolset = () => {
    setShowInsertToolset(false);
    setItem(null);
  }
  const openInsertToolset = () => setShowInsertToolset(true);
  return (
    <>      
      <ToolNavbar openInsertToolset={openInsertToolset}/>
      <MyModal show={showInsertToolset} closeInsertToolset={closeInsertToolset}/>
    </>
  );
}

export default connect(null, {setItem})(Toolbar);