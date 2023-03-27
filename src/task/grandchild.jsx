import React from 'react';
import {Link} from 'react-router-dom'

const GrandChild = (props) => {
  return(
    <div>
    grandchild
      {console.log(props)}
    </div>
  )
}

export default GrandChild;