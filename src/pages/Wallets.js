import React, { useState } from 'react';
import Typography from '@mui/material/Typography';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import CloseIcon from '@mui/icons-material/Close';
import WalletList from '../components/WalletList';
import CreateWallets from './CreateWallets';

export default function Wallets() {
  const [createWallet, setCreateWallet] = useState(false);

  return (
    <div className="wallets">
      <div className='flex justify-between items-center'>
        <Typography variant="h3" gutterBottom component="div">Wallets</Typography>
        <Fab size="small" aria-label="add" onClick={()=>setCreateWallet(!createWallet)}>
        {createWallet ? <CloseIcon /> : <AddIcon />}
        </Fab>
      </div>
      {
        createWallet
        ? <CreateWallets createWallet={()=>setCreateWallet(false)} />
        : <WalletList taskForm={false} />
      }
    </div>
  )
}
