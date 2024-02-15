import { Box } from "@mui/material";
import AddButtonComponent from "./common/AddButtonComponent";
import ModalComponent from "../common/Modal";
import { useState } from "react";
import AddNewProduct from "./common/AddNewProduct";

export default function AddProduct() {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);


  return (
    <Box sx={{ position: "absolute", top: "0px", left: "0px", height: "100vh", width: "100vw" }}>
      <AddButtonComponent
        handleOpen={handleOpen}
        open={open}
        DOM_AddTag={<AddNewProduct handleClose={handleClose} />}
      />
      {open ? <ModalComponent handleClose={handleClose} /> : null}
    </Box>
  );
}
