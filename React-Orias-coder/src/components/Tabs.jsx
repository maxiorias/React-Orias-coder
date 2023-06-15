import React, { useState } from 'react';
import { Tabs, Tab, Box } from '@mui/material';
import ProductSection from './Products';

const categories = ['Remeras', 'Camisas', 'Gorras', 'Lentes'];

const TabComponent = () => {
  const [selectedTab, setSelectedTab] = useState(0);

  const handleTabChange = (event, newValue) => {
    setSelectedTab(newValue);
  };

  return (
    <div>
      <Tabs value={selectedTab} onChange={handleTabChange} variant="scrollable" scrollButtons="auto">
        {categories.map((category, index) => (
          <Tab key={index} label={category} />
        ))}
      </Tabs>
      <Box mt={2}>
        <TabPanel value={selectedTab} index={0}>
          <ProductSection category="Remeras" />
        </TabPanel>
        <TabPanel value={selectedTab} index={1}>
          <ProductSection category="Camisas" />
        </TabPanel>
        <TabPanel value={selectedTab} index={2}>
          <ProductSection category="Gorras" />
        </TabPanel>
        <TabPanel value={selectedTab} index={3}>
          <ProductSection category="Lentes" />
        </TabPanel>
      </Box>
    </div>
  );
};

const TabPanel = ({ children, value, index }) => {
  return (
    <div role="tabpanel" hidden={value !== index}>
      {value === index && <>{children}</>}
    </div>
  );
};

export default TabComponent;