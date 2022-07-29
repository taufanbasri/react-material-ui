import { Avatar, AvatarGroup, Stack } from "@mui/material";
import React from "react";

const MuiAvatar = () => {
  return (
    <Stack spacing={4} p={4}>
      <Stack direction={"row"} spacing={1}>
        <Avatar sx={{ bgcolor: "primary.light" }}>BW</Avatar>
        <Avatar sx={{ bgcolor: "success.light" }}>CK</Avatar>
      </Stack>
      <Stack direction={"row"} spacing={1}>
        <AvatarGroup>
          <Avatar sx={{ bgcolor: "primary.light" }}>BW</Avatar>
          <Avatar sx={{ bgcolor: "success.light" }}>CK</Avatar>
          <Avatar src="https://randomuser.me/api/portraits/women/80.jpg" />
          <Avatar src="https://randomuser.me/api/portraits/men/51.jpg" />
        </AvatarGroup>
      </Stack>
      <Stack direction={"row"} spacing={1}>
        <AvatarGroup max={3}>
          <Avatar sx={{ bgcolor: "primary.light" }}>BW</Avatar>
          <Avatar sx={{ bgcolor: "success.light" }}>CK</Avatar>
          <Avatar src="https://randomuser.me/api/portraits/women/80.jpg" />
          <Avatar src="https://randomuser.me/api/portraits/men/51.jpg" />
        </AvatarGroup>
      </Stack>
      <Stack direction={"row"} spacing={1}>
        <Avatar
          variant="square"
          sx={{ bgcolor: "primary.light", height: 48, width: 48 }}
        >
          BW
        </Avatar>
        <Avatar
          variant="rounded"
          sx={{ bgcolor: "success.light", height: 48, width: 48 }}
        >
          CK
        </Avatar>
      </Stack>
    </Stack>
  );
};

export default MuiAvatar;
