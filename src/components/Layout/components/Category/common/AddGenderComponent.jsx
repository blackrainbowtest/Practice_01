import { Box, Button, Typography } from "@mui/material"
import PersonIcon from "@mui/icons-material/Person";
import Person2Icon from "@mui/icons-material/Person2";

export default function AddGenderComponent({gender, gender2ClickHandle, gender1ClickHandle }) {
    return (
        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <Button
            variant="outlined"
            sx={{
              borderColor: gender ? "#0008C1" : "lightGray",
              color: gender ? "#0008C1" : "gray",
            }}
            startIcon={<Person2Icon />}
            onClick={gender2ClickHandle}
          >
            <Typography variant="p">Женский</Typography>
          </Button>
          <Button
            variant="outlined"
            sx={{
              borderColor: !gender ? "#0008C1" : "lightGray",
              color: !gender ? "#0008C1" : "gray",
            }}
            startIcon={<PersonIcon />}
            onClick={gender1ClickHandle}
          >
            <Typography variant="p">Мужской</Typography>
          </Button>
        </Box>
    )
}