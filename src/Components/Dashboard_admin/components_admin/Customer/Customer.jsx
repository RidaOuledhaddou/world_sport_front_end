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
import "./Customer.css";

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

const Customer = () => {
  const navigate = useNavigate(); // Hook to allow navigation
  const [customer, setCustomer] = useState([]);

  useEffect(() => {
    async function show_customer_all() {
      let res = await fetch("http://127.0.0.1:8000/api/Show_Customer_all");
      let data = await res.json();
      setCustomer(data);
      console.log(data);
    }
    show_customer_all();
  }, []);


  const handleBack = () => {
    navigate('/Dashboard'); // Function to navigate back
  };

  return (
    <div className='Customer'>
    <Button onClick={handleBack} style={{ position: 'absolute', top: 10, left: 10, margin: "25px", fontWeight: "bold" }}> --Back--</Button> {/* Back Button */}
    <div className="CustomerGlass">
      <div className="Table">
      <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>CUSTOMER</TableCell>
            <TableCell align="left">EMAIL</TableCell>
            <TableCell align="left">ADDRESS</TableCell>
            <TableCell align="left">PHONE NUMBER</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {customer.map((row) => (
            <TableRow key={row.id}>
              <TableCell component="th" scope="row">
                {row.username}
              </TableCell>
              <TableCell align="left">{row.email}</TableCell>
              <TableCell align="left">{row.address}</TableCell>
              <TableCell align="left">{row.phone_number}</TableCell>
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

export default Customer;
