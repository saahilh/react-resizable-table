import React from 'react';
import Row from './Row';

const Table = (props) => {
  const {
    children,
    RowTemplate, 
    rowItems,
    headers,
  } = props;
  
  const Headers = headers.map(header => {
    <ColumnHeader header={header} />
  });

  const Rows = rowItems.map((item, i) => {
    return(
      <Row key={i} Template={RowTemplate} rowItem={item} />
    )
  });

  return(
    <table>
      {children}
    </table>
  )
}

export default Table;
