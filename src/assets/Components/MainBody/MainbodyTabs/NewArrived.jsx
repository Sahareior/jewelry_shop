import React, { useState } from 'react';
import Headers from '../../Shared/Headers/Headers';
import AllTabs from '../../Shared/AllTabs';
import TabSection from './TabsSections/TabSection';
import { useContext } from '../../ProvideContext/Provider';

const NewArrived = () => {
  const {value} = useContext()
  const [data,setData] = useState([])
  
console.log(data)
  const tabs = [
    { value: 'one', label: 'Bracelets', component: () => <TabSection  text={'one'}></TabSection> },
    { value: 'two', label: 'Earrings', component: () => <TabSection  text={'two'}></TabSection> },
    { value: 'three', label: 'Ring', component: () => <TabSection  text={'three'}></TabSection> }
  ];

  return (
    <div>
      <Headers text={"Newly Arrived"}></Headers>
      <AllTabs setData={setData} tabs={tabs} />
    </div>
  );
};

export default NewArrived;
