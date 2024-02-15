import SearchComponent from "./components/Search";
import CategoryComponent from "./components/Category";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCategorys } from "../../features/Category/CategoryAPI";
import { Box } from "@mui/material";
import SubCategoryComponent from "./components/SubCategory";

export default function Layout() {
  const dispatch = useDispatch();
  const data = useSelector((state) => state?.category?.data);

  useEffect(() => {
    dispatch(getCategorys());
  }, [dispatch]);
  return (
    <>
      <SearchComponent />
      {data ? (
        <Box sx={{ padding: "0px 50px" }}>
          <CategoryComponent />
          <SubCategoryComponent />
        </Box>
      ) : null}
    </>
  );
}
