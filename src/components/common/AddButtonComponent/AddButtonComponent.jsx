import { Box, Button, Card } from "@mui/material";

export default function AddButtonComponent({ handleOpen, open, DOM_AddTag, disabled=false }) {
  return (
    <Box sx={{ height: "100%" }}>
      <Button
        onClick={handleOpen}
        disabled={disabled}
        variant="text"
        sx={{
          color: "gray",
          minWidth: "50px",
          height: "100%",
          boxShadow: 2,
          fontSize: "30px",
          backgroundColor: "white",
          padding: 0,
        }}
      >
        +
      </Button>
      {open ? (
          <Card
            sx={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              width: 400,
              bgcolor: "background.paper",
              boxShadow: 2,
              p: 2,
              zIndex: 29,
            }}
            onClick={(e) => e.stopPropagation()}
          >
            {DOM_AddTag}
          </Card>
      ) : null}
    </Box>
  );
}
