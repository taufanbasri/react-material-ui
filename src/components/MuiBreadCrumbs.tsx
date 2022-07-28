import { Breadcrumbs, Link, Typography } from "@mui/material";
import { Box } from "@mui/system";

import NavigateNextIcon from "@mui/icons-material/NavigateNext";

const MuiBreadCrumbs = () => {
  return (
    <Box m={2}>
      <Breadcrumbs aria-label="breadcrumb" separator={<NavigateNextIcon fontSize="small" />} maxItems={3}>
        <Link underline="hover" href="#">
          Home
        </Link>
        <Link underline="hover" href="#">
          Catelog
        </Link>
        <Link underline="hover" href="#">
          Accesories
        </Link>
        <Typography color={"text.primary"}>Shoes</Typography>
      </Breadcrumbs>
    </Box>
  );
};

export default MuiBreadCrumbs;
