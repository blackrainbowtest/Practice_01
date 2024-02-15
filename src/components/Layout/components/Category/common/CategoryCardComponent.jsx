import {
  Button,
  Card,
  CardMedia,
  Typography,
} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { decodeBase64ToImage } from "../../../../../utils/image";
import { changeCategory, changeValue } from "../../../../../features/Category/CategorySlice";

export default function CategoryCardComponent({
  category
}) {
  const imageUrl = category.image ? decodeBase64ToImage(category.image) : null;
  const dispatch = useDispatch();

  const categoryChooeseHandle = (e) => {
    e.stopPropagation();
    dispatch(changeCategory(category.id));
    dispatch(changeValue(1))
  };

  const choosedCategory = useSelector((state) => state?.category?.category);

  return (
    <Button sx={{ minWidth: "140px", height: "80px", padding: "1px"}} onClick={categoryChooeseHandle}>
      <Card
        sx={{
          border: choosedCategory === category.id ? "1px solid gray" : "1px solid lightgray",
          padding: "2px",
          height: "80px",
          width: "100%"
        }}
      >
          {imageUrl ? (
            <CardMedia
              component="img"
              height={50}
              sx={{ width: 50, mx: "auto", padding: "0px" }}
              image={imageUrl}
              alt="Paella dish"
            />
          ) : null}
          <Typography variant="p" color="text.secondary" style={{ textTransform: 'none' }}>
            {category?.name}
          </Typography>
      </Card>
    </Button>
  );
}
