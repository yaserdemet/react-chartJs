import { IJs } from './types/js-types';

export const data: IJs[] = [
  {
    id: 1,
    value: `const showMessage = (firstName) => {
    if (firstName) {
        return "Welcome back, + firstName "
    }
    else{
        return "Welcome back, Guest"
    }  
}
console.log(showMessage()) // Welcome back, Guest
console.log(showMessage("Mozz")) // Welcome back, Mozz
`,
    valueCompare: `const showMessage = (firstName = "Guest") => {
    if (firstName) {
        return Welcomeback, {firstName} 
    }
    console.log((showMessage())) // Welcome back, Guest
    console.log(showMessage("Mozz")) // Welcome back, Mozz
}`,
  },
];
export const data2 = [
  {
    id: 2,
    label: `1. Using Set
const array = [1,1,2,2,4,3,5,5,6,7,7]
const uniqueOnes = [...new Set(array)]
console.log(uniqueOnes) // [1,2,3,4,5]


2 : Using Filter Method
const unique = array.filter((item,index) => {
    return array.indexOf(item) === index;
})
console.log(uniqueOnes) // [1,2,3,4,5]
`,
  },
];

export const data3 = [
  {
    id: 3,
    label: `const array = [10,20,30,40,50] 
const lastItem = array.slice(-1) // 50
const lastItems = array.slice(-2) // 40,50
`,
  },
];

export const data4 = [
  {
    id: 4,
    label: `import Sidebar from "../../../components/sidebar/Sidebar";
import Navbar from "../../../components/navbar/Navbar"; 
// To import like this
import Sidebar from "components/sidebar/Sidebar";
import Navbar from "components/navbar/Navbar";
`,
  },
];

export const data5 = [
  {
    id: 5,
    label: `in your .env file hold your apiKey like => 
    REACT_APP_HOST_API_KEY=http://95.173.187.60:5001 
    and use your api key in file like 
    process.env.REACT_APP_HOST_API_KEY`,
  },
];

export const data6 = [
  {
    id: 6,
    label: `
  // Longhand
  if(value === 1 || value === "one" || value === 2 
  || value === "two"){
    // Execute some code
  }

  // Shorthand
  if([1, "one", 2, "two"].includes(value)){
    // Execute some code
  }
  `,
  },
];

export const data7 = [
  {
    id: 7,
    label: `const epochTime = 1623931182000;
const date = new Date(epochTime); 
// Thu Jun 17 2021 14:59:42 GMT+0300 (GMT+03:00)
const formattedDate = date.toLocaleString(); 
// 17.06.2021 14:59:42

// And also we can convert date according to countries
const formatDateToCountry = (date, language = "tr-TR")=>{
  return new Date(date).toLocaleString(language, {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric',
  });
};
// formatDateToCountry(1623931182000) // 17 Haziran 2021
  `,
  },
];

const ticketId = 1;
const page = 1;
const rowsPerPage = 10;
export const data8 = [
  {
    id: 8,
    label: `
    To create url like this =>
    let queryUrl = /api/tickets/get-other-tickets-of-requester?currentTicketId=${ticketId}&Page=${page}&PageSize=${rowsPerPage};
    Use this new UrlSearchParams => 
    let searchParams = new URLSearchParams({
      "currentTicketId": String(ticketId),
      "Page": String(page),
      "PageSize": String(rowsPerPage)
    });
    
    
  `,
  },
];

export const config = `
{
  "compilerOptions": {
  "baseUrl": "./src"
  }
  }
`;
export const env = `GENERATE_SOURCEMAP=false`;
