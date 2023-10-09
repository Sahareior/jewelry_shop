import React from 'react';
import { useContext } from '../../../ProvideContext/Provider';
import Card from '../../../Shared/Card/Card';

const TabSection = ({text,data}) => {
   


    return (
        <div>
           <div className='grid grid-cols-4 px-24'>
        {
            data?.map(items => 
                <div key={items._id}>
                    <Card name={items.name} price={items.price} image={items.image}></Card>
                </div>
                )
        }
           </div>
        </div>
    );
};

export default TabSection;