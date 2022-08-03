import React, {useState} from 'react';
import TextField from "@mui/material/TextField"
import { Box, Button, Grid, Paper, Skeleton, Select, Switch, FormControlLabel } from "@mui/material";
import './App.css';
import { ClassNames } from '@emotion/react';


export default function App() {
  const [cat, setCat] = useState("");
  const [words, setWords] = useState("");
  const [tags, setTags] = useState("");
  const [fontSize, setFontSize] = useState("");
  const [fontColor, setFontColor] = useState("");
  
  const [gifChecked, setGifChecked] = useState(false);
  const CATAAS_URL = "https://cataas.com/c";

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setGifChecked(event.target.checked);
  }

  return (
    <div>
      <Box 
        sx={{flexWrap: 'wrap'}}
        justifyContent="center" px={15} py={5}>
        <Paper 
          sx={{backgroundColor:"#FCF7DE"}}>
          <Box padding={4}>
            <Grid container justifyContent="center">
              <h1>Cat Delivery Service</h1>
            </Grid>
            <Grid container>
              <Grid item xs={6}>
                <Box py={1}>
                  <TextField 
                    id="cat-says" 
                    className="text" 
                    value={words} 
                    onChange={(prop) => {setWords(prop.target.value)}}
                    label="What does the Cat say?"
                    variant="filled"
                    placeholder="Hello!"
                    size='medium'
                    sx={{width:'25ch'}}
                    />
                </Box>
                <Box py={1}>
                  <TextField 
                    id="cat-color" 
                    className="text" 
                    value={fontColor} 
                    onChange={(prop) => {setFontColor(prop.target.value)}}
                    label="Colour of the text"
                    variant="filled"
                    placeholder="Maroon"
                    size='medium'
                    sx={{width:'25ch'}}
                    />
                  </Box>
                <Box py={1}>
                  <TextField 
                    id="cat-size" 
                    className="text" 
                    value={fontSize} 
                    onChange={(prop) => {setFontSize(prop.target.value)}}
                    label="Size of the text (in pixels)"
                    variant="filled"
                    placeholder="200"
                    size='medium'
                    sx={{width:'25ch'}}
                    />
                </Box>
                <Box py={1}>
                  <TextField 
                    id="cat-tags" 
                    className="text" 
                    value={tags} 
                    onChange={(prop) => {setTags(prop.target.value)}}
                    label="Optional: Tags"
                    variant="filled"
                    placeholder="Cute"
                    size='small'
                    sx={{width:'25ch'}}
                    />
                </Box>
                <Box p={2} justifyContent="center">
                  <FormControlLabel 
                    control = {<Switch 
                    checked={gifChecked}
                    onChange={handleChange}
                    inputProps={{'aria-label': "controlled"}}/>}
                    label = "Turn Cat into a gif"/>
                </Box>  
              </Grid>
              <Grid item xs={6}>
                <Box padding={4} display="flex" justifyContent="flex-end">
                  <img src={cat} />
                </Box>
              </Grid>
            </Grid>
            <Grid container justifyContent="center">
              <Button variant="contained" onClick={getCat}>GIMME CAT</Button>
            </Grid>
          </Box>
        </Paper>
      </Box>
    </div>
  );

  function getCat(){
    if (words.trim().length !== 0 && fontSize.trim().length !== 0 && fontColor.trim().length !== 0){
      if (gifChecked){
        setCat(CATAAS_URL+`/gif/s/${words}?size=${fontSize}&color=${fontColor}&_${new Date().getTime()}`);
      }
      else{
        setCat(CATAAS_URL+`/${tags}/s/${words}?size=${fontSize}&color=${fontColor}&_${new Date().getTime()}`);
      }
    }
    else{
      alert("One of the fields is blank");
    }
  }
}
