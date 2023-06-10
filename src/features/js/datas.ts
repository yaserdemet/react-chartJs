import { IJs } from "./types/js-types";

export const data : IJs[] = [
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
