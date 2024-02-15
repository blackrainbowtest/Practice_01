import { Box } from "@mui/material";
import AddPhotoAlternateOutlinedIcon from "@mui/icons-material/AddPhotoAlternateOutlined";

export default function EmptyImageComponent() {
  return (
    <Box
      sx={{
        borderRadius: "5px",
        backgroundColor: "#ccc",
        width: "34px",
        height: "34px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <AddPhotoAlternateOutlinedIcon
        fontSize="medium"
        sx={{ color: "white" }}
      />
    </Box>
  );
}
