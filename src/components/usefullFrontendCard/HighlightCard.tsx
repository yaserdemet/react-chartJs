import React from 'react';
import {
  CardHeader,
  Grid,
  Card,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
} from '@mui/material';

import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { IHighLight } from './types';

// ----------------------------------------------------------------------

export function HighlightCard({ Title, explanation, Subheader, data }: IHighLight) {
  return (
    <>
      <Grid item xs={12} md={6}>
        <Card>
          <CardHeader subheader={Subheader} title={Title} />
          <pre className="line-numbers">
            <code className="language-js" data-prismjs-copy="Copy the JavaScript snippet!">
              {data?.map((item: any) => (
                <React.Fragment key={item.id}>{item.label}</React.Fragment>
              ))}
            </code>
          </pre>
          <Accordion aria-controls="panel1a-content" id="panel1a-header">
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>Explanations</AccordionSummary>
            <AccordionDetails>
              <Typography variant="button">{explanation}</Typography>
            </AccordionDetails>
          </Accordion>
        </Card>
      </Grid>
    </>
  );
}
