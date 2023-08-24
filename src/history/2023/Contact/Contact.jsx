import React, { useState } from "react";
import { Button, TextField, Typography, MenuItem, Select, InputLabel,FormControl } from "@mui/material";
import colors from "../helpers/colors";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { countries } from "../helpers/countries";
export default function Contact({ data, backgroundColorPrimary, textColor, fontColor }) {
    const theming = createTheme({
        palette: {
            primary: {
                main: textColor
            }
        },
    });
    const [selectedCountry, setSelectedCountry] = useState('')
    const handleChange = (event) => {
        console.log(event.target.value);
        setSelectedCountry(event.target.value);
    };

    return (
        <div style={{ width: '100vw', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', backgroundColor: backgroundColorPrimary, padding: ' 10vh 10vw', }}>
            {/* {countries.map((e, i) => <div key={i}><p>{e.name}</p><img src={e.flag} alt={e.name} /></div>)} */}
            <ThemeProvider theme={theming}>
                <div style={{ maxWidth:'700px'}}>
                    <Typography variant="h6" display="block" gutterBottom sx={{ color: theming.palette.primary.main, marginBottom: '5vh' }} >
                        {data.contact.title}
                    </Typography>
                    <TextField 
                        id="outlined-multiline-flexible"
                        label={data.contact.label[0]}
                        sx={{ mt: 2, color: fontColor }}
                        variant="outlined" fullWidth
                        required
                    />
                    <TextField
                        id="outlined-multiline-flexible"
                        label={data.contact.label[1]}
                        sx={{ mt: 2, color: fontColor }}
                        variant="outlined" fullWidth
                        required
                    />
                    <FormControl fullWidth
                            sx={{ mt: 2, color: fontColor }}
                            variant="outlined">
                        <InputLabel id="demo-controlled-open-select">{data.contact.label[2]}</InputLabel>
                        <Select
                            labelId="demo-controlled-open-select"
                            id="demo-controlled"
                            value={selectedCountry}
                            onChange={handleChange}
                            label={data.contact.label[2]}
                        >
                            <MenuItem value="">
                                <em>None</em>
                            </MenuItem> 
                            {countries.map((e, i) => <MenuItem key={i} value={e.name} style={{display:'flex',flexDirection:'row',alignItems:'center'}}>
                                <img src={e.flag} alt={e.name} style={{width:'auto',height:'10px',marginRight:'5px' }}/><span>{e.name}</span></MenuItem>)}
                        </Select>
                    </FormControl>
                    <TextField
                        id="outlined-multiline-flexible"
                        label={data.contact.label[3]}
                        multiline
                        rows={4} sx={{ mt: 2, color: fontColor }}
                        variant="outlined" fullWidth
                        required
                    />
                    <Button sx={{ my: 3, width: '100%' }} variant="contained">{data.contact.button}</Button>
                </div>
            </ThemeProvider>
        </div>
    )
}