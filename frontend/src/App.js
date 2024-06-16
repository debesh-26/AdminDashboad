import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchInventory } from './redux/inventorySlice';
import Dashboard from './components/Dashboard';
import Navbar from './components/Navbar';
import Filters from './components/Filters';


const App = () => {
  // const dispatch = useDispatch();
  // const inventory = useSelector((state) => state.inventory.items);
  // const status = useSelector((state) => state.inventory.status);

  // useEffect(() => {
  //   dispatch(fetchInventory());
  // }, [dispatch]);

  return (
    <div>
      <Navbar/>
      {/* {status === 'loading' && <div>Loading...</div>} */}
      {<Dashboard  />}
      {/* {status === 'failed' && <div>Failed to load data</div>} */}
    </div>
  );
};

export default App;
