import { CardHeader, Grid, Card, Accordion, AccordionSummary, AccordionDetails, Typography} from '@mui/material';
import React from 'react';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const HighlightCard = ({ Title, explanation, Subheader,data }: any) => {
  return (
    <>
      <Grid item xs={12} md={6}>
        <Card>
          <CardHeader subheader={Subheader} title={Title}>
                <pre className='line-numbers'>
                    <code className='language-js' data-prismjs-copy="Copy the JavaScript snippet!">
                        {
                            data.map((item:any) => {
                                return (
                                    <>
                                        {item.label}
                                    </>
                                )
                            })
                        }
                    </code>
                </pre>
                <Accordion aria-controls="panel1a-content" id="panel1a-header">
                        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                            Explanations
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography variant='button'>
                                    {explanation}
                            </Typography>
                        </AccordionDetails>
                </Accordion>
          </CardHeader>
        </Card>
      </Grid>
    </>
  );
};

export default HighlightCard;
