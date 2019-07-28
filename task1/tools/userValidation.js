const userValidation = user => {
    if(user.agree !== "on" && user.agree !== true) {
        return false;
    }
    const value = Object.values(user)
    const isUserValid = value.every(elem => elem !== "" && elem !== " ");
    return isUserValid;
}

module.exports = userValidation;