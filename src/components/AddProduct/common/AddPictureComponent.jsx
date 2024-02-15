import {
  Box,
  Card,
  CardActions,
  CardContent,
  Input,
  Typography,
} from "@mui/material";
import AddPhotoAlternateIcon from "@mui/icons-material/AddPhotoAlternate";
import SelectedImageComponent from "./SelectedImageComponent";
import EmptyImageComponent from "./EmptyImageComponent";

export default function AddPictureComponent({
  ImageChangeHandle,
  selectedImage,
  DeleteChooesedImage,
  inputKey
}) {
  return (
    <Card sx={{ minWidth: "200px" }}>
      <CardContent sx={{ padding: "8px 8px 0px 8px" }}>
        <Box
          style={{
            width: "100%",
            height: "140px",
            backgroundColor: "#ccc",
            borderRadius: "5px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            cursor: "pointer",
          }}
        >
          <Input
            type="file"
            key={inputKey}
            inputProps={{ accept: "image/*" }}
            style={{ display: "none" }}
            onChange={ImageChangeHandle}
            id="image-upload-input"
          />
          <label
            htmlFor="image-upload-input"
            style={{
              width: "100%",
              textAlign: "center",
              cursor: "pointer",
            }}
          >
            <AddPhotoAlternateIcon fontSize="large" sx={{ color: "white" }} />
            <Typography
              variant="subtitle1"
              color="textSecondary"
              sx={{ color: "white" }}
            >
              Загрузить фото
            </Typography>
          </label>
        </Box>
      </CardContent>
      <CardActions
        sx={{
          paddingTop: "4px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        {selectedImage.map((image, index) => (
          <SelectedImageComponent
            key={index}
            index={index}
            selectedImage={image}
            DeleteChooesedImage={DeleteChooesedImage}
          />
        ))}
        {Array.from({ length: 4 - selectedImage.length }).map((_, index) => (
          <EmptyImageComponent key={index} />
        ))}
      </CardActions>
    </Card>
  );
}
