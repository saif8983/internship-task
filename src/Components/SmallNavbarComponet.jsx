import React from 'react';
import navbarData from '../Utils/SmallNavbarData';
import Stack from 'react-bootstrap/Stack';

const SmallNavbarComponet = () => {
    return (
        <>
        <Stack   gap={3}>
          <div className='small-navbar'>{navbarData.map((data)=>(
            
            <div>{data}</div>
          )
          )

          }</div>  
          </Stack>
        </>
    );
}

export default SmallNavbarComponet;
