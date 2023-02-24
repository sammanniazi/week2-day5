const tablebody=document.querySelector('#users-table')


async function fetchUser(){


  try{

    const response=await fetch("https://jsonplaceholder.typicode.com/users")
    const data=await response.json();
    return data
  }
  catch(error){

    console.log(error);
  }
}

function createTableRows(users){
let html="";
users.forEach((user)=>{


  html+=`<tr>
    <td>${user.id}</td>
    <td>${user.name}</td>
              <td>${user.username}</td>
              <td>${user.email}</td>
              <td>${user.phone}</td>
              <td>${user.website}</td>


  </tr>`
  
  
});
return html;





}

async function renderTable(){


  const users=await fetchUser();
  const tableRows=createTableRows(users)
  tablebody.innerHTML=tableRows;
}
renderTable();






/// fetch data from json place holder usoing asynin promise.





const tablebody2 = document.querySelector('#users-tablepromise');

function fetchposts() {
  return fetch("https://jsonplaceholder.typicode.com/posts")
    .then(response => response.json())
    .catch(error => console.log(error));
}

function createTableRows2(posts) {
  let html = "";
  posts.forEach(user => {
    html += `
      <tr>
        <td>${user.id}</td>
        <td>${user.title}</td>
        <td>${user.body}</td>
        
      </tr>`;
  });
  return html;
}

function renderTable2() {
  fetchposts()
    .then(posts => {
      const tableRows2 = createTableRows2(posts);
      tablebody2.innerHTML = tableRows2;
    });
}

renderTable2();
