import React from 'react';

const Cell = (props) => {
  const {children} = props;

  return(
    <td>
      {children}
    </td>
  )
}

export default Cell;
