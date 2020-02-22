import React from 'react';

const ColumnHeader = (props) => {
  const {
    header,
  } = props;

  return(
    <th>
      {header}
    </th>
  )
}

export default ColumnHeader;
