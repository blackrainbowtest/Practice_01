import { Box } from "@mui/material";
import Tab from "@mui/material/Tab";
import Tabs from "@mui/material/Tabs";
import { useSelector } from "react-redux";
import { createTheme, ThemeProvider } from "@mui/material/styles";

export default function SubCategoryChooeseComponent({
  value,
  setValue,
  category,
}) {
  const data = useSelector((state) => state?.category?.data);
  const handleChange = (_, newValue) => {
    setValue(newValue);
  };

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
      <Box
        sx={{
          display: "flex",
          flexWrap: "nowrap",
          padding: "5px 15px 0px 0px",
        }}
      >
        <ThemeProvider theme={theme}>
          <Tabs
            value={value}
            onChange={handleChange}
            variant="scrollable"
            scrollButtons="auto"
            aria-label="scrollable auto tabs example"
            sx={{ minHeight: "40px" }}
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
      </Box>
    </Box>
  );
}
