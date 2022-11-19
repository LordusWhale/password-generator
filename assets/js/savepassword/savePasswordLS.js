

export const savePassword = () => {
    const password = document.getElementById('password');
    const passwordValue = password.value;
    if (passwordValue === "") return;
    const prevPasswords = JSON.parse(localStorage.getItem('password'));
    if (prevPasswords.length > 9) return;
    if (prevPasswords){
       prevPasswords.push(passwordValue);
        localStorage.setItem("password", JSON.stringify(prevPasswords))
    } else {
        const passwords = [passwordValue];
        localStorage.setItem("password", JSON.stringify(passwords));
    }
}


export const getPasswords = () => {
    const savedPasswords = JSON.parse(localStorage.getItem('password'));
    return savedPasswords;
}

export const removeSinglePassword = (password) => {
    const allPasswords = JSON.parse(localStorage.getItem('password'));
    const newPasswords = allPasswords.filter(pass=>{
        if (pass !== password) return pass;
    })
    localStorage.setItem("password", JSON.stringify(newPasswords));
}


export const removeAllPaswords = () => {
    localStorage.setItem('password', null);
}

