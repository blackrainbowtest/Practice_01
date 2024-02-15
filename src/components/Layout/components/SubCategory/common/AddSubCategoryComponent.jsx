import {
  Box,
  Button,
  CardActions,
  CardContent,
  TextField,
  Typography,
} from "@mui/material";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { patchSubCategory } from "../../../../../features/Category/CategoryAPI";

export default function AddSubCategoryComponent({ handleClose }) {
  const category = useSelector((state) => state?.category?.category);
  const [name, setName] = useState("");
  const data = useSelector((state) => state?.category?.data);
  const dispatch = useDispatch()

  const addClickHandle = (e) => {
    e.stopPropagation();
    if (name.trim()) {
        handleClose();
        const oldData = data.filter(val => val.id === category)[0].subCategory
        const newData = {
            subCategory: {
                increment: oldData.increment + 1,
                data: [
                    ...oldData.data,
                    {
                        id: oldData.increment,
                        name: name,
                        data: []
                    }
                ]
            }
        };
        dispatch(patchSubCategory({id: category, data: newData}))
      }
  };

  const nameChangeHandle = (e) => {
    setName(e.target.value);
  };

  return (
    <CardContent>
      <Typography variant="h6" component="h6">
        {data.map((elm) => {
          return elm.id === category ? elm.name : null;
        })}
        : Добавить Подкатегория
      </Typography>
      <Box sx={{ width: "100%" }}>
        <TextField
          sx={{ width: "100%" }}
          label="Подкатегория"
          onChange={nameChangeHandle}
          variant="standard"
          value={name}
        />
      </Box>
      <CardActions>
        <Button
          variant="contained"
          sx={{ width: "100%", borderRadius: "25px" }}
          onClick={addClickHandle}
        >
          Добавить
        </Button>
      </CardActions>
    </CardContent>
  );
}
