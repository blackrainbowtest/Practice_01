import { Box, TextField } from "@mui/material";

export default function AddDataComponent({code, price, setCode, setPrice}) {

  const codeChangeHandle = (e) => {
    setCode(e.target.value);
  };
  const priceChangeHandle = (e) => {
    if(e.target.value > 0) {
      setPrice(e.target.value);
    } else {
      setPrice(0)
    }
  };

  return (
    <Box sx={{ width: "50%"}}>
      <Box sx={{ width: "100%", display: "flex", gap: "10px" }}>
        <TextField
          sx={{ width: "48%" }}
          label="Артикул"
          onChange={codeChangeHandle}
          variant="standard"
          value={code}
        />
        <TextField
          sx={{ width: "48%" }}
          label="Цена"
          onChange={priceChangeHandle}
          variant="standard"
          value={price}
          type="number"
        />
      </Box>
    </Box>
  );
}
