import {
  ImageList,
  ImageListItem,
  ImageListItemBar,
  Stack,
} from "@mui/material";
import React from "react";

const MuiImageList = () => {
  return (
    <Stack spacing={4}>
      <ImageList
        sx={{
          width: 500,
          height: 450,
        }}
        cols={3}
        rowHeight={164}
      >
        {itemData.map((item) => (
          <ImageListItem key={item.img}>
            <img
              src={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2`}
              alt={item.title}
              loading="lazy"
            />
            <ImageListItemBar title={item.title} />
          </ImageListItem>
        ))}
      </ImageList>
    </Stack>
  );
};

export default MuiImageList;

const itemData = [
  {
    img: "https://images.unsplash.com/photo-1657299170935-31e068229885",
    title: "Breakfast",
  },
  {
    img: "https://images.unsplash.com/photo-1510127034890-ba27508e9f1c",
    title: "Camera",
  },
  {
    img: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd",
    title: "Burger",
  },

  {
    img: "https://images.unsplash.com/photo-1658856102291-74df9dd0c544",
    title: "Breakfast",
  },
  {
    img: "https://images.unsplash.com/photo-1657299156594-50426d5125a3",
    title: "Camera",
  },
  {
    img: "https://images.unsplash.com/photo-1658890636419-c156eb3f689c",
    title: "Burger",
  },

  {
    img: "https://images.unsplash.com/photo-1658893699102-1961148bf2f3",
    title: "Breakfast",
  },
  {
    img: "https://images.unsplash.com/photo-1657299170184-add1ff8515c9",
    title: "Camera",
  },
  {
    img: "https://images.unsplash.com/photo-1658893575530-ed33910600bc",
    title: "Burger",
  },
];
