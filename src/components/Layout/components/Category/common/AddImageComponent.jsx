import { Box, Input, Typography } from "@mui/material";
import AddPhotoAlternateIcon from "@mui/icons-material/AddPhotoAlternate";


export default function AddImageComponent({ImageChangeHandle}) {
  return (
    <Box
      style={{
        width: "100%",
        height: "140px",
        backgroundColor: "#ccc",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        cursor: "pointer",
      }}
    >
      <Input
        type="file"
        inputProps={{ accept: "image/*" }}
        style={{ display: "none" }}
        onChange={ImageChangeHandle}
        id="image-upload-input"
      />
      <label
        htmlFor="image-upload-input"
        style={{
          width: "100%",
          textAlign: "center",
          cursor: "pointer",
        }}
      >
        <AddPhotoAlternateIcon fontSize="large" sx={{ color: "white" }} />
        <Typography
          variant="subtitle1"
          color="textSecondary"
          sx={{ color: "white" }}
        >
          Загрузить фото
        </Typography>
      </label>
    </Box>
  );
}
