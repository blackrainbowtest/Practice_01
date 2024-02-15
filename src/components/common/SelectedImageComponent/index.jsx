import { Box, Button } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import { IMAGE_SIZE } from "../../../_settings/setting";

export default function selectedImageComponent({
  selectedImage,
  setSelectedImage,
}) {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        alignItems: "center",
        height: "140px",
      }}
    >
      <Box sx={{height: "100%", display: "flex", flexDirection: "column", lignItems: "center", justifyContent: "center",}}>
        <img
          src={URL.createObjectURL(selectedImage)}
          alt="Uploaded"
          style={{ maxWidth: "100%", maxHeight: "200px", height: IMAGE_SIZE }}
        />
      </Box>
      <Button
        onClick={() => setSelectedImage(null)}
        variant="contained"
        color="error"
        startIcon={<DeleteIcon />}
      >
        Удалить изображение
      </Button>
    </Box>
  );
}
