import { Box, Button, Card, CardContent, Typography } from "@mui/material";

export default function AddNewProductComponent({
  handleOpen,
  open,
  DOM_AddTag,
}) {
  
  return (
    <Box>
      <Button onClick={handleOpen}>
        <Card
          sx={{
            minWidth: 200,
            minHeight: "192px",
            backgroundColor: "rgba(0,0,0,0)",
            border: "3px dashed gray",
            cursor: "pointer",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            color: "gray",
            "&:hover": {
              backgroundColor: "rgba(0,0,0,0.2)",
              color: "white",
              borderColor: "white",
            },
          }}
        >
          <CardContent>
            <Typography variant="h1" component="h6">
              +
            </Typography>
          </CardContent>
        </Card>
      </Button>
      {open ? (
          <Card
            sx={{
              minWidth: "500px",
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
