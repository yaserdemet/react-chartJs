import { Grid } from '@mui/material';
import { HighlightCard } from 'src/components/usefullFrontendCard/HighlightCard';
import React, { useEffect } from 'react';
import Prism from 'prismjs';
import 'prismjs/themes/prism-tomorrow.css';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { data, data2, data3, data4 } from './data';

function UsefullReact() {
  useEffect(() => {
    Prism.highlightAll();

    return () => {
      // Clean up the highlighting when the component unmounts
      Prism.highlightAllUnder(document, false);
    };
  }, []);

  return (
    <>
      <Grid container spacing={4}>
        <HighlightCard
          data={data}
          Title="Object for Dependencies Array"
          Subheader="Normally when send array or object to dependencies array to useEffect, it cause infinite loop"
          explanation="Passing Object as a dependency to useEffect dependency array...
          The best approach to pass contents of an object used within the effect hook to dependency array is to pass the individual keys of the object as dependencies. This way the useEffect re renders when any of these values is updated.       
          But there are some case where the warning would keep coming until the object as a whole is passes in the dependency array.         
          Passing objects as dependencies in useEffect() would only hide linter warnings but would create a bigger problem than the previous warnings to add it as dependency. This might cause unnecessary re render that might eventually crash the app due to memory issues because the object position in memory would keep changing each time the component is mounted and updated causing the useEffect to see it as an update in the object even if the content of the object is not changing.
          One way to go around this issue is to stringify the object, and allowing its contents act as strings in the useEffect dependency array, in this case the useEffect would re render only if any of the object properties change. This is more stable than passing an object as dependencies.
          However, this method is not a silver bullet to solving useEffect dependencies issue with object as it would not work for deeply nested objects.
          To solve issues with deeply nested object, you can write your own object comparison logic or use the lodash library."
        />
        <HighlightCard
          data={data2}
          Title="Send Data with Form Data"
          Subheader="Generally we send data to backend as JSON format but sometimes need to send with form data. Lets take a look how send data with form data."
          explanation="First create new form data. Then append to that form data. As string Key and string value."
        />
        <HighlightCard
          data={data3}
          Title="create an index.js file in the parent folder(components) folder and export all the components as a named export from that file like this:"
          Subheader="When you're working on a large React project, you might have multiple folders containing different components."
          explanation="First create new form data. Then append to that form data. As string Key and string value."
        />
        <HighlightCard
          data={data4}
          Title="Shot Circuit React Component"
          Subheader="Conditional Rendering with short circuit"
        />
      </Grid>
    </>
  );
}

export default UsefullReact;
