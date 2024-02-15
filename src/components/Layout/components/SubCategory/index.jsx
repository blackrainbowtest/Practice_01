import { Box } from "@mui/material";
import Tab from "@mui/material/Tab";
import Tabs from "@mui/material/Tabs";
import { createTheme, ThemeProvider } from "@mui/material/styles";

import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import AddButtonComponent from "../../../common/AddButtonComponent/AddButtonComponent";
import ModalComponent from "../../../common/Modal";
import { changeValue } from "../../../../features/Category/CategorySlice";
import SubCategoryOutletComponent from "./common/SubCategoryOutlet";
import AddSubCategoryComponent from "./common/AddSubCategoryComponent";

export default function SubCategoryComponent() {
  const [open, setOpen] = useState(false);
  const dispatch = useDispatch();
  const category = useSelector((state) => state?.category?.category);
  const data = useSelector((state) => state?.category?.data);
  const gender = useSelector((state) => state?.category?.gender);
  const value = useSelector((state) => state?.category?.value);

  const handleChange = (_, newValue) => {
    dispatch(changeValue(newValue));
  };

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const theme = createTheme({
    components: {
      MuiTabs: {
        styleOverrides: {
          indicator: {
            height: "4px",
          },
        },
      },
    },
  });
  return (
    <Box sx={{ width: "100%", typography: "body1" }}>
      <Box sx={{ display: "flex", flexWrap: "nowrap", padding: "5px 15px 0px 15px" }}>
        <ThemeProvider theme={theme}>
          <Tabs
            value={value}
            onChange={handleChange}
            variant="scrollable"
            scrollButtons="auto"
            aria-label="scrollable auto tabs example"
            sx={{minHeight: "40px"}}
          >
            {data.map((val) =>
              val.id === category
                ? val.subCategory.data.map((sub) => (
                    <Tab
                      key={sub.id}
                      label={sub.name}
                      value={sub.id.toString()}
                    />
                  ))
                : null
            )}
          </Tabs>
        </ThemeProvider>
        <AddButtonComponent
          handleOpen={handleOpen}
          open={open}
          DOM_AddTag={<AddSubCategoryComponent handleClose={handleClose} />}
          disabled={data.filter(cat => cat.gender === gender).length === 0}
        />
      </Box>
      <SubCategoryOutletComponent />
      {open ? <ModalComponent handleClose={handleClose} /> : null}
    </Box>
  );
}
