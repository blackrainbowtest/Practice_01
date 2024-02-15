import { useSelector } from "react-redux";
import CategoryCardComponent from "./common/CategoryCardComponent";
import GenderComponent from "./common/GenderComponent";
import { Box } from "@mui/material";
import { useState, useRef, useEffect } from "react";
import ModalComponent from "../../../common/Modal";
import AddCategoryConponent from "./common/AddCategoryComponent";
import AddButtonComponent from "../../../common/AddButtonComponent/AddButtonComponent";
import ChangeButtonComponent from "../../../common/ChangeButtonComponent";

export default function CategoryComponent() {
  const data = useSelector((state) => state?.category?.data);
  const gender = useSelector((state) => state?.category?.gender);
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const boxRef = useRef(null);
  const [area, setArea] = useState({ start: 0, end: 0 });

  useEffect(() => {
    const boxWidth = boxRef?.current?.clientWidth;
    sizeChecker(Math.floor(boxWidth / 156));

    const handleResize = () => {
      const newBoxWidth = boxRef.current.clientWidth;
      sizeChecker(Math.floor(newBoxWidth / 156));
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

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        gap: "5px",
        padding: "0px 15px",
        height: "80px",
      }}
    >
      <GenderComponent />
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
                  <CategoryCardComponent
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
      <AddButtonComponent
        handleOpen={handleOpen}
        open={open}
        DOM_AddTag={<AddCategoryConponent handleClose={handleClose} />}
      />
      {open ? <ModalComponent handleClose={handleClose} /> : null}
    </Box>
  );
}
