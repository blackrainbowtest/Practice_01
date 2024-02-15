import PersonIcon from "@mui/icons-material/Person";
import Person2Icon from "@mui/icons-material/Person2";

import { Box, Button } from "@mui/material";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  changeCategory,
  changeGender,
  changeValue,
} from "../../../../../features/Category/CategorySlice";

export default function GenderComponent() {
  const [gender, setGender] = useState(
    useSelector((state) => state?.category?.gender)
  );
  const data = useSelector((state) => state?.category?.data);
  const dispatch = useDispatch();

  const gender1ChangeHandle = (e) => {
    e.stopPropagation();
    setGender(true);
    dispatch(changeGender(true));
    const tempData = data.filter((cat) => cat.gender)[0]?.id;
    dispatch(changeCategory(tempData));
    dispatch(changeValue(1));
  };

  const gender2ChangeHandle = (e) => {
    e.stopPropagation();
    setGender(false);
    dispatch(changeGender(false));
    const tempData = data.filter((cat) => !cat.gender)[0]?.id;
    dispatch(changeCategory(tempData));
    dispatch(changeValue(1));
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
