import {
  Avatar,
  Box,
  Divider,
  ListItem,
  ListItemAvatar,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import MailIcon from "@mui/icons-material/Mail";

const MuiList = () => {
  return (
    <Box sx={{ width: "400px", bgcolor: "#efefef" }}>
      <ListItem>
        <ListItemText primary="List item 1" />
      </ListItem>
      <Divider />
      <ListItem>
        <ListItemText primary="List item 2" />
      </ListItem>
      <Divider />

      <ListItem>
        <ListItemIcon>
          <MailIcon />
        </ListItemIcon>
        <ListItemText primary="List item 3" />
      </ListItem>
      <Divider />

      <ListItem>
        <ListItemIcon>
          <ListItemAvatar>
            <Avatar>
              <MailIcon />
            </Avatar>
          </ListItemAvatar>
        </ListItemIcon>
        <ListItemText primary="List item 3" />
      </ListItem>
      <Divider />

      <ListItem>
        <ListItemIcon>
          <ListItemAvatar>
            <Avatar>
              <MailIcon />
            </Avatar>
          </ListItemAvatar>
        </ListItemIcon>
        <ListItemText primary="List item 3" secondary="Secondary Text" />
      </ListItem>

      <ListItem disablePadding>
        <ListItemButton>
          <ListItemIcon>
            <ListItemAvatar>
              <Avatar>
                <MailIcon />
              </Avatar>
            </ListItemAvatar>
          </ListItemIcon>
          <ListItemText primary="List item 3" secondary="Secondary Text" />
        </ListItemButton>
      </ListItem>
    </Box>
  );
};

export default MuiList;
