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
import { m, motion } from 'framer-motion';

// ----------------------------------------------------------------------

export function HighlightCard({ Title, explanation, Subheader, data }: IHighLight) {
  return (
    <>
      <Grid item xs={12} md={6}>
        <Card
          sx={{ '&:hover': { cursor: 'pointer' } }}
          whileTap={{ scale: 0.9 }}
          whileHover={{ scale: 1.04 }}
          transition={{ duration: 0.7 }}
          component={m.div}
        >
          <CardHeader subheader={Subheader} title={Title} />
          <pre className="line-numbers">
            <code className="language-js" data-prismjs-copy="Copy the JavaScript snippet!">
              {data?.map((item: any) => (
                <React.Fragment key={item.id}>{item.label}</React.Fragment>
              ))}
            </code>
          </pre>
          {!!explanation && (
            <Accordion aria-controls="panel1a-content" id="panel1a-header">
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>Explanations</AccordionSummary>
              <AccordionDetails>
                <Typography variant="button">{explanation}</Typography>
              </AccordionDetails>
            </Accordion>
          )}
        </Card>
      </Grid>
    </>
  );
}
