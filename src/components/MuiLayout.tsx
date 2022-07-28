import { Box, Divider, Grid, Paper, Stack } from "@mui/material";
import React from "react";

const MuiLayout = () => {
  return (
    <Paper sx={{ padding: "32px" }} elevation={3}>
      <Grid container my={4} rowSpacing={1} columnSpacing={2}>
        <Grid item xs={12} sm={6}>
          <Box bgcolor={"primary.light"} p={2}>
            Item 1
          </Box>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Box bgcolor={"primary.light"} p={2}>
            Item 2
          </Box>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Box bgcolor={"primary.light"} p={2}>
            Item 3
          </Box>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Box bgcolor={"primary.light"} p={2}>
            Item 4
          </Box>
        </Grid>
      </Grid>

      <Stack
        sx={{ border: "1px solid" }}
        direction="row"
        spacing={2}
        divider={<Divider orientation="vertical" flexItem />}
      >
        <Box
          sx={{
            backgroundColor: "primary.main",
            color: "white",
            height: "100px",
            width: "100px",
            padding: "16px",
            "&:hover": {
              backgroundColor: "primary.light",
            },
          }}
        >
          Lubna Tech Inovation
        </Box>

        <Box
          display="flex"
          height="100px"
          width="100px"
          bgcolor="success.light"
          p={2}
        ></Box>
      </Stack>
    </Paper>
  );
};

export default MuiLayout;
