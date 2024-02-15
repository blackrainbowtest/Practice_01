import { Button, Card } from "@mui/material";
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';

export default function ChangeButtonComponent({
  disabled,
  changeCategoryDisplay,
  navigate
}) {
  return (
    <Button
      disabled={disabled}
      sx={{ padding: "1px", minWidth: "30px", height: "100%", opacity: disabled ? "0.5":"1" }}
      onClick={changeCategoryDisplay}
    >
      <Card
        sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          border: "1px solid lightgray",
          "&:hover": {
            border: "1px solid gray",
          },
          padding: "2px",
          width: "100%",
          height: "78px"
        }}
      >
        {navigate ? (
            <NavigateBeforeIcon />
        ): (
            <NavigateNextIcon />
        )}
      </Card>
    </Button>
  );
}
