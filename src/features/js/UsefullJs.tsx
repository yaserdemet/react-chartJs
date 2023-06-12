import {
  Grid,
  Card,
  CardHeader,
  Accordion,
  Typography,
  AccordionSummary,
  AccordionDetails,
} from '@mui/material';
import React, { useEffect } from 'react';
import Prism from 'prismjs';
import 'prismjs/themes/prism-tomorrow.css';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { data, data2, data3, data4 } from './datas';
import { IJs } from './types/js-types';

function UsefullJs() {
  useEffect(() => {
    Prism.highlightAll();
  }, []);
  const config = `
  {
    "compilerOptions": {
    "baseUrl": "./src"
    }
    }
  `;
  return (
    <>
      <Grid container spacing={4}>
        <Grid item xs={12} md={6}>
          <Card>
            <CardHeader
              title="Use ES6 Default Parameters to simply the code"
              subheader="ES5 Old Way"
            />
            <pre className="language-javascript">
              <code>
                {data.map((item: IJs) => (
                  <>{item.value}</>
                ))}
              </code>
            </pre>
          </Card>
        </Grid>
        <Grid item xs={12} md={6}>
          <Card>
            <CardHeader
              title="Assign Default Parametres if firstName not provided"
              subheader="ES6 New Way"
            />
            <pre className="language-javascript">
              <code>
                {data.map((item: IJs) => (
                  <>{item.valueCompare}</>
                ))}
              </code>
            </pre>
          </Card>
        </Grid>
        <Grid item xs={12} md={6}>
          <Card>
            <CardHeader title="Populer remove dublicate item in array" subheader="ES6 New Way" />
            <pre className="line-numbers">
              <code data-prismjs-copy="Copy the JavaScript snippet!" className="language-js">
                {data2.map((item) => (
                  <>{item.label}</>
                ))}
              </code>
            </pre>
          </Card>
        </Grid>
        <Grid item xs={12} md={6}>
          <Card>
            <CardHeader title="How To Get Last Item In Array" subheader="ES6 New Way" />
            <pre className="line-numbers">
              <code data-prismjs-copy="Copy the JavaScript snippet!" className="language-js">
                {data3.map((item) => (
                  <>{item.label}</>
                ))}
              </code>
            </pre>
            <Accordion aria-controls="panel1a-content" id="panel1a-header">
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>Explanations</AccordionSummary>
              <AccordionDetails>
                <Typography variant="button">
                  Remember : You can think just the last items in array like array[-1] but this not
                  works
                </Typography>
              </AccordionDetails>
            </Accordion>
          </Card>
        </Grid>
        <Grid item xs={12} md={6}>
          <Card>
            <CardHeader
              title="Avoid Writing Relative Paths"
              subheader="Just Create jsconfig.json"
            />
            <pre className="line-numbers">
              <code data-prismjs-copy="Copy the JavaScript snippet!" className="language-js">
                {data4.map((item) => (
                  <>{item.label}</>
                ))}
              </code>
            </pre>
            <Accordion aria-controls="panel1a-content" id="panel1a-header">
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>Explanations</AccordionSummary>
              <AccordionDetails>
                <Typography variant="button">
                  Create jsconfig.json file and add this code block
                </Typography>
                  <code  data-prismjs-copy="Copy the JavaScript snippet!" className="language-js">
                    {config}
                  </code>
              </AccordionDetails>
            </Accordion>
          </Card>
        </Grid>
      </Grid>
    </>
  );
}

export default UsefullJs;
