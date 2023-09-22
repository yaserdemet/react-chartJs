import { Button, Grid, Box } from '@mui/material';
import { HighlightCard } from 'src/components/usefullFrontendCard/HighlightCard';
import React, { useRef, useEffect, useState } from 'react';
import Prism from 'prismjs';
import 'prismjs/themes/prism-tomorrow.css';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { data, data10, data11, data2, data3, data4, data5, data6, data7, data8, data9 } from './data';

function UsefullReact() {
  useEffect(() => {
    Prism.highlightAll();

    return () => {
      // Clean up the highlighting when the component unmounts
      Prism.highlightAllUnder(document, false);
    };
  }, []);

  // const [isInView, setIsInView] = useState(false);
  // const myRef = useRef<any>(null);
  // useEffect(() => {
  //   const observer = new IntersectionObserver((entries) => {
  //     const entry = entries[0];
  //     setIsInView(entry.isIntersecting);
  //   });
  //   observer.observe(myRef.current);
  // }, []);
  // const appliedStyle = isInView ? fadeInStyle : initialStyle;

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
        <HighlightCard
          data={data5}
          Title="Dont hold state top component to share other components"
          Subheader="Render Props Design Model"
          explanation="Dont hold state the parentest component then send others. Call first component. Then render inside other component send value to other components then use inside that component."
        />

        <HighlightCard
          data={data6}
          Title="Why do we need a callback in setState?"
          Subheader="To ensure state update correctly use callback inside setState"
          explanation="In the case of the function argument, it can be useful to use a callback function with setState to ensure that the state update is performed correctly. This is because setState may update the state asynchronously, and if you need to perform some action that depends on the state being updated immediately after calling setState, you cannot rely on the state to have been updated yet.."
        />
        <HighlightCard
          data={data7}
          Title="React Batch Update"
          Subheader="State update and use its current value in another function"
          explanation="In React, setState is asynchronous, which means when you call setState, it does not immediately update the state. Instead, React batches these updates to optimize performance, and the new state value is not immediately accessible right after a setState call."
        />

        <HighlightCard
          data={data8}
          Title="Update all inputs with one function"
          Subheader="Dont create function to all input just send"
          explanation="In React, setState is asynchronous, which means when you call setState, it does not immediately update the state. Instead, React batches these updates to optimize performance, and the new state value is not immediately accessible right after a setState call."
        />

        <HighlightCard
          data={data9}
          Title="Auto Scrool With useRef Hook"
          Subheader=""
          explanation="When added new item in your list, even if scroll below of page to show the item which added last one go top of page with smooth scroll by using useRef hook "
        />
        {/* <Box  style={appliedStyle} ref={myRef}> */}

        <HighlightCard
          data={data10}
          Title="Intersection Observer Api"
          Subheader=""
          explanation="To trigger some event or animation just in user's in view user Intersection Observer Api. This take callback fucntion. And can caught in view or not."
        />

        <HighlightCard
          data={data11}
          Title="React Reouter Dom"
          Subheader="How to Use React Router Dom"
          explanation="When can access browser's history by covering all our app with <BrowserRouter>. Then define all path <Routes> <Route to='/about' element={</About /> }"
        />
        {/* </Box> */}
      </Grid>
    </>
  );
}

export default UsefullReact;

const initialStyle = {
  dispay: 'inline',
  backgroundColor: 'inherit',
  color: 'white',
  padding: 12,
  opacity: 0,
  transform: 'translateX(-250px)', // This will start the content 50px above its initial position
  transition: 'opacity 1s, transform 1s',
};

const fadeInStyle = {
  ...initialStyle,
  opacity: 1,
  transform: 'translateX(0)',
};
