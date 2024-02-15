import { Button, Card, CardMedia, Typography } from "@mui/material";
import { decodeBase64ToImage } from "../../../utils/image";
import { IMAGE_SIZE } from "../../../_settings/setting";

export default function CardChooeseComponent({
  choosedCategory,
  setchoosedCategory,
  category,
}) {
  const categoryChooeseHandle = (e) => {
    e.stopPropagation();
    setchoosedCategory(category.id);
  };
  const imageUrl = category.image ? decodeBase64ToImage(category.image) : null;

  return (
    <Button sx={{ minWidth: 110 }} onClick={categoryChooeseHandle}>
      <Card
        sx={{
          minWidth: 100,
          border:
            choosedCategory === category.id
              ? "1px solid gray"
              : "1px solid lightgray",
        }}
      >
        {imageUrl ? (
          <CardMedia
            component="img"
            height={IMAGE_SIZE / 2}
            sx={{ width: IMAGE_SIZE / 2, mx: "auto" }}
            image={imageUrl}
            alt="Paella dish"
          />
        ) : null}
        <Typography
          variant="p"
          color="text.secondary"
          style={{ textTransform: "none" }}
        >
          {category?.name}
        </Typography>
      </Card>
    </Button>
  );
}
