export const data = [
  {
    id: 1,
    label: `useEffect(() => {
  Effect Logic Here
// Normally when send object to dependencies 
// it happens infinite loop to solve this
// stringfy object
},[JSON.stringfy(object)]);
    `,
  },
];

export const data2 = [
  {
    id: 2,
    label: `const form = new FormData();
form.append('Subject', createTicket.subject);
form.append('RequesterInfo.FirstName', createTicket.firstName);
form.append('AgentId', String(createTicket.agentId));
form.append('PriorityId', String(createTicket.priorityId));
try {
const response = await axiosInstance.post("/api/ticket", form);
if (response.statusText === 'Created') {
console.log("response")
}
} catch (error) {
console.log(error);
}
`,
  },
];

export const data3 = [
  {
    id: 3,
    label: `

In such cases, If you're using different components in a particular file, 
your file will contain a lot of import statements like this:
    
𝘪𝘮𝘱𝘰𝘳𝘵 𝘊𝘰𝘯𝘧𝘪𝘳𝘮𝘔𝘰𝘥𝘢𝘭 𝘧𝘳𝘰𝘮 './𝘤𝘰𝘮𝘱𝘰𝘯𝘦𝘯𝘵𝘴/𝘊𝘰𝘯𝘧𝘪𝘳𝘮𝘔𝘰𝘥𝘢𝘭/𝘊𝘰𝘯𝘧𝘪𝘳𝘮𝘔𝘰𝘥𝘢𝘭';
𝘪𝘮𝘱𝘰𝘳𝘵 𝘋𝘢𝘵𝘦𝘗𝘪𝘤𝘬𝘦𝘳 𝘧𝘳𝘰𝘮 './𝘤𝘰𝘮𝘱𝘰𝘯𝘦𝘯𝘵𝘴/𝘋𝘢𝘵𝘦𝘗𝘪𝘤𝘬𝘦𝘳/𝘋𝘢𝘵𝘦𝘗𝘪𝘤𝘬𝘦𝘳';
𝘪𝘮𝘱𝘰𝘳𝘵 𝘛𝘰𝘰𝘭𝘵𝘪𝘱 𝘧𝘳𝘰𝘮 './𝘤𝘰𝘮𝘱𝘰𝘯𝘦𝘯𝘵𝘴/𝘛𝘰𝘰𝘭𝘵𝘪𝘱/𝘛𝘰𝘰𝘭𝘵𝘪𝘱';
𝘪𝘮𝘱𝘰𝘳𝘵 𝘉𝘶𝘵𝘵𝘰𝘯 𝘧𝘳𝘰𝘮 './𝘤𝘰𝘮𝘱𝘰𝘯𝘦𝘯𝘵𝘴/𝘉𝘶𝘵𝘵𝘰𝘯/𝘉𝘶𝘵𝘵𝘰𝘯';
𝘪𝘮𝘱𝘰𝘳𝘵 𝘈𝘷𝘢𝘵𝘢𝘳 𝘧𝘳𝘰𝘮 './𝘤𝘰𝘮𝘱𝘰𝘯𝘦𝘯𝘵𝘴/𝘈𝘷𝘢𝘵𝘢𝘳/𝘈𝘷𝘢𝘵𝘢𝘳';

which does not look good because as the number of components increases,
 the amount of imports statements will also increase.
    
So, you can create an index.js file in the parent folder(components) 
folder and export all the components as a named export from that file like this:

𝘦𝘹𝘱𝘰𝘳𝘵 { 𝘥𝘦𝘧𝘢𝘶𝘭𝘵 𝘢𝘴 𝘊𝘰𝘯𝘧𝘪𝘳𝘮𝘔𝘰𝘥𝘢𝘭 } 𝘧𝘳𝘰𝘮 './𝘊𝘰𝘯𝘧𝘪𝘳𝘮𝘔𝘰𝘥𝘢𝘭/𝘊𝘰𝘯𝘧𝘪𝘳𝘮𝘔𝘰𝘥𝘢𝘭';
𝘦𝘹𝘱𝘰𝘳𝘵 { 𝘥𝘦𝘧𝘢𝘶𝘭𝘵 𝘢𝘴 𝘋𝘢𝘵𝘦𝘗𝘪𝘤𝘬𝘦𝘳 } 𝘧𝘳𝘰𝘮 './𝘋𝘢𝘵𝘦𝘗𝘪𝘤𝘬𝘦𝘳/𝘋𝘢𝘵𝘦𝘗𝘪𝘤𝘬𝘦𝘳';
𝘦𝘹𝘱𝘰𝘳𝘵 { 𝘥𝘦𝘧𝘢𝘶𝘭𝘵 𝘢𝘴 𝘛𝘰𝘰𝘭𝘵𝘪𝘱 } 𝘧𝘳𝘰𝘮 './𝘛𝘰𝘰𝘭𝘵𝘪𝘱/𝘛𝘰𝘰𝘭𝘵𝘪𝘱';
𝘦𝘹𝘱𝘰𝘳𝘵 { 𝘥𝘦𝘧𝘢𝘶𝘭𝘵 𝘢𝘴 𝘉𝘶𝘵𝘵𝘰𝘯 } 𝘧𝘳𝘰𝘮 './𝘉𝘶𝘵𝘵𝘰𝘯/𝘉𝘶𝘵𝘵𝘰𝘯';
𝘦𝘹𝘱𝘰𝘳𝘵 { 𝘥𝘦𝘧𝘢𝘶𝘭𝘵 𝘢𝘴 𝘈𝘷𝘢𝘵𝘢𝘳 } 𝘧𝘳𝘰𝘮 './𝘈𝘷𝘢𝘵𝘢𝘳/𝘈𝘷𝘢𝘵𝘢𝘳';
    
This needs to be done only once.
Now, If in any of the files you want to access any component,
you can easily import it using named import in a single line like this:
𝘪𝘮𝘱𝘰𝘳𝘵 { 𝘊𝘰𝘯𝘧𝘪𝘳𝘮𝘔𝘰𝘥𝘢𝘭, 𝘋𝘢𝘵𝘦𝘗𝘪𝘤𝘬𝘦𝘳, 𝘛𝘰𝘰𝘭𝘵𝘪𝘱, 𝘉𝘶𝘵𝘵𝘰𝘯, 𝘈𝘷𝘢𝘵𝘢𝘳 } 𝘧𝘳𝘰𝘮 './𝘤𝘰𝘮𝘱𝘰𝘯𝘦𝘯𝘵𝘴';
This is common practice when working on large industry/company projects
`,
  },
];

export const data4 = [
  {
    id: 4,
    label: `
When we use JSX Expression like this:
{ users.length && <User /> }

If users.length is zero then we will end up displaying 0
on the screen because the logical && operator
(also known as short circuit operator) instantly
 returns that value
if it evaluates to a falsy value.

So the above code will be equivalent to the below code
 if users.length is zero.
{ 0 && <User /> 
which evaluates to

{ 0 }

So to fix this, you can use either of the following
 ways to correctly write the JSX

1. { users.length > 0 && <User /> }

2. { !!users.length && <User /> }
    
3. { Boolean(users.length) && <User /> }

4. { users.length ? <User /> : null }

The !! operator converts any value into its boolean true or false.
So the 2nd and 3rd conditions above are equivalent.

The ternary operator in the fourth case above will
check for truthy or falsy
value of the left side of ? and as 0 is falsy so
null will be displayed.
`,
  },
];

export const data5 = [
  {
    id: 3,
    label: `
    Suppose you have 3 components
     ( TextInput / Component1 / Component2 )

    function App() {
     return (
    <>
      <TextInput />
      <Component1 />
      <Component2 />
    </>
    )}
    function TextInput () {
    const [textValue, setTextValue] = useState("")
    return (
    <input 
    type='text' 
    value={textValue} 
    onChange={e => setTextValue(e.target.value)}
    />
    )}
    
    And you need to have the textValue inside
   ( Component1 & Component2 )
   
    What's the first solution that came to your mind?

`,
  },
];
