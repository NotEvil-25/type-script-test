/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable arrow-body-style */
import React, { FC, useEffect } from 'react';
import FormControl from '@mui/material/FormControl';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import FilterItem from './FilterItem';
import Ibrands from '../../models/Ibrands';

interface Iprops {
  items: Ibrands[]
}

const Filter: FC<Iprops> = ({ items }) => {
  return (
    <Accordion sx={{ textAlign: 'left' }} variant="outlined">
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1a-content"
        id="panel1a-header"
      >
        <Typography>Brands filter</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <FormControl component="fieldset" variant="standard">
          {items.map((el) => (
            <FilterItem key={el.id} data={el} />
          ))}
        </FormControl>
      </AccordionDetails>
    </Accordion>
  );
};

export default Filter;
