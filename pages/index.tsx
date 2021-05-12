import React from 'react';
import {MainLogo} from "../src/ui/main-logo/MainLogo";
import {Box, Checkbox, FormControlLabel, Radio, RadioGroup} from "@material-ui/core";
import {RoundedLogo} from "../src/ui/rounded-logo/RoundedLogo";

export default function Main() {
  const [larger, setLarger] = React.useState(false);
  const [image, setImage] = React.useState<string>();
  return (
    <>
      <div style={{background: '#fff', padding: 10}}>
        <FormControlLabel checked={larger}
                          control={<Checkbox/>}
                          label="Larger"
                          onChange={(e, checked) => setLarger(checked)}/>
        <RadioGroup name="image" value={image} onChange={(e) => setImage(e.target.value === 'none' ? undefined : e.target.value as any)}>
          <FormControlLabel value="none" control={<Radio />} label="None" />
          <FormControlLabel value="first-wheel" control={<Radio />} label="1st" />
          <FormControlLabel value="second-wheel" control={<Radio />} label="2nd" />
        </RadioGroup>
      </div>
      <Box display="flex" flexDirection="row">
        <MainLogo larger={larger} img={image}/>
        <MainLogo larger={larger} img={image} contrast/>
      </Box>
      <Box display="flex" flexDirection="row">
        <RoundedLogo larger={larger} img={image}/>
        <RoundedLogo larger={larger} img={image} contrast/>
      </Box>
    </>
  )
}
