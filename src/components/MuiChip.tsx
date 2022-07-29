import { useState } from "react";
import { Avatar, Chip, Stack } from "@mui/material";
import FaceIcon from "@mui/icons-material/Face";

const MuiChip = () => {
  const [chips, setChips] = useState(["Chip 1", "Chip 2", "Chip 3"]);

  const handleDelete = (chipToDelete: string) => {
    setChips((chips) => chips.filter((chip) => chip !== chipToDelete));
  };

  return (
    <Stack direction={"row"} spacing={1} p={2}>
      <Chip label="Chip" color="primary" size="small" icon={<FaceIcon />} />
      <Chip label="Chip" color="primary" size="medium" />
      <Chip
        label="Chip Outline"
        color="primary"
        variant="outlined"
        avatar={<Avatar>V</Avatar>}
      />
      <Chip
        label="Delete"
        color="error"
        onClick={() => alert("Clicked")}
        onDelete={() => alert("Delete handler called")}
      />

      {chips.map((chip) => (
        <Chip key={chip} label={chip} onDelete={() => handleDelete(chip)} />
      ))}
    </Stack>
  );
};

export default MuiChip;
