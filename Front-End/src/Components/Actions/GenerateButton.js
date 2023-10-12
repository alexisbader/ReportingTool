import { Button, Box } from "@mui/material";
import Report from '../../Report.xlsx';
import axios from "axios";
import FilterStore from "../../redux/FilterStore";
import FilterReducer from "../../redux/FilterReducer";
import RenderReducer from "../../redux/RenderReducer"
import RenderStore from "../../redux/RenderStore"


const Generate = () => {

  // Sends http requests to backend when Generate Report button is clicked
  const handleClick = () => {
    axios.get("http://localhost:3001/cols").then((res) => {
      console.log(res.data);
      console.log(res.data.message);
    });

    axios.post('http://localhost:3001/cols', RenderStore.getState() ).then(res => {
     console.log(res);
     console.log(res.data);
    })

    axios.post('http://localhost:3001/filter', FilterStore.getState() ).then(res => {
     console.log(res);
     console.log(res.data);
    })

  };

  // Generation and styling of Generate Report button
  return (
    <div class="generateReport">
      <Box textAlign="center">
      <a href={Report} download="Report"
        sx={{ 
            textDecoration: 'none',
        }}>
        <Button
          onClick={handleClick}
          sx={{
            backgroundColor: "#7CBA4F",
            textDecoration: "none",
            float: "center",
            padding: 2,
            color: "white",
            border: "none",
            fontFamily: "inter, sans-serif",
            textTransform: "none",
            FontWeight: "bold",
            fontSize: 20,
            borderRadius: "30px",
            "&:hover": {
              color: "#7CBA4F",
              border: 2,
            },
          }}
        >
          {" "}
          Generate Report (.xlsx){" "}
        </Button>
        </a>
      </Box>
    </div>
  );
};

export default Generate;
