import { Box } from "@mui/material";

export default function ModalComponent({ handleClose }) {
  return (
    <Box
      sx={{
        width: "100vw",
        height: "100vh",
        backgroundColor: "rgba(0,0,0,0.4)",
        position: "fixed",
        top: "0px",
        left: "0px",
        zIndex: 25,
      }}
      onClick={handleClose}
    ></Box>
  );
}
