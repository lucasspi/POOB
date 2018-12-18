
var config = {
  apiKey: "AIzaSyA5Cjx560uvqiPawlsu7x-ceB5nSTfcTRk",
          authDomain: "fir-realtime-db-web-9a7ed.firebaseapp.com",
          databaseURL: "https://fir-realtime-db-web-9a7ed.firebaseio.com",
          projectId: "fir-realtime-db-web-9a7ed",
          storageBucket: "",
          messagingSenderId: "491090593020"
};
firebase.initializeApp(config);

var d = new Date();
var t = d.getTime();
var counter =t;

document.getElementById("form").addEventListener("submit",(e)=>{
  var task = document.getElementById("task").value;
  var description = document.getElementById("description").value;
  var dataentrega = document.getElementById("dataentrega").value;
  var usuario = document.getElementById("usuario").value;
  e.preventDefault();
  createTask(task,description,dataentrega,usuario);
  form.reset();
});

function createTask(taskName,description,dataentrega, usuario){
  console.log(counter);
  counter+=1;
  console.log(counter);
  var task={
    id:counter,
    task: taskName,
    description:description,
    dataentrega: dataentrega,
    usuario: usuario
  }
  let db= firebase.database().ref("tasks/"+counter);
  db.set(task);
  document.getElementById("cardSection").innerHTML='';
  readTask();
}

function readTask(){
  var task= firebase.database().ref("tasks/");
  task.on("child_added",function(data){
    var taskValue= data.val();

    document.getElementById("cardSection").innerHTML+=`
      <div class="card mb-3">
        <div class="card-body">
          <h5 class="card-title">${taskValue.task}</h5>
          <p class="card-text">${taskValue.description}</p>
          <p class="card-text">Data limite para entrega:</p>
          <p class="card-text">${taskValue.dataentrega}</p>
          <p class="card-text">${taskValue.usuario}</p>
          <button type="submit" style="color:white" class="btn btn-warning" onclick="updateTask(${taskValue.id},'${taskValue.task}','${taskValue.description}','${taskValue.dataentrega}','${taskValue.usuario}')"><i class="fas fa-edit"></i> Editar Tarefa</button>
          <button type="submit"  class="btn btn-danger" onclick="deleteTask(${taskValue.id})"><i class="fas fa-trash-alt"></i> Deletar Tarefa</button>
        </div>
      </div>
  `
  });  
}

function reset(){
  document.getElementById("firstSection").innerHTML=`
  <form class="border p-4 mb-4 " id="form">

  <div class="form-group">
    <label >Task</label>
    <input type="text" class="form-control" id="task" placeholder="Enter task">
  </div>

  <div class="form-group">
    <label>Description</label>
    <input type="text" class="form-control" id="description" placeholder="Description">
  </div>
  <div class="form-group">
    <label>Data Entrega</label>
    <input type="text" class="form-control" id="dataentrega" placeholder="Data Entrega">
  </div>
  <div class="form-group">
    <label>Usuario</label>
    <input type="text" class="form-control" id="usuario" placeholder="usuario">
  </div>

  <button type="submit"  id="button1" class="btn btn-primary"><i class="fas fa-plus"></i> ADD TASK</button>
  <button style="display: none" id="button2" class="btn btn-success"> Update Task</button>
  <button style="display: none" id="button3" class="btn btn-danger">Cancel</button>
</form>
  `;

  document.getElementById("form").addEventListener("submit",(e)=>{
    var task = document.getElementById("task").value;
    var description = document.getElementById("descriçao").value;
    var dataentrega = document.getElementById("dataentrega").value;
    var usuario = document.getElementById("usuario").value;
    e.preventDefault();
    createTask(task,description,dataentrega,usuario);
    form.reset();
  });
}

function updateTask(id,name,description, dataentrega,usuario){
  document.getElementById("firstSection").innerHTML=`
  <form class="border p-4 mb-4 " id="form2">

  <div class="form-group">
    <label >Task</label>
    <input type="text" class="form-control" id="task" placeholder="Enter task">
  </div>

  <div class="form-group">
    <label>Description</label>
    <input type="text" class="form-control" id="description" placeholder="Descriçao">
  </div>
  <div class="form-group">
    <label>Data Entrega</label>
    <input type="text" class="form-control" id="dataentrega" placeholder="Data Entrega">
  </div>
  <div class="form-group">
    <label>Usuario</label>
    <input type="text" class="form-control" id="usuario" placeholder="Usuario">
  </div>

  <button style="display: none"  id="button1" class="btn btn-primary">ADD TASK</button>
  <button type="submit" style="display: inline-block" id="button2" class="btn btn-success"><i class="fas fa-sync"></i> Update Task</button>
  <button style="display: inline-block" id="button3" class="btn btn-danger"><i class="fas fa-ban"></i> Cancel</button>
</form>
  `;
  document.getElementById("form2").addEventListener("submit",(e)=>{
    e.preventDefault();
  });
  document.getElementById("button3").addEventListener("click",(e)=>{
    reset();
  });
  document.getElementById("button2").addEventListener("click",(e)=>{
    updateTask2(id,document.getElementById("task").value,document.getElementById("description").value, document.getElementById("dataentrega").value, document.getElementById("usuario").value);
  });
  document.getElementById("task").value=name;
  document.getElementById("description").value=description;
  document.getElementById("dataentrega").value=dataentrega;
  document.getElementById("usuario").value=usuario;
}

function updateTask2(id,name,description, dataentrega,usuario){
  var taskUpdated={
    task:name,
    id:id,
    description:description,
    dataentrega: dataentrega,
    usuario:usuario
  }
  let db= firebase.database().ref("tasks/"+id);
  db.set(taskUpdated);

  document.getElementById("cardSection").innerHTML='';
  readTask();
  reset();
}
function deleteTask(id){
  var task= firebase.database().ref("tasks/"+id);
  task.remove();
  reset();
  document.getElementById("cardSection").innerHTML='';
  readTask();
}








// Firebase Database Reference and the child
const dbRef = firebase.database().ref();
const usersRef = dbRef.child('users');
let indice = 0;

	readUserData(); 
	

// --------------------------
// READ
// --------------------------
function readUserData() {

	const userListUI = document.getElementById("user-list");

	usersRef.on("value", snap => {

		userListUI.innerHTML = ""

		snap.forEach(childSnap => {

			let key = childSnap.key,
				value = childSnap.val()
  			
			let $li = document.createElement("li");

			// edit icon
			let editIconUI = document.createElement("span");
			editIconUI.class = "edit-user";
			editIconUI.innerHTML = " ✎";
			editIconUI.setAttribute("userid", key);
			editIconUI.addEventListener("click", editButtonClicked)

			// delete icon
			let deleteIconUI = document.createElement("span");
			deleteIconUI.class = "delete-user";
			deleteIconUI.innerHTML = " ☓";
			deleteIconUI.setAttribute("userid", key);
			deleteIconUI.addEventListener("click", deleteButtonClicked)
			
			$li.innerHTML = value.name;
			$li.append(editIconUI);
			$li.append(deleteIconUI);

			$li.setAttribute("user-key", key);
			$li.addEventListener("click", userClicked)
			userListUI.append($li);

 		});


	})

}



function userClicked(e) {


		var userID = e.target.getAttribute("user-key");

		const userRef = dbRef.child('users/' + userID);
		const userDetailUI = document.getElementById("user-detail");

		userRef.on("value", snap => {

			userDetailUI.innerHTML = ""

			snap.forEach(childSnap => {
				var $p = document.createElement("p");
				$p.innerHTML = childSnap.key  + " - " +  childSnap.val();
				userDetailUI.append($p);
			})

    });
    
	

}





// --------------------------
// ADD
// --------------------------

const addUserBtnUI = document.getElementById("add-user-btn");
addUserBtnUI.addEventListener("click", addUserBtnClicked)



function addUserBtnClicked() {
  
  

	const usersRef = dbRef.child('users');

	const addUserInputsUI = document.getElementsByClassName("user-input");
  
 	// this object will hold the new user information
    let newUser = {};

    // loop through View to get the data for the model 
    for (let i = 0, len = addUserInputsUI.length; i < len; i++) {

        let key = addUserInputsUI[i].getAttribute('data-key');
        
        let value = addUserInputsUI[i].value;
        
        newUser[key] = value;
    }
    
    let nome = [];
    nome[indice] = addUserInputsUI[0].value;
    indice++;
    console.log("indice: ", nome[0]);
    
    
	  usersRef.push(newUser)

    
   console.log(myPro)
   


}


// --------------------------
// DELETE
// --------------------------
function deleteButtonClicked(e) {

		e.stopPropagation();

		var userID = e.target.getAttribute("userid");

		const userRef = dbRef.child('users/' + userID);
		
		userRef.remove();

}


// --------------------------
// EDIT
// --------------------------
function editButtonClicked(e) {
	
	document.getElementById('edit-user-module').style.display = "block";

	//set user id to the hidden input field
	document.querySelector(".edit-userid").value = e.target.getAttribute("userid");

	const userRef = dbRef.child('users/' + e.target.getAttribute("userid"));

	// set data to the user field
	const editUserInputsUI = document.querySelectorAll(".edit-user-input");


	userRef.on("value", snap => {

		for(var i = 0, len = editUserInputsUI.length; i < len; i++) {

			var key = editUserInputsUI[i].getAttribute("data-key");
					editUserInputsUI[i].value = snap.val()[key];
		}

	});




	const saveBtn = document.querySelector("#edit-user-btn");
	saveBtn.addEventListener("click", saveUserBtnClicked)
}


function saveUserBtnClicked(e) {
 
	const userID = document.querySelector(".edit-userid").value;
	const userRef = dbRef.child('users/' + userID);

	var editedUserObject = {}

	const editUserInputsUI = document.querySelectorAll(".edit-user-input");

	editUserInputsUI.forEach(function(textField) {
		let key = textField.getAttribute("data-key");
		let value = textField.value;
  		editedUserObject[textField.getAttribute("data-key")] = textField.value
	});



	userRef.update(editedUserObject);

	document.getElementById('edit-user-module').style.display = "none";


}