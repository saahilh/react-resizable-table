import React from 'react';
import ColumnHeader from './ColumnHeader';

const DefaultHeader = <ColumnHeader />

const Column = (props) => {
  const {
    Header=DefaultHeader, 
    children,
  } = props;
  
  return(<>
    {Header}
    {children}
  </>)
}

export default Column;
