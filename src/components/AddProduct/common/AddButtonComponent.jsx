import { Box, Button, Card } from "@mui/material";

export default function AddButtonComponent({handleOpen, open, DOM_AddTag }) {
  return (
    <Box sx={{ height: "50px"}}>
      <Button
        onClick={handleOpen}
        variant="text"
        sx={{
          color: "white",
          
          height: "100%",
          boxShadow: 2,
          fontSize: "30px",
          padding: "0px",
          backgroundColor: "orange",
          "&:hover": {
            backgroundColor: "#FFCB6F",
          },
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
            width: "600px",
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
