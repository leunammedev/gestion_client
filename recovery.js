
let tbody=document.getElementById('users-container');
    let nbUser =0

function addUser(){
      nbUser++;
      let user = getUser();
      user.id = nbUser;
     
        addUserInToTable(user);
        saveUserLocalStorage(user) ;     
  }

  function addUserInToTable(user){
                    tbody.innerHTML ='<tr>'
                    +'<td><input user-id = "'+ user.id +'" type="checkbox" class="checkbox"></td>'
                    +'<td>'+user.id+'</td>'
                    +'<td>'+user.lastname+'</td>'
                    +'<td>'+user.firstname+'</td>'
                    +'<td>'+user.birthday+'</td>'
                    +'<td>'+user.email+'</td>'
                    +'<td>'+user.phone+'</td>'
                    +'<td>'+user.sexe+'</td>'
                    +`<td><i class="fa-solid fa-pencil"></i>
                    <i class="fa-solid fa-eye"></i>
                    <i class="fa-solid fa-xmark"></i>
                    <i class="fa-solid fa-comment"></i></td>`+
                    '<tr>' + tbody.innerHTML;
  }

function saveUserLocalStorage(user){
      let users = getUserFromStorage();

    users.push(user);

      localStorage.setItem('USERS', JSON.stringify(users))
  }

  function getUserFromStorage(){
    let users = localStorage.getItem('USERS');
    try{
        users =users? JSON.parse(users): [];
    }
    catch(e){
        users=[];
    }
    return users;
  }

function getUser(){
      return{
          lastname: document.getElementById('nom').value,
          firstname: document.getElementById('prenom').value,
          birthday: document.getElementById('dateDeNaissance').value,
          email: document.getElementById('email').value,
          phone: document.getElementById('phone').value,
          sexe: document.getElementById('sexe').value,

      };
  }
// fonction qui permet d'effectuer les filtres dans la barre de recherche
  function filter(event){
    let key = event.target.value;
    let users = getUserFromStorage();
   let usersFiltered = users.filter((user) => {
        return (new RegExp(key, 'i')).test(user.lastname) ||(new RegExp(key,'i')).test(user.firstname) 
        || (new RegExp(key, 'i')).test(user.email)

    })
  tbody.innerHTML='';
  usersFiltered.forEach((user) => addUserInToTable(user))

  }

  (function(){
    let users = getUserFromStorage ();

    users.forEach(function (user){
        nbUser=user.id > nbUser? user.id : nbUser;
        addUserInToTable(user);
    });
  }());
