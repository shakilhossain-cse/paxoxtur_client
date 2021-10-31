import React from 'react'
import { useParams } from 'react-router';
import Addride from './addride/Addride';
import Allorders from './allorders/Allorders';
import Viewride from './viewride/Viewride';

const Manage = () => {
  const { Topic } = useParams();
  console.log(Topic);
    return (
        <div className="">
        {Topic == 'Viewride' && <Viewride/>}
        {Topic == 'Addride' && <Addride/>}
        {Topic == 'Allorders' && <Allorders/>}
      </div>
    )
}

export default Manage
