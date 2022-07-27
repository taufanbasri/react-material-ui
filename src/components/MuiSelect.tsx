import React, { useState } from "react";

import { Box, MenuItem, TextField } from "@mui/material";

const MuiSelect = () => {
  const [country, setCountry] = useState("");
  const [countries, setCountries] = useState<string[]>([]);

  console.log(country, countries);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCountry(event.target.value as string);
  };

  const handleChangeMultiple = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setCountries(typeof value === "string" ? value.split(",") : value);
  };

  return (
    <>
      <Box width="250px">
        <TextField
          label="Select country"
          select
          value={country}
          onChange={handleChange}
          fullWidth
        >
          <MenuItem value="IND">Indonesia</MenuItem>
          <MenuItem value="SAU">Saudi Arabia</MenuItem>
        </TextField>
      </Box>

      {/* Multiple select */}
      <Box width="250px">
        <TextField
          label="Select country"
          select
          value={countries}
          onChange={handleChangeMultiple}
          fullWidth
          SelectProps={{
            multiple: true,
          }}
          size="small"
          color="secondary"
          helperText="Please select your country"
        >
          <MenuItem value="IND">Indonesia</MenuItem>
          <MenuItem value="SAU">Saudi Arabia</MenuItem>
        </TextField>
      </Box>
    </>
  );
};

export default MuiSelect;
