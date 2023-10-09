import React, { useEffect, useState } from 'react';

const Dvider = () => {
    const [data,setData] = useState([])

    useEffect(()=>{
        fetch('Dvider.json')
        .then(res => res.json())
        .then(items => setData(items))
    },[])
    return (
        <div className='mt-24'>
            <div className="flex ml-6 w-full ">
{
    data.map(items => <>   <div className="grid  flex-grow h-40 card  rounded-box place-items-center">
        
      <div className='flex gap-6'>
      <img src={items.icon} className='w-20 rounded-full' alt="" />
        <div className='flex flex-col text-start w-72'>
            <h1 className='text-2xl text-start font-bold'>{items.title}</h1>
            <p>{items.description}</p>
        </div>
      </div>
        </div> 
    <div className="divider lg:divider-horizontal"></div> </>)
}

</div>
        </div>
    );
};

export default Dvider;