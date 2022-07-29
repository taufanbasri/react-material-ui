import { Badge, Stack } from "@mui/material";
import MailIcon from "@mui/icons-material/Mail";

const MuiBadge = () => {
  return (
    <Stack spacing={2} direction="row" p={5}>
      <Badge badgeContent={5} color="primary">
        <MailIcon />
      </Badge>
      <Badge badgeContent={0} color="secondary">
        <MailIcon />
      </Badge>
      <Badge badgeContent={0} color="secondary" showZero>
        <MailIcon />
      </Badge>
      <Badge badgeContent={100} color="primary">
        <MailIcon />
      </Badge>
      <Badge badgeContent={100} max={999} color="primary">
        <MailIcon />
      </Badge>
      <Badge variant="dot" color="primary">
        <MailIcon />
      </Badge>
    </Stack>
  );
};

export default MuiBadge;
