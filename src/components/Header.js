import React from 'react';
import { Link } from '@mui/material';
import LogoImg from "../assets/image/logo.png";
import '../App.css';

export default function Header(props) {

  return (
    <div className='container mx-auto flex justify-between items-center py-4'>
      <Link href='/' sx={{padding: 0, marginLeft: 5}}>
        <img src={LogoImg} alt='Opensea Logo' className="w-[80px] h-[80px] " />
      </Link>
    </div>
  );
};
