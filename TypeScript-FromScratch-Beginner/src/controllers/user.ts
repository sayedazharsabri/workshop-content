import {Request, Response} from 'express';

import {addUserToDB, updateUserData} from '../models/user';


const regsiterUser = (req: Request, res: Response) =>{

    // fetch data from req
    // validation
    // normalize

    const userName: string = "Azhar";
    const password: string = "Password";
    const age = 31;

    const result = addUserToDB(userName, password, age);

    res.send(result);
    // task and code
}


const checkTypesAndInterface = (req: Request, res: Response) =>{


    interface Point{
        readonly x:number,
        readonly y:number
    }

    let num:Point = {x:1, y:4};
    // num.x = 4;// Cannot assign to 'x' because it is a read-only property.


    // Union and self define types
    // type status = true | false;
    type lockedState = "locked" | "unlocked"; // union type self created type
    let xState: lockedState = "locked";






    const myUser = {
        id:1,
        uname:"Azhar",
        password:"string" ,
        age:31,
        is_active: false,
        accountStatus:""
    }

    const result = updateUserData(myUser);
    res.send(result);
}



interface Student{
    name:String,
    age: Number
}

interface Student{
    level:String
}

const mergeInterface = (req: Request, res: Response) =>{

    const akarsh:Student  = {name:"Akarsh", age:24, level:"BTech"};
}


class Employee{
    ename:String;
    salary:Number;
    constructor(name:String, salary:Number){
        this.ename = name;
        this.salary = salary;
    }
}

class EmployeeWithAge extends Employee {
    age:Number = 0;
}

const relatedToClass = (req: Request, res: Response) => {
    const Ramesh = new EmployeeWithAge("Ramesh", 200000);
    Ramesh.salary = 300000;
    Ramesh.age = 32;
}

export {regsiterUser, checkTypesAndInterface}