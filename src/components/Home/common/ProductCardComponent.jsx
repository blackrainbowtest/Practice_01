import { Card, CardActions, CardContent, Typography } from "@mui/material";
import { decodeBase64ToImage } from "../../../utils/image";
import AutoImageSlider from "./AutoImageSlider";

export default function ProductCardComponent({ product }) {
  const decodedImages = product.image.map((base64Image) =>
    decodeBase64ToImage(base64Image)
  );

  return (
    <Card sx={{ minWidth: 200, minHeight: 200 }}>
      {decodedImages ? <AutoImageSlider decodedImages={decodedImages} /> : null}
      <CardActions
        sx={{ display: "flex", justifyContent: "space-between", gap: "5px" }}
      >
        <Typography variant="body2">{product?.code}</Typography>
        <Typography variant="p" component="h4">
          {product?.price}
        </Typography>
      </CardActions>
    </Card>
  );
}
