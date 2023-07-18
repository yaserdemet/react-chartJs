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
