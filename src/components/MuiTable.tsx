import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import React from "react";

const MuiTable = () => {
  return (
    <TableContainer component={Paper} sx={{ maxHeight: "300px" }}>
      <Table aria-label="simple table" stickyHeader>
        <TableHead>
          <TableCell>id</TableCell>
          <TableCell>first name</TableCell>
          <TableCell>lastname</TableCell>
          <TableCell align="center">email</TableCell>
        </TableHead>
        <TableBody>
          {tableData.map((row) => (
            <TableRow
              key={row.id}
              sx={{
                "&:last-child td, &:last-child:th": { border: 0 },
              }}
            >
              <TableCell>{row.id}</TableCell>
              <TableCell>{row.first_name}</TableCell>
              <TableCell>{row.last_name}</TableCell>
              <TableCell align="center">{row.email}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default MuiTable;

const tableData = [
  {
    id: 1,
    first_name: "Ignace",
    last_name: "O'Lunny",
    email: "iolunny0@prnewswire.com",
    gender: "Male",
    ip_address: "73.127.141.165",
  },
  {
    id: 2,
    first_name: "Regen",
    last_name: "Le Brom",
    email: "rlebrom1@altervista.org",
    gender: "Male",
    ip_address: "110.30.211.218",
  },
  {
    id: 3,
    first_name: "Amelie",
    last_name: "Cheyne",
    email: "acheyne2@miitbeian.gov.cn",
    gender: "Female",
    ip_address: "8.38.183.16",
  },
  {
    id: 4,
    first_name: "Bryana",
    last_name: "Smart",
    email: "bsmart3@walmart.com",
    gender: "Female",
    ip_address: "106.79.24.94",
  },
  {
    id: 5,
    first_name: "Ross",
    last_name: "Extance",
    email: "rextance4@blog.com",
    gender: "Male",
    ip_address: "220.107.67.105",
  },
  {
    id: 6,
    first_name: "Che",
    last_name: "Musterd",
    email: "cmusterd5@e-recht24.de",
    gender: "Male",
    ip_address: "60.31.232.239",
  },
  {
    id: 7,
    first_name: "Constanta",
    last_name: "Rodda",
    email: "crodda6@cornell.edu",
    gender: "Female",
    ip_address: "124.217.121.103",
  },
  {
    id: 8,
    first_name: "Zarah",
    last_name: "Kment",
    email: "zkment7@spotify.com",
    gender: "Female",
    ip_address: "225.27.251.12",
  },
  {
    id: 9,
    first_name: "Thurstan",
    last_name: "Chicchetto",
    email: "tchicchetto8@google.pl",
    gender: "Polygender",
    ip_address: "52.248.97.106",
  },
  {
    id: 10,
    first_name: "Alikee",
    last_name: "Grinyer",
    email: "agrinyer9@woothemes.com",
    gender: "Female",
    ip_address: "137.236.144.48",
  },
];
