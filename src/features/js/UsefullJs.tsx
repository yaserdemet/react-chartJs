import { Grid, Card,  CardHeader } from '@mui/material';
import React, { useEffect } from 'react';
import Prism from 'prismjs';
import 'prismjs/themes/prism-tomorrow.css';
import { data, data2, data3 } from './datas';
import { IJs } from './types/js-types';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

function UsefullJs() {
  useEffect(() => {
    Prism.highlightAll();
  }, []);

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
          </Card>
        </Grid>
      </Grid>
    </>
  );
}

export default UsefullJs;
