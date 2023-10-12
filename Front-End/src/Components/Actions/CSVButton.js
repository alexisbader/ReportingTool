
// CSV Section at bottom of webpage. Not related to report generator and can be removed 

import React from 'react'
import { Button, Box, Typography, Link, autocompleteClasses } from '@mui/material';
import CSV from '../../Images/CSV.png'

const CSVButton = () => {
  return (
    <div>
    <Box
    sx = {{
        display:"flex",
        justifyContent:"center",
        pt: 5
    }}
    >
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
                ml: 2,
                border: "5px solid #2E4158",
                borderRadius: "50%",
                fontSize: 36,
                }}
            >
           3
          </Box>
          CSVFileExtractor:
        </Box>
            <Box pt={1} sx = {{
            display:"flex",
            flexDirection: "column",
        }}>

        <Box p = {2} sx = {{ typography: 'body2', textAlign:"center", ml: 2}} >
            Instructions for the CSV File Extractor are linked below.
            Utilize this when you need to combine CSV files with the same name in multiple directories.
        </Box>
            <Box component="img"
            sx = {{
                width: 450,
                height: 350,
                margin: "auto",
                pb: 2,
                pt: 2,
            }}
                src={CSV}
            />

            <Box
            sx = {{
                display: "flex",
                justifyContent: "center",
            }}
            >
                <Button
                        sx={{ 
                            backgroundColor: "#FFF", 
                            float: "center", 
                            padding: 2, 
                            color: "#009DD9",
                            border: "2px solid #009DD9",  
                            fontFamily: "inter, sans-serif",
                            textTransform: "none",
                            FontWeight: "bold",
                            fontSize: 20,
                            borderRadius: "30px",
                            "&:hover": {
                                backgroundColor: "#009DD9",
                                color: "#FFF",
                                border: 2,
                            },
                            alignSelf: "center",
                            maxWidth: "250px",
                            mr: "50px",
                        }}
                        target="_blank" href="https://github.com/CalixH/CSVFileExtractor"
                        > Link to Repository</Button>

                    <Button
                        sx={{ 
                            backgroundColor: "#FFF", 
                            float: "center", 
                            padding: 2, 
                            color: "#009DD9",
                            border: "2px solid #009DD9",  
                            fontFamily: "inter, sans-serif",
                            textTransform: "none",
                            FontWeight: "bold",
                            fontSize: 20,
                            borderRadius: "30px",
                            "&:hover": {
                                backgroundColor: "#009DD9",
                                color: "#FFF",
                                border: 2,
                            },
                            alignSelf: "center",
                            width: "200px"
                        }}
                        target="_blank" href="https://docs.google.com/document/d/1iX7b6ThJKwMQVHG2F4ytVmcvt7suS200epo4-pbMovY/edit"
                        > Instructions</Button>
                </Box>
            </Box>
        </Box>
      </Box>
    </div>
  )
}

export default CSVButton