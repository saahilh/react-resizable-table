import React from 'react';
import Cell from './Cell';

const Row = (props) => {
  const {
    rowItem,
    Template, 
  } = props;

  if (!rowItem) {
    return;
  }

  if (Template) {
    return(
      <Template rowItem={rowItem} />
    );
  } else {
    rowItem.map((cellData) => {
      return(
        <Cell>
          {cellData}
        </Cell>
      );
    });
  }
}

export default Row;
