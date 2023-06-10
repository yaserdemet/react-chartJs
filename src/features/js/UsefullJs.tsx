import { Grid, Card, Typography, CardHeader } from '@mui/material';
import React, { useEffect } from 'react';
import Prism from 'prismjs';
import 'prismjs/themes/prism-tomorrow.css';
import { data } from './datas';
import { IJs } from './types/js-types';

function UsefullJs() {
  useEffect(() => {
    Prism.highlightAll();
  }, []);

  return (
    <>
      <Grid container>
        <Grid item xs={12} md={6}>
          <Card>
            <CardHeader
              title="Use ES6 Default Parameters to simply the code"
              subheader="ES5 Old Way"
            />

            <pre className="language-javascript">
              <code>
                {data.map((item : IJs) => (
                  <>{item.value}</>
                ))}
              </code>
            </pre>
          </Card>
          <Card>
            <CardHeader
              title="Use ES6 Default Parameters to simply the code"
              subheader="ES5 Old Way"
            />

            <pre className="language-javascript">
              <code>
                {data.map((item : IJs) => (
                  <>{item.valueCompare}</>
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
