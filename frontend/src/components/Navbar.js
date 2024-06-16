import React from 'react';
import './Navbar.css'; 
import SupportIcon from '@mui/icons-material/Support';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import CircleIcon from '@mui/icons-material/Circle';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <img src="https://s3-alpha-sig.figma.com/img/3690/1270/6116f8e9d28c4435320ec830a2238020?Expires=1719187200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=DCKB6A6pfd4tpgflEy2Rn7U-3JHKD88wqGbZyLttJL3lxAbAJLRYFLylWkEdMonV~vNQMVB66jE8llZbxjdEwNPR-alX~CI4Bc6E1~W9u0RiVuu0ZgFly4VCMFTMCI8nnK4ZIbd3V0Tp~kbqOzUuKm2GJUzrdqE9aWGybggWznmzd4YlUib7Q8Rb6VovTe~jOgz7x128rmIPS4oUZaXAShjrIu4dCbSs~g1Jvayveh9-vwmGOHIcMMS3NfNIkBYdBS-wwT4mJgMZq1Kfs0m7jhH2YZC4CsnsXiIWliujYbKSZDp11MVpCEvXWrkNmDSYkQW26eokNmka~DC-FzjDlw__" alt="Logo" className="logo" />
        <div className="nav-item1">Admin Console</div>
        <div className='nav-item2-wrapper'>
        <div className="nav-item2">Admin View</div>
        </div>
      </div>
      <div className="navbar-right">
        <div className="support-section">
            <SupportIcon className="support-logo" style={{width:21,height:21,}}/>
          <div className="support-text">Support</div>
        </div>
        <div className="account-section">
          <CircleIcon style={{color:"#D9D9D9",width:"35",height:"35"}}/>
          <div className='account-name'>Jane</div>
          <KeyboardArrowDownIcon style={{color:"#FF9926"}}/>
        </div>
      </div>
    </nav>
  );

};

export default Navbar;
