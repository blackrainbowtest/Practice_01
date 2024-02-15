import { Box } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";

export default function SelectedImageComponent({
  selectedImage,
  index,
  DeleteChooesedImage,
}) {
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
      <Box
        sx={{
          position: "relative",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          lignItems: "center",
          justifyContent: "center",
        }}
      >
        <img
          src={URL.createObjectURL(selectedImage)}
          alt="Uploaded"
          style={{ width: "100%", height: "100%" }}
        />
        <IconButton
          aria-label="delete"
          sx={{
            position: "absolute",
            top: "-3px",
            right: "-5px",
            minWidth: "12px",
            minHeight: "12px",
            width: "12px",
            height: "12px",
            boxShadow: "0px 0px 5px rgba(0, 0, 0, 0.5)",
          }}
          onClick={() => DeleteChooesedImage(index)}
        >
          <CloseIcon
            sx={{
              minWidth: "12px",
              minHeight: "12px",
              width: "12px",
              height: "12px",
            }}
          />
        </IconButton>
      </Box>
    </Box>
  );
}
