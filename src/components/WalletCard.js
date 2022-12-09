import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import DeleteIcon from '@mui/icons-material/Delete';
import { FaEthereum } from 'react-icons/fa';
import Typography from '@mui/material/Typography';
import Checkbox from '@mui/material/Checkbox';
import IconButton from '@mui/material/IconButton';
import Link from '@mui/material/Link';
import { pink } from '@mui/material/colors';

export default function WalletCard(props) {
  const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
  const { wallet, taskForm } = props;
  return (
    <div className='walletcard my-2'>
      <Card variant="outlined" sx={{ background: '#151419' }}>
        <CardContent>
          <div className='flex justify-between items-center'>
            {
              wallet === ''
                ? <Typography variant="h6" component="div" sx={{ color: '#ffffff' }}>Wallet Not Found</Typography>
                : <>
                  <div className='w-full'>
                    <Typography variant="h6" gutterBottom component="div" sx={{ color: '#ffffff' }}>{wallet.walletName}</Typography>
                    <div className='flex'>
                      <Link href={`https://rinkeby.etherscan.io/address/${wallet.address}`} target="_blank" mr={1} sx={{color: '#ffffff'}}>{wallet.address}</Link>
                      <FaEthereum /><Typography variant="subtitle1" component="div" ml={1} sx={{ color: '#ffffff' }}>{wallet.balance}</Typography>
                    </div>
                  </div>
                  <div>
                    {
                      taskForm
                        ? <Checkbox {...label} size="large" sx={{
                            color: pink[600],
                            '&.Mui-checked': {
                            color: pink[600],
                            },
                          }} onChange={(e)=>props.setSelectWallet(e.target.checked, wallet)} />
                        : <IconButton color="error" aria-label="Delete" component="label" onClick={()=>props.delWallet(wallet)}>
                            <DeleteIcon color='error' />
                          </IconButton>
                      }
                  </div>
                </>
            }
          </div>
        </CardContent>
      </Card>
    </div>
  )
}