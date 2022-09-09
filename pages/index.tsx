import React, {useState} from 'react';
import TextField from "@mui/material/TextField"
import { Box, Button, Grid, Paper, Switch, FormControlLabel } from "@mui/material";
import {useTheme} from "@mui/material/styles"
import useMediaQuery from '@mui/material/useMediaQuery';
import { ComponentStory, ComponentMeta } from '@storybook/react';

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

  
  const theme = useTheme();
  const onSmallScreens = useMediaQuery(theme.breakpoints.down("md"));
  
  return (
    <div>
      <Box 
        sx={{flexWrap: 'wrap'}}
        justifyContent="center" px={5} py={5}
        alignItems={onSmallScreens ? "flex-start" : "center"}
        style={{minWidth:'250px'}}>
        <Paper 
          sx={{backgroundColor:"#FCF7DE"}}>
          <Box padding={4}>
            <Grid container justifyContent="center">
              <h1>Cat Delivery Service</h1>
            </Grid>
            <Grid container alignItems="center" justifyContent="center" >
              <Grid container justifyItems={"center"} direction="column" md = {4} xs={12}>
                <Box py={1} alignSelf={onSmallScreens ? "center" : "flex-start"}>
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
                <Box py={1} alignSelf={onSmallScreens ? "center" : "flex-start"}>
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
                <Box py={1} alignSelf={onSmallScreens ? "center" : "flex-start"}>
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
                <Box py={1} alignSelf={onSmallScreens ? "center" : "flex-start"}>
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
                <Box py={2} alignSelf={onSmallScreens ? "center" : "flex-start"}>
                  <FormControlLabel 
                    control = {<Switch 
                    checked={gifChecked}
                    onChange={handleChange}
                    inputProps={{'aria-label': "controlled"}}/>}
                    label = "Turn Cat into a gif"
                    labelPlacement = "end"/>
                </Box>  
              </Grid>
              <Grid item md = {8} xs={12}>
                <Box px={4} display="center" justifyContent="center" justifySelf="center">
                  <img src={cat} alt="" style={{width: '100%', height: 'auto'}}/>
                </Box>
              </Grid>
            </Grid>
            <Grid container justifyContent="center" p = {2}>
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
