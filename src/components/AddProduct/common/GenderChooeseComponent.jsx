import PersonIcon from "@mui/icons-material/Person";
import Person2Icon from "@mui/icons-material/Person2";
import { Box, Button } from "@mui/material";
import { useSelector } from "react-redux";

export default function GenderChooeseComponent({
  gender,
  setGender,
  setchoosedCategory,
}) {
  const data = useSelector((state) => state?.category?.data);

  const gender1ChangeHandle = (e) => {
    e.stopPropagation();
    const tempData = data.filter((cat) => cat.gender)[0].id;
    setGender(true);
    setchoosedCategory(tempData);
  };

  const gender2ChangeHandle = (e) => {
    e.stopPropagation();
    const tempData = data.filter((cat) => !cat.gender)[0].id;
    setGender(false);
    setchoosedCategory(tempData);
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        gap: "10px",
      }}
    >
      <Button
        sx={{
          color: gender ? "#0008C1" : "lightGray",
          backgroundColor: "white",
          minWidth: "50px",
          padding: "6px 0px",
        }}
        onClick={gender1ChangeHandle}
      >
        <Person2Icon />
      </Button>
      <Button
        sx={{
          color: !gender ? "#0008C1" : "lightGray",
          backgroundColor: "white",
          minWidth: "50px",
          padding: "6px 0px",
        }}
        onClick={gender2ChangeHandle}
      >
        <PersonIcon />
      </Button>
    </Box>
  );
}
