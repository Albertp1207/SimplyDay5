const validateUser = user => {    
    const types = {
        username: "string",
        gender : "string",
        agree : "boolean",
        password : "string",
    }

    for(key in user) {
        if(typeof user[key] !== types[key]) {
            return false;
        }
    }

    // 1st for input, 2st for api
    if(user.agree !== "on" && user.agree !== true) {
        return false;
    }
    const values = Object.values(user)
    const isUserValid = values.every(elem => {
        if(typeof elem === "boolean"){
            return true;
        } 
        return elem.trim().length > 0
    });
    return isUserValid;
}

module.exports = validateUser;