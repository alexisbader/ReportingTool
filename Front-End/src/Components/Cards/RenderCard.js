import * as React from "react";
import store from "../../redux/RenderStore";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Checkbox from "@mui/material/Checkbox";
import FormGroup from "@mui/material/FormGroup";
import { FormControl, FormControlLabel, FormLabel } from "@mui/material";
import RadioButtonUncheckedIcon from "@mui/icons-material/RadioButtonUnchecked";
import Typography from "@mui/material/Typography";

// File contains all the components which need to be rendered for the rendering section. Includes background box and al content inside. 

// Get message when the Redux store is changed
const unsubscribe = store.subscribe(() => {
  console.log("Store Changed", store.getState());
});

const RenderingSelection = () => {

  // Options for checkboxes
  const selectorItems = [
    "Name",
    "Email",
    "Phone",
    "Social Media",
    "Job Title 1",
    "Job Title 2",
    "Licences",
    "Designation",
    "Location",
    "Address",
    "URL",
    "Language",
    "Time Zone",
    "Online Status",
    "Workflow",
    "Locator",
    "Access Type",
    "Site Theme",
  ];

  // Set state for checked boxes
  const [checked, setChecked] = React.useState(
    new Array(selectorItems.length).fill(false)
  );

  const [activeItems, setActiveItems] = React.useState([]);

  const handleCheck = (position) => {
    const updatedChecked = checked.map((item, index) =>
      index === position ? !item : item
    );

    setChecked(updatedChecked);

    const updateActiveItems = [];
    for (var i = 0; i < checked.length; i++) {
      if (checked[i] == true) {
        updateActiveItems.push(selectorItems[i]);
      }
    }
    setActiveItems(updateActiveItems);

    // Add option to store on check
    if (checked[position] == false) {
      store.dispatch({
        type: "ADD_RENDERING_DATA",
        payload: {
          description: selectorItems[position],
        }
      });
    }

    // Remove option from store on uncheck
    else {
      store.dispatch({
        type: "REMOVE_RENDERING_DATA",
        payload: {
          description: selectorItems[position],
        }
      });
    }

  };

  return (
    // Background box
    <Box
      sx={{
        minWidth: 655,
        height: 598,
        padding: 3,
        m: 2,
        backgroundColor: "#F5F5F5",
        borderRadius: "30px",
        justifyContent: "center",
        display: "grid",
        gridAutoRows: 100,
      }}
    >
      <Box
        sx={{
          padding: 2,
          color: "#2E4158",
          fontSize: 36,
          fontWeight: "bold",
        }}
      >
        <Box
          component="span"
          sx={{
            pl: 2.3,
            pr: 2.3,
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
          2
        </Box>
        Data Rendering Selection:
      </Box>

      {/* Inner box */}
      <Box
        sx={{
          width: 586,
          height: 444,
          backgroundColor: "#FFF",
          borderRadius: "30px",
          justifyContent: "left",
          display: "grid",
        }}
      >

        {/* Check Boxes */}
        <FormControl
          sx={{ m: 4, height: "auto" }}
          component="fieldset"
          variant="standard"
        >
          <FormGroup
            sx={{ flexDirection: "column", maxHeight: 400, columnGap: "50%" }}
          >
            {selectorItems.map((item, index) => (
              <FormControlLabel
                sx={{ color: "#2E4158" }}
                control={
                  <Checkbox
                    label={item}
                    checked={checked[index]}
                    onChange={() => handleCheck(index)}
                    sx={{
                      color: "#2E4158",
                      "&.Mui-checked": {
                        color: "#2E4158",
                      },
                    }}
                  />
                }
                label={item}
              />
            ))}
          </FormGroup>
        </FormControl>
      </Box>
    </Box>
  );
};

export default RenderingSelection;
