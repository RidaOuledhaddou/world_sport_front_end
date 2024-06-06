import * as React from 'react';
import { useEffect, useState } from "react";
import { Link, useNavigate } from 'react-router-dom';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button'; 
import "./Show_orders.css";

function createData(name, calories, fat, status, protein) {
  return { name, calories, fat, status, protein };
}

const rows = [
  createData('Frozen yoghurt', 159, 6.0, 'Approved', 4.0),
  createData('Ice cream sandwich', 237, 9.0, 'Pending', 4.3),
  createData('Eclair', 262, 16.0, "Approved", 6.0),
  createData('Cupcake', 305, 3.7, "Delivered", 4.3),
  createData('Gingerbread', 356, 16.0, "Pending", 3.9),
];

const makeStyles = (status) => {
  if (status === "Approved") {
    return {
      background: 'rgb(145 254 159 / 47%)',
      color: 'green'
    }
  } else if (status === "Pending") {
    return {
      background: '#ffadadBf',
      color: 'red'
    }
  } else {
    return {
      background: '#59bfff',
      color: 'white'
    }
  }
}

const Show_orders = () => {
  const navigate = useNavigate(); // Hook to allow navigation
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    async function show_orders() {
      let res = await fetch("http://127.0.0.1:8000/api/Show_orders_all");
      let data = await res.json();
      setOrders(data);
      console.log(data);
    }
    show_orders();
  }, []);


  const handleBack = () => {
    navigate('/Dashboard'); // Function to navigate back
  };

  return (
    <div className='ShowOrder'>
    <Button onClick={handleBack} style={{ position: 'absolute', top: 10, left: 10, margin: "25px", fontWeight: "bold" }}> --Back--</Button> {/* Back Button */}
    <div className="ShowOrderGlass">
      <div className="Table">
      <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Customer</TableCell>
            <TableCell align="left">Phone Number</TableCell>
            <TableCell align="left">Email</TableCell>
            <TableCell align="left">Products</TableCell>
            <TableCell align="left">Total Amount</TableCell>
            <TableCell align="left">Status</TableCell>
            <TableCell align="left">Details</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {orders.map((row) => (
            <TableRow key={row.id}>
              <TableCell component="th" scope="row">
                {row.client.username}
              </TableCell>
              <TableCell align="left">{row.client.phone_number}</TableCell>
              <TableCell align="left">{row.client.email}</TableCell>
              <TableCell align="left">
                {row.items.map(item => item.product.name).join(", ")} {/* Join product names by comma */}
              </TableCell>
              <TableCell align="left">{row.total_amount}</TableCell>
              <TableCell align="left">
                <span className='status' style={makeStyles(row.status)}>{row.status}</span>
              </TableCell>
              <TableCell align="left">
                <Link to={`/details/${row.id}`} className='Details'>Detail</Link>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
      </div>
    </div>
  </div>
  );
}

export default Show_orders;
