import { useState } from "react";
import { Box, Typography } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import NewFilterButton from "../Actions/NewFilterButton";
import FilterItemCard from "./FilterItemCard";
import { red } from "@mui/material/colors";
import { textAlign } from "@mui/system";
import RadioButtonUncheckedIcon from "@mui/icons-material/RadioButtonUnchecked";

const FilterCard = (props) => {
  // Box containing the Add Filter section. Parent Element for NewFilterButton

  return (
    <div className="filter-wrapper">
      <Box
        sx={{
          width: 655,
          height: 598,
          p: 3,
          m: 2,
          backgroundColor: "#F5F5F5",
          borderRadius: "30px",
          justifyContent: "center",
          display: "grid",
          gridAutoRows: 100,
        }}
      >
        <Box
          component="span"
          sx={{
            p: 2,
            color: "#2E4158",
            fontSize: 36,
            fontWeight: "bold",
            justifyContent: "left",
            display: "inline",
          }}
        >
          <Box
            component="span"
            sx={{
              pl: 2.6,
              pr: 2.6,
              pt: 1,
              pb: 1,
              mt: 2,
              mr: 2,
              ml: -2,
              border: "5px solid #2E4158",
              borderRadius: "50%",
              fontSize: 36,
            }}
          >
            1
          </Box>
          Filter Section:
        </Box>

        <Box>
          <NewFilterButton />
        </Box>
      </Box>
    </div>
  );
};

export default FilterCard;
