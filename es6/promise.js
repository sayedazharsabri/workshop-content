function updateAge(age){

    return new Promise((resolve, reject)=>{

        if(age > 0){
            age = age + 1;
            resolve(age);
        } else{
            reject("Invalid age");
            // throw new Error("Invalid age");
        }
        
    })

}



updateAge(-7)
    .then((updatedAge)=>{
        console.log("Update Age is ", updatedAge);
    })
    .catch((err)=>{
        console.log("err: Age not updated");
    })