import { useState } from "react";
import * as React from "react";
import store from "../../redux/FilterStore";
import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
  Autocomplete,
  Chip,
  Radio,
  RadioGroup,
  FormControl,
  FormControlLabel,
  FormLabel,
  Alert,
} from "@mui/material";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import FilterItemCard from "../Cards/FilterItemCard";
import FilterCard from "../Cards/FilterCard";

// get message when Redux store is changed
const unsubscribe = store.subscribe(() => {
  console.log("Store Changed", store.getState());
});

const NewFilterButton = (props) => {
  ////////// Query Items and Type //////////

  const queryItems = [
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

  // Declare state for currently selected Query Item
  const [queryItem, setQueryItem] = useState("");

  const handleQueryItemChange = (event) => {
    setQueryItem(event.target.value);
  };

  // Declare state for currently selected Query Type
  const [queryType, setQueryType] = useState("");

  const handleQueryTypeChange = (event) => {
    setQueryType(event.target.value);
  };

  // Declare state for currently selected Search Terms
  const [searchTerms, setSearchTerms] = useState([{}]);

  // State of all current current active filters
  const [activeFilters, setActiveFilters] = useState([]);


  ////////// New Filter Modal //////////

  // State
  const [showNewFilterModal, setNewFilterModal] = useState(false);

  // Clear state when reopening the modeal to choose new filter
  const clearState = () => {
    setQueryItem("");
    setQueryType("");
    setSearchTerms([]);
  };

  // Can be used to disable the add filter button if filter selection is not valid
  const isFilterSelected = () => {
    if (queryItem == "" || queryType == "" || searchTerms == []) {
      return true;
    } else {
      return true;
    }
  };

  // Handler
  const newFilterModalHandler = () => {
    setNewFilterModal(!showNewFilterModal);
    clearState();
  };

  // Store the last active filter
  const newFilter = {
    queryItem: queryItem,
    queryType: queryType,
    searchTerms: [searchTerms],
  };

  // Create a new array to store the active filters when one is deleted
  const newArr = (i) => {
    const first = activeFilters.slice(0,i)
    const second = activeFilters.slice(i+1)
    const combined = first.concat(second)
    return combined
  };

  // Delete one of the filters and update the store
  function deleteFilter(i) {
      setActiveFilters(newArr(i))
      console.log(i)
      console.log(activeFilters)

    store.dispatch({
      type: "REMOVE_FILTER",
      payload: {
        description: activeFilters[i],
      }, 
    });
  }

  ////////// Handle Add Filter Button //////////
  const handleSubmitFilter = () => {
    setActiveFilters([...activeFilters, newFilter]);

    newFilterModalHandler();

    store.dispatch({
      type: "ADD_FILTER",
      payload: {
        description: newFilter,
      },
    });
  };


  return (
    // Render the filter cards and pass in state as props. FilterItemCard is child of NewFilterButton
    <div className="new-filter-button">
      {activeFilters.map((item, i) => (
        <FilterItemCard
          delete={() => deleteFilter(i)}
          queryItem={item.queryItem}
          queryType={item.queryType}
          searchTerms={[item.searchTerms]}
        />
      ))}

      {/* New Filter Button */}
      <Button
        onClick={newFilterModalHandler}
        sx={{
          width: 586,
          minHeight: 72,
          mb: 2,
          backgroundColor: "#FFF",
          borderRadius: "30px",
          display: "flex",
          alignItems: "left",
          justifyContent: "left",
          fontSize: 24,
          textTransform: "none",
          color: "#2E4158",
          fontWeight: "bold",
        }}
      >
        <AddCircleOutlineIcon
          sx={{
            m: 2,
            height: 40,
            width: 40,
            color: "#7CBA4F",
          }}
        />
        Add New Filter
      </Button>

      {/* New Filter Modal */}
      <Dialog
        open={showNewFilterModal}
        onClose={newFilterModalHandler}
        maxWidth="1000px"
        sx={{ m: 2 }}
      >
        <DialogTitle
          sx={{
            textAlign: "center",
            color: "#2E4158",
            fontSize: 36,
            fontWeight: "bold",
            m: 2,
          }}
        >
          Add New Filter
        </DialogTitle>
        <DialogContent
          sx={{
            width: 1000,
            height: 730,
            m: 2,
          }}
        >
          {/* Query Item Radio Group */}
          <Box>
            <FormControl
              sx={{ ml: 3, mt: 2, height: "auto" }}
              component="fieldset"
              variant="standard"
            >
              <FormLabel
                sx={{
                  color: "#2E4158",
                  fontSize: 24,
                  fontWeight: "bold",
                }}
              >
                Filter Type{" "}
              </FormLabel>
              <RadioGroup
                name="queryItem-radio-btn-group"
                value={queryItem}
                onChange={handleQueryItemChange}
                sx={{
                  flexDirection: "column",
                  maxHeight: 200,
                  color: "#2E4158",
                }}
              >
                {queryItems.map((item, index) => (
                  <FormControlLabel
                    key={index}
                    value={item}
                    control={<Radio sx={{ color: "#2E4158" }} />}
                    label={item}
                    sx={{ color: "#2E4158" }}
                  />
                ))}
              </RadioGroup>
            </FormControl>
          </Box>

          {/* Query Type Radio Group */}
          <Box>
            <FormControl
              sx={{ ml: 3, mt: 4, mb: 5 }}
              component="fieldset"
              variant="standard"
            >
              <FormLabel
                component="legend"
                sx={{
                  color: "#2E4158",
                  fontSize: 24,
                  fontWeight: "bold",
                }}
              >
                Query Type{" "}
              </FormLabel>
              <RadioGroup
                name="queryType-radio-btn-group"
                value={queryType}
                onChange={handleQueryTypeChange}
                sx={{
                  flexDirection: "column",
                  maxHeight: 400,
                  color: "#2E4158",
                }}
              >
                <FormControlLabel
                  value="Exactly"
                  control={<Radio sx={{ color: "#2E4158" }} />}
                  label="Exactly"
                />
                <FormControlLabel
                  value="Contains"
                  control={<Radio sx={{ color: "#2E4158" }} />}
                  label="Contains"
                />
              </RadioGroup>
            </FormControl>
          </Box>

          {/* Query Search Tag Chip Text */}
          <FormLabel
            sx={{
              m: 3,
              color: "#2E4158",
              fontSize: 24,
              fontWeight: "bold",
            }}
          >
            Search Terms{" "}
          </FormLabel>
          <Box>
            <Autocomplete
              multiple
              id="tags-filled"
              sx={{ color: "#2E4158" }}
              options={[]}
              freeSolo
              onChange={(e, value) => setSearchTerms((state) => value)}
              renderTags={(value, getSearchTerms) =>
                value.map((option, index) => (
                  <Chip
                    sx={{ color: "#2E4158" }}
                    variant="outlined"
                    label={option}
                    {...getSearchTerms({ index })}
                  />
                ))
              }
              renderInput={(params) => (
                <TextField
                  {...params}
                  variant="filled"
                  label="Add New Search Term"
                  placeholder="Filter"
                  fullWidth="false"
                  sx={{ ml: 3, mt: 1, maxWidth: "95%" }}
                />
              )}
            />
          </Box>
        </DialogContent>

        {/* Cancel Button */}
        <DialogActions>
          <Button
            onClick={newFilterModalHandler}
            sx={{
              color: "#FFF",
              background: "#D90000",
              border: 2,
              borderRadius: "30px",
              fontSize: 20,
              width: "50%",
              ml: 3,
              mb: 4,
              "&:hover": {
                color: "#D90000",
              },
            }}
          >
            Cancel
          </Button>

          {/* Add Button */}
          <Button
            onClick={handleSubmitFilter}
            // disabled = {isFilterSelected}
            sx={{
              color: "#FFF",
              backgroundColor: "#7CBA4F",
              border: 2,
              borderRadius: "30px",
              fontSize: 20,
              width: "50%",
              mr: 3,
              mb: 4,
              "&:hover": {
                color: "#7CBA4F",
              },
            }}
          >
            Add
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default NewFilterButton;
