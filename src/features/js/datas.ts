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
export const data2 = [{id : 2, label : `1. Using Set
const array = [1,1,2,2,4,3,5,5,6,7,7]
const uniqueOnes = [...new Set(array)]
console.log(uniqueOnes) // [1,2,3,4,5]


2 : Using Filter Method
const unique = array.filter((item,index) => {
    return array.indexOf(item) === index;
})
console.log(uniqueOnes) // [1,2,3,4,5]
`}]

export const data3 = [{id : 3, label : `const array = [10,20,30,40,50] 
const lastItem = array.slice(-1) // 50
const lastItems = array.slice(-2) // 40,50
` }]
