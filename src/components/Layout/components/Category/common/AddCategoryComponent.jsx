import {
  Box,
  Button,
  CardActions,
  CardContent,
  TextField,
  Typography,
} from "@mui/material";
import { useState } from "react";
import { resizeImage } from "../../../../../utils/image";
import SelectedImageComponent from "../../../../common/SelectedImageComponent";
import AddImageComponent from "./AddImageComponent";
import AddGenderComponent from "./AddGenderComponent";
import { useDispatch } from "react-redux";
import { addCategory } from "../../../../../features/Category/CategoryAPI";
import { IMAGE_SIZE } from "../../../../../_settings/setting";

export default function AddCategoryConponent({ handleClose }) {
  const [gender, setGender] = useState(true);
  const [name, setName] = useState("");
  const [selectedImage, setSelectedImage] = useState(null);
  const dispatch = useDispatch();

  const addClickHandle = (e) => {
    e.stopPropagation();
    if (name.trim() && selectedImage) {
      handleClose();
      const data = {
        name,
        gender,
        image: selectedImage,
        subCategory: {
          increment: 1,
          data: [],
        },
      };
      dispatch(addCategory(data));
    }
  };
  const gender1ClickHandle = (e) => {
    e.stopPropagation();
    setGender(false);
  };

  const gender2ClickHandle = (e) => {
    e.stopPropagation();
    setGender(true);
  };

  const nameChangeHandle = (e) => {
    setName(e.target.value);
  };

  const ImageChangeHandle = (e) => {
    const file = e.target.files[0];
    if (file) {
      resizeImage(file, IMAGE_SIZE, IMAGE_SIZE, (resizedImage) => {
        setSelectedImage(resizedImage);
      });
    }
  };

  return (
    <>
      <CardContent>
        <Typography variant="h6" component="h6">
          Добавить Категория
        </Typography>
        <AddGenderComponent
          gender={gender}
          gender2ClickHandle={gender2ClickHandle}
          gender1ClickHandle={gender1ClickHandle}
        />
        <Box sx={{ width: "100%" }}>
          <TextField
            sx={{ width: "100%" }}
            label="Категория"
            onChange={nameChangeHandle}
            variant="standard"
            value={name}
          />
        </Box>
        <Box sx={{ width: "100%" }}>
          {selectedImage ? (
            <SelectedImageComponent
              selectedImage={selectedImage}
              setSelectedImage={setSelectedImage}
            />
          ) : (
            <AddImageComponent ImageChangeHandle={ImageChangeHandle} />
          )}
        </Box>
      </CardContent>
      <CardActions>
        <Button
          variant="contained"
          sx={{ width: "100%", borderRadius: "25px" }}
          onClick={addClickHandle}
        >
          Добавить
        </Button>
      </CardActions>
    </>
  );
}
