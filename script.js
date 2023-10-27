// task 1=> How to compare 2 two JSON have the same properties without order?
// a. let obj1 = {name:"Person 1",age:5}
// b. let obj2 = {age:5,name:"Person 1"}

let obj1 = {name:"Person 1",age:5}
let obj2 = {age:5,name:"Person 1"}
let a = JSON.stringify(obj1);
let b = JSON.stringify(obj2);
let c=JSON.parse(a);
let d=JSON.parse(b);
if(JSON.stringify(c)===JSON.stringify(d))
{
    console.log("two JSON have the same properties without order")
}
else
{
    console.log("two JSON don't have the same properties without order")
}

//task 2=> Display all country flags in console

let req=new XMLHttpRequest();
req.open("GET","https://restcountries.com/v3.1/all",true);
req.send();
req.onload=function(){
    let data=req.response
    let result=JSON.parse(data)
    for(let i=0;i<result.length; i++)
    {
        console.log(result[i].flags.png);
        console.log(result[i].flags.svg)

    }
}

//task 3=> Display all coutries name, region, subregion and population


let req1=new XMLHttpRequest();
req1.open("GET","https://restcountries.com/v3.1/all",true);
req1.send();
req1.onload=function(){
    let data1=req1.response
    let result1=JSON.parse(data1)
    for(let i=0;i<result1.length; i++)
    {
        console.log(result1[i].name.common,result1[i].region,result1[i].subregion,result1[i].population)
    }
}








































