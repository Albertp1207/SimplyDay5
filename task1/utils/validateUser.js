const validateUser = user => {
    // 1st for input, 2st for api
    if(user.agree !== "on" && user.agree !== true) {
        return false;
    }
    const value = Object.values(user)
    const isUserValid = value.every(elem => {
        if(typeof elem === "boolean"){
            return true;
        } 
        return elem.trim().length > 0
    });
    return isUserValid;
}

module.exports = validateUser;