import React from 'react';

const List = (props) => {
    console.log('list',props)
    return (<ul>
        {props.data.map((res, i) => {
          return  <li key={i}>{res}</li>
        })}
    </ul>);
}

export default List;