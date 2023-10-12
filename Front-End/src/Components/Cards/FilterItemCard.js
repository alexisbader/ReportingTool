import { useState } from "react";
import * as React from "react";

import { Box, Chip, IconButton } from "@mui/material";

import { ArrowForward, LineWeight, RemoveCircleOutline } from "@mui/icons-material";

// Renders the actual filter cards for each new filter added
const FilterItemCard = (props) => {
  return (
    <Box
      sx={{
        width: 586,
        minHeight: 72,
        backgroundColor: "#FFF",
        borderRadius: "30px",
        fontSize: 24,
        textTransform: "none",
        color: "#2E4158",
        fontWeight: "bold",
        justifyContent: 'left',
        display: 'block',
        mb:4
      }}
    >
      <IconButton
        sx={{
          height: 50,
          width: 50,
          m: 2,
        }}
      >
        {/* Removes the filter onClick */}
        <RemoveCircleOutline 
        onClick={props.delete}
          sx={{
            color: "#D90000",
            height: 40,
            width: 40,
          }}
        />
      </IconButton>

      <Chip
        variant="outlined"
        sx={{
          m: 2,
          height: 40,
          color: "#2E4158",
          borderColor: "#2E4158",
          borderWidth:2,
          fontSize: 14,
        }}
        value={props.queryItem}
        label={props.queryItem}
      />

      <ArrowForward
        sx={{
          height: 20,
          width: 20,
          mt:3,
        }}
      />

      <Chip
        variant="outlined"
        sx={{
          m: 2,
          height: 40,
          color: "#2E4158",
          borderColor: "#2E4158",
          borderWidth:2,
          fontSize: 14,
        }}
        value={props.queryType}
        label={props.queryType}
      />

      <ArrowForward
        sx={{
          height: 20,
          width: 20,
          mt:3
        }}
      />

        {/* Adds the filter selections in chips */}
      {props.searchTerms.map((term, index) => (
        <Chip
          variant="outlined"
          key={index}
          sx={{
            m: 2,
            height: 40,
            color: "#2E4158",
            borderColor: "#2E4158",
            borderWidth:2,
            fontSize: 14,
          }}
          value={term}
          label={term}
        />
      ))}
    </Box>
  );
};

export default FilterItemCard;
