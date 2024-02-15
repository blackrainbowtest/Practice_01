import { Box } from "@mui/material";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../../features/Product/ProductAPI";
import ProductCardComponent from "./common/ProductCardComponent";
import AddNewProductComponent from "./common/AddNewProductComponent";
import ModalComponent from "../common/Modal";
import AddNewProduct from "../AddProduct/common/AddNewProduct";

export default function Home() {
  const data = useSelector((state) => state?.product?.data);
  const gender = useSelector((state) => state?.category?.gender);
  const category = useSelector((state) => state?.category?.category);
  const value = useSelector((state) => state?.category?.value);
  const dispatch = useDispatch();

  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);
  return data ? (
    <Box sx={{ width: "100%", display: "flex", flexWrap: "wrap", alignItems: "center", gap: "10px", paddingTop: "5px", height: 210 }}>
      {data.map((product) => {
        if (
          gender === product.gender &&
          category === product.category &&
          value === product.value
        ) {
          return <ProductCardComponent key={product.id} product={product} />;
        }
        return null;
      })}
      <AddNewProductComponent
        handleOpen={handleOpen}
        open={open}
        DOM_AddTag={<AddNewProduct handleClose={handleClose} />}
      />
      {open ? <ModalComponent handleClose={handleClose} /> : null}
    </Box>
  ) : null;
}
