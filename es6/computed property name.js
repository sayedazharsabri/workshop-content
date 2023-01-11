let key = "new_key"

function ret(){
    return "Somemorevalues";
}

let obj = {
    sname: "azhar",
    [key + 2 +  ret()] : "Yes"
}


console.log(obj);