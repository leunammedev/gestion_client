function selectElement(){
    let checkbox = tbody.getElementsByClassName ('checkbox');
    let toRemove = []
    Array.from (checkbox).forEach((inputCheckbox)=> {
        if (inputCheckbox.checked){
            toRemove.push(parseInt(inputCheckbox.getAttribute('user-id')));
        }
    });
    let user= getUserFromStorage();
    let keepUser = user.filter ((user) => {
        return toRemove.indexOf(user.id)<0;
    });
    localStorage.setItem('USERS',JSON.stringify(keepUser));
    tbody.innerHTML='';
    keepUser.forEach((user)=> addUserInToTable(user));
}