import React, { useEffect, useState } from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import { useContext } from '../ProvideContext/Provider';

const AllTabs = ({ tabs }) => {
  const { value: data } = useContext();
  const [value, setValue] = useState('one'); // Set the initial tab value to 'one' for Bracelets
  const [info, setInfo] = useState([]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const Bracelets = data.filter(items => items.category.toLowerCase() === "bracelet");
  const Earrings = data.filter(items => items.category.toLowerCase() === "earrings");
  const Necklaces = data.filter(items => items.category.toLowerCase() === "ring");

  const selectedTab = tabs.find(tab => tab.value === value);
  const selectedComponent = selectedTab ? selectedTab.component : null;

  // Function to handle passing data to the selected component
  useEffect(() => {
    const selectedData =
      selectedTab.label.toLowerCase() === 'bracelets' ? Bracelets :
      selectedTab.label.toLowerCase() === 'earrings' ? Earrings :
      selectedTab.label.toLowerCase() === 'ring' ? Necklaces : null;

    setInfo(selectedData);
  }, [selectedTab.label, data]); // Include data in the dependency array

  // Render the selected component with the passed data as a prop
  const renderedComponent = selectedComponent ? React.cloneElement(selectedComponent(), { data: info }) : null;

  return (
    <div>
      <Box sx={{ width: '100%', display: 'flex', justifyContent: 'center', marginTop: '50px' }}>
        <Tabs
          value={value}
          onChange={handleChange}
          textColor="black"
          indicatorColor="secondary"
          aria-label="secondary tabs example"
          className='flex text-4xl justify-center items-center'
        >
          {tabs.map(tab => (
            <Tab key={tab.value} value={tab.value} label={tab.label} />
          ))}
        </Tabs>
      </Box>
      {renderedComponent}
    </div>
  );
};

export default AllTabs;
