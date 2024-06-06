import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import './Table.css';

function createData(name,calories,fat,status,protein,
) {
  return { name, calories, fat, status, protein };
}


const rows = [
  createData('Frozen yoghurt', 159, 6.0, 'Approved', 4.0),
  createData('Ice cream sandwich', 237, 9.0, 'Pending', 4.3),
  createData('Eclair', 262, 16.0, "Approved", 6.0),
  createData('Cupcake', 305, 3.7, "Delivered", 4.3),
  createData('Gingerbread', 356, 16.0, "Pending", 3.9),
];

const makeStyles=(status)=>{
  if(status === "Approved"){
    return {
      background : 'rgb(145 254 159 / 47%)',
      color: 'green'
    }
  }else if(status === "Pending"){
    return {
      background : '#ffadadBf',
      color: 'red'
    }
  }else{
    return {
      background : '#59bfff',
      color: 'white'
    }
  }
}

import { useEffect, useState } from "react";
import { Link } from 'react-router-dom';

export default function BasicTable() {

  const [orders, setOrders] = useState([]);

  useEffect(() => {
    show_orders();
  }, []);

  async function show_orders() {
    let res = await fetch("http://127.0.0.1:8000/api/Show_orders");
    let data = await res.json();
    setOrders(data);
    console.log(data)
  }
  
  return (
    <div className="Table">
    <TableContainer component={Paper}
    style={{boxShadow: '0px 13px 20px 0px #80808029'}}>

      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>CUSTOMER</TableCell>
            <TableCell align="left">PHONE NUMBER</TableCell>
            <TableCell align="left">TOTAL AMOUNT&nbsp;</TableCell>
            <TableCell align="left">STATUS&nbsp;</TableCell>
            <TableCell align="left"></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {orders.map((row) => (
            <TableRow
              key={row.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.client.username}
              </TableCell>
              <TableCell align="left">{row.client.phone_number}</TableCell>
              <TableCell align="left">{row.total_amount}</TableCell>
              <TableCell align="left">
                <span className='status' style={makeStyles(row.status)}>{row.status}</span>
              </TableCell>
              <Link><TableCell align="left" className='Details'>Detail</TableCell></Link>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </div>
  );
}

