import {
  Box,
  Button,
  CardActions,
  CardContent,
  Typography,
} from "@mui/material";
import GenderChooeseComponent from "./GenderChooeseComponent";
import { useEffect, useRef, useState } from "react";
import CardChooeseComponent from "./CardChooeseComponent";
import { useDispatch, useSelector } from "react-redux";
import SubCategoryChooeseComponent from "./SubCategoryChooeseComponent";
import AddPictureComponent from "./AddPictureComponent";
import AddDataComponent from "./AddDataComponent";
import { resizeImage } from "../../../utils/image";
import { IMAGE_SIZE } from "../../../_settings/setting";
import { addProduct } from "../../../features/Product/ProductAPI";
import ChangeButtonComponent from "../../common/ChangeButtonComponent";

export default function AddNewProduct({ handleClose }) {
  const [gender, setGender] = useState(true);
  const [choosedCategory, setchoosedCategory] = useState(1);
  const [value, setValue] = useState("1");
  const [code, setCode] = useState("");
  const [price, setPrice] = useState("");
  const [selectedImage, setSelectedImage] = useState([]);
  const [inputKey, setInputKey] = useState(1)

  const data = useSelector((state) => state?.category?.data);
  const dispatch = useDispatch();

  const ImageChangeHandle = (e) => {
    const file = e.target.files[0];
    setInputKey(inputKey + 1)
    if (file && selectedImage.length < 4) {
      resizeImage(file, IMAGE_SIZE * 2, IMAGE_SIZE * 2, (resizedImage) => {
        setSelectedImage([...selectedImage, resizedImage]);
      });
    }
  };

  const boxRef = useRef(null);
  const [area, setArea] = useState({ start: 0, end: 1 });

  useEffect(() => {
    setArea({ start: 0, end: 1 });
  }, [gender]);

  useEffect(() => {
    const boxWidth = boxRef?.current?.clientWidth;
    sizeChecker(Math.floor(boxWidth / 130));

    const handleResize = () => {
      const newBoxWidth = boxRef.current.clientWidth;
      sizeChecker(Math.floor(newBoxWidth / 130));
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [data]);

  function sizeChecker(maxSize) {
    if (maxSize) {
      setArea({ ...area, end: maxSize - 1 });
    }
  }

  function changeCategoryDisplayNext(e) {
    if (area.end < data.filter((cat) => cat.gender === gender).length - 1) {
      setArea({ start: area.start + 1, end: area.end + 1 });
    }
  }

  function changeCategoryDisplayPrev(e) {
    if (area.start > 0) {
      setArea({ start: area.start - 1, end: area.end - 1 });
    }
  }

  const DeleteChooesedImage = (index) => {
    setSelectedImage(selectedImage.filter((_, i) => i !== index))
  }

  const addClickHandle = (e) => {
    e.stopPropagation();
    if (code.trim() && Number(price) > 0 && selectedImage.length) {
      console.log(gender, choosedCategory, value, code, price, selectedImage.length);
      handleClose();
      const newData = {
        image: selectedImage,
        price,
        code,
        value,
        category: choosedCategory,
        gender,
      };
      dispatch(addProduct(newData));
    }
  };

  return (
    <>
      <CardContent>
        <Typography variant="p" component="h4">
          Добавить Изделия
        </Typography>
        <Box sx={{ display: "flex" }}>
          <GenderChooeseComponent
            gender={gender}
            setGender={setGender}
            setchoosedCategory={setchoosedCategory}
          />
          {data.length ? (
            <Box
              ref={boxRef}
              sx={{
                width: "100%",
                display: "flex",
                height: "80px",
                justifyContent: "space-around",
                gap: "4px",
                margin: "0px 15px",
                padding: "0px 5px",
                overflow: "hidden",
                zIndex: 15,
              }}
            >
              <ChangeButtonComponent
                disabled={!(area.start > 0)}
                changeCategoryDisplay={changeCategoryDisplayPrev}
                navigate={true}
              />
              {data
                .filter((cat) => cat.gender === gender)
                .map((category, index) => {
                  if (index >= area.start && index <= area.end) {
                    return (
                      <CardChooeseComponent
                        choosedCategory={choosedCategory}
                        setchoosedCategory={setchoosedCategory}
                        key={category.id}
                        category={category}
                      />
                    );
                  }
                  return null;
                })}
              <ChangeButtonComponent
                disabled={
                  !(
                    area.end <
                    data.filter((cat) => cat.gender === gender).length - 1
                  )
                }
                changeCategoryDisplay={changeCategoryDisplayNext}
                navigate={false}
              />
            </Box>
          ) : null}
        </Box>
        <Box sx={{ marginBottom: "4px" }}>
          <SubCategoryChooeseComponent
            value={value}
            setValue={setValue}
            category={choosedCategory}
          />
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "space-between",
            width: "100%",
            gap: "10px",
          }}
        >
          <AddPictureComponent
            ImageChangeHandle={ImageChangeHandle}
            selectedImage={selectedImage}
            DeleteChooesedImage={DeleteChooesedImage}
            inputKey={inputKey}
          />
          <AddDataComponent
            code={code}
            price={price}
            setCode={setCode}
            setPrice={setPrice}
          />
        </Box>
      </CardContent>
      <CardActions>
        <Box sx={{ width: "100%", display: "flex", justifyContent: "end" }}>
          <Button
            variant="contained"
            sx={{ borderRadius: "25px" }}
            onClick={addClickHandle}
          >
            Добавить
          </Button>
        </Box>
      </CardActions>
    </>
  );
}
