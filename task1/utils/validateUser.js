const validateUser = user => {
    // 1st for input, 2st for api
    if(user.agree !== "on" && user.agree !== true) {
        return false;
    }
    const value = Object.values(user)
    const isUserValid = value.every(elem => elem.trim().length > 0);
    return isUserValid;
}

module.exports = validateUser;