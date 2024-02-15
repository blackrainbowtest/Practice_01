import { Box } from "@mui/material";
import { useState, useEffect } from "react";

const AutoImageSlider = ({ decodedImages }) => {
  const [activeStep, setActiveStepLocal] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setActiveStepLocal((prevStep) => (prevStep + 1) % decodedImages.length);
    }, 2000);

    return () => {
      clearInterval(intervalId);
    };
  }, [decodedImages.length]);

  return (
    <Box
      sx={{
        width: "100%",
        height: "140px",
        display: "flex",
        flexWrap: "nowrap",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {decodedImages.map((image, index) =>
        index === activeStep ? (
          <Box
            key={index}
            sx={{
              width: "100%",
              height: "100%",
              padding: "4px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <img
              style={{
                width: "130px",
                height: "130px",
                borderRadius: "5px",
              }}
              src={image}
              alt={`img ${index + 1}`}
            />
          </Box>
        ) : null
      )}
    </Box>
  );
};

export default AutoImageSlider;
