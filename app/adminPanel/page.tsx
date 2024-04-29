'use client';

import * as React from 'react';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import Button from '@mui/material/Button';

const columns: GridColDef[] = [
  { field: 'id', headerName: 'User ID', width: 70 },
  { field: 'companyName', headerName: 'Company Name', width: 130 },
  { field: 'email', headerName: 'Email', width: 200 },
  {
    field: 'accountType',
    headerName: 'Account Type',
    type: 'number',
    width: 100,
  },
  {
    field: 'postCode',
    headerName: 'Post Code',
    width: 100
  },
];

const rows = [
  { id: 1, email: 'deyor96485@haislot.com', companyName: 'Morgan Sindall', accountType: 2, postCode: 'NN6 8HJ' },
  { id: 2, email: 'gaiaferran@pastipass.com', companyName: 'Accomodation Concern', accountType: 1, postCode: 'OX5 2FG' },
  { id: 3, email: 'opera315@alimoh.cloud', companyName: 'Return MK', accountType: 1, postCode: 'SH15 8JJ' },
  { id: 4, email: 'cremnyov@rutory.com', companyName: 'The Wipers Foundation', accountType: 1, postCode: 'G6 7HU' },
  { id: 5, email: 'mcmick@btcmod.com', companyName: 'Spencer Contact', accountType: 1, postCode: 'MK8 EDU' },
  { id: 6, email: 'tkkolian3@loranerobinson.info', companyName: 'Overbury', accountType: 2, postCode: 'LL60 UNZ' },
  { id: 7, email: 'elhechicero@naverly.com', companyName: 'Modus', accountType: 2, postCode: 'BG02 MWM' },
  { id: 8, email: 'dakelenafranc@cjutro.de', companyName: 'Graeae', accountType: 1, postCode: 'KM05 AUL' },
  { id: 9, email: 'pr1geetoe20@lushily.top', companyName: 'Emmaus', accountType: 1, postCode: 'HY59 MXB' },
  { id: 10, email: 'bexrider@chantellegribbon.com', companyName: 'Cast Interiors', accountType: 2, postCode: 'KA54 PKR' },
  { id: 11, email: 'madugala@clonevnmail.com', companyName: 'The Daylight Centre', accountType: 1, postCode: 'PF04 LZE' },
  { id: 12, email: 'lilyjoe@audrianaputri.com', companyName: 'Todd', accountType: 1, postCode: 'TW4 T00' },
];

const page = () => {
  return (
    <div id='parent'>
      <div style={{ height: 580, width: '100%' }}>
        <div className='pb-3 pt-3 text-center underline' id='title'>Accounts Requesting Access</div>
        <DataGrid
          rows={rows}
          columns={columns}
          initialState={{
            pagination: {
              paginationModel: { page: 0, pageSize: 10 },
            },
          }}
          pageSizeOptions={[10, 20]}
          checkboxSelection
        />

      </div>
      <div id='buttonAccept' className='absolute w-16 h-8 left-0 phone:left-28'>
        <Button color="success">Accept</Button>
      </div>
      <div id='buttonAccept' className='absolute w-16 h-8 left-16 phone:left-48'>
        <Button color="error">Reject</Button>
      </div>
    </div>
  )
}

export default page
