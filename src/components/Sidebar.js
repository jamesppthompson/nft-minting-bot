import React from 'react';
// import Button from '@mui/material/Button';
// import MenuIcon from '@mui/icons-material/Menu';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import MyLocationTwoToneIcon from '@mui/icons-material/MyLocationTwoTone';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import LanguageIcon from '@mui/icons-material/Language';
import SettingsIcon from '@mui/icons-material/Settings';
import {Link} from 'react-router-dom';
import LogoImg from "../assets/image/logo.png";

import '../App.css';

export default function Sidebar(props) {

  return (
    <div className='sidebar rounded-lg'>
      <div className="flex flex-col w-64 h-screen px-4 py-8 overflow-y-auto">
        <img src={LogoImg} alt='Opensea Logo' className="self-center w-[80%]" />
        <div className="flex flex-col justify-between mt-6">
          <aside>
            <ul className="relative">
              <li className="relative">
                <Link to='/minttasks' className="flex items-center text-white no-underline py-4 px-6 h-12 overflow-hidden text-gray-700 text-ellipsis whitespace-nowrap rounded-lg hover:text-gray-900 hover:bg-[#fe2e77] transition duration-300 ease-in-out" data-mdb-ripple="true" data-mdb-ripple-color="dark">
                  <FormatListBulletedIcon sx={{ marginRight: 2 }} />
                  <span>Mint</span>
                </Link>
              </li>
              <li className="relative">
                <Link to='/snipe' className="flex items-center text-white py-4 px-6 h-12 overflow-hidden text-gray-700 text-ellipsis whitespace-nowrap rounded-lg hover:text-gray-900 hover:bg-[#fe2e77] transition duration-300 ease-in-out" data-mdb-ripple="true" data-mdb-ripple-color="dark">
                  <MyLocationTwoToneIcon sx={{ marginRight: 2 }} />
                  <span>Snipe</span>
                </Link>
              </li>
              <li className="relative">
                <Link to='/offer' className="flex items-center text-white py-4 px-6 h-12 overflow-hidden text-gray-700 text-ellipsis whitespace-nowrap rounded-lg hover:text-gray-900 hover:bg-[#fe2e77] transition duration-300 ease-in-out" data-mdb-ripple="true" data-mdb-ripple-color="dark">
                  <AttachMoneyIcon sx={{ marginRight: 2 }} />
                  <span>Offer</span>
                </Link>
              </li>
              <li className="relative">
                <Link to='/wallets' className="flex items-center text-white py-4 px-6 h-12 overflow-hidden text-gray-700 text-ellipsis whitespace-nowrap rounded-lg hover:text-gray-900 hover:bg-[#fe2e77] transition duration-300 ease-in-out" data-mdb-ripple="true" data-mdb-ripple-color="dark">
                  <AccountBalanceWalletIcon sx={{ marginRight: 2 }} />
                  <span>Wallets</span>
                </Link>
              </li>
              <li className="relative">
                <Link to='/proxies' className="flex items-center text-white py-4 px-6 h-12 overflow-hidden text-gray-700 text-ellipsis whitespace-nowrap rounded-lg hover:text-gray-900 hover:bg-[#fe2e77] transition duration-300 ease-in-out" data-mdb-ripple="true" data-mdb-ripple-color="dark">
                  <LanguageIcon sx={{ marginRight: 2 }} />
                  <span>Proxies</span>
                </Link>
              </li>
              <li className="relative">
                <Link to='/settings' className="flex items-center text-white py-4 px-6 h-12 overflow-hidden text-gray-700 text-ellipsis whitespace-nowrap rounded-lg hover:text-gray-900 hover:bg-[#fe2e77] transition duration-300 ease-in-out" data-mdb-ripple="true" data-mdb-ripple-color="dark">
                  <SettingsIcon sx={{ marginRight: 2 }} />
                  <span>Settings</span>
                </Link>
              </li>
            </ul>
          </aside>
        </div>
      </div>
    </div>
  );
};
