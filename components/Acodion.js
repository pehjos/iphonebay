import React from 'react';
import { makeStyles } from '@mui/styles';

import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    flexBasis: '33.33%',
    flexShrink: 0,
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(15),
    color: theme.palette.text.secondary,
  },
}));

export default function ControlledAccordions() {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
      <div className="accodion">
    <div className={classes.root}>
      <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <Typography className={classes.heading}>Services</Typography>
          <Typography className={classes.secondaryHeading}>What services do we offer?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          <p>IT consultant</p>
 <p>web App Development</p>
<p>Website Development</p>
<p>QA & Testing</p>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2bh-content"
          id="panel2bh-header"
        >
          <Typography className={classes.heading}>Platform</Typography>
          <Typography className={classes.secondaryHeading}>
           Which device Accept Our Product?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
           <p>Android</p>
           <p>IOS</p>
           <p>Windows</p>
           <p>Hybrid Platform</p>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3bh-content"
          id="panel3bh-header"
        >
          <Typography className={classes.heading}>Technologies</Typography>
          <Typography className={classes.secondaryHeading}>
           What Technologies do we use?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          <p>Internet of Thing</p>
          <p>Cloud computing</p>
          <p>Micro Services</p>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel4bh-content"
          id="panel4bh-header"
        >
          <Typography className={classes.heading}>Company</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
           <p>About</p>
           <p>Team</p>
           <p>Clients</p>
           <p>News</p>
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
    </div>
  );
}
