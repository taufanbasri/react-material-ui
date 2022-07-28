import React from "react";

import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
} from "@mui/material";

import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const MuiAccordion = () => {
  return (
    <div>
      <Accordion>
        <AccordionSummary
          id="panel1-header"
          aria-controls="panel1-content"
          expandIcon={<ExpandMoreIcon />}
        >
          <Typography>Accordion 1</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore
            cumque animi voluptate at, placeat ullam omnis, assumenda impedit
            consectetur iure a blanditiis dolores illum deleniti ea! Esse,
            voluptates dolores. Illum.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
};

export default MuiAccordion;
