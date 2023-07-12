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

// export const env = `GENERATE_SOURCEMAP=false`;
