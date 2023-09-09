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
let queryUrl = /api/tickets/get-other-tickets
?currentTicketId=${ticketId}&Page=${page}&PageSize=${rowsPerPage};
Use this new UrlSearchParams => 
let searchParams = new URLSearchParams({
"currentTicketId": String(ticketId),
"Page": String(page),
"PageSize": String(rowsPerPage)
    });
    
    
  `,
  },
];

export const data9 = [
  {
    id: 9,
    label: `
Use splice instead of using delete
to delete an item from an array.
Using delete replaces the item with
undefined instead of removing it from the array
const heros = ["Axe", "Venom", "Viper", "Apparat"]
console.log(heros.lenght) => 4
delete names[2]
["Axe", "Venom", empty, "Apparat"] 
because 2nd elemet will be empty now. So use splice method;
heros.splice(2,1) this  will return ["Axe", "Venom", "Apparat"]
  `,
  },
];

export const data10 = [
  {
    id: 10,
    label: `
    let obj = {
      name : "Mozz",
      age : 30
    }
    Object.freeze(obj);
    obj.age = 25
    console.log(obj) =>  {
      name : "Mozz",
      age : 30
    }

    let obj2 = {
      name : "Mozz",
      age : 30
    }

    Object.seal(obj2);
    obj2.age = 25;
    console.log(obj2) => {
      name : "Mozz",
      age : 25
    }

    With 𝐎𝐛𝐣𝐞𝐜𝐭.𝐟𝐫𝐞𝐞𝐳𝐞(): 
1-We cannot add a new property in an object. ❌
2-We cannot delete existing properties. ❌
3-We cannot update the value of existing properties. ❌

With 𝐎𝐛𝐣𝐞𝐜𝐭.𝐬𝐞𝐚𝐥(): 
1-We cannot add a new property in an object. ❌
2-We cannot delete existing properties. ❌
3-We can update the value of existing properties. ✅
  `,
  },
];

export const data11 = [
  {
    id: 11,
    label: `
let myMap = new Map();
You can set values using the set method:
myMap.set('key', 'value');
myMap.set(1, 'numberOne');

You can get values using the get method:
console.log(myMap.get('key')); // Outputs: value
console.log(myMap.get(1));     // Outputs: numberOne

You can check if a key exists using the has method:
console.log(myMap.has('key')); // Outputs: true

Delete a key in Map
myMap.delete('key');

You can retrieve the number of key/value pairs in the Map using the size property:
console.log(myMap.size); // Outputs: number of elements in the map

To remove all key/value pairs:
myMap.clear();

  `,
  },
];
const latitude = "";
const longitude = "";

export const data12 = [
  {
    id: 12,
    label: `
useEffect(() => {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition((position: any) => {
      console.log(position);
      const { latitude, longitude } = position.coords;
      console.log(latitude, longitude);
      const getUsersCity = async () => {
        const data = await axiosInstance.get(
          https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}
          );
          console.log(data);
          getUsersCity();
        };
      });
  } else {
    alert('Your browser does not support geolocationApi');
    }
  }, []);
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
