const API_URL="http://localhost:3000/students";

async function loadStudents(){
 const res=await fetch(API_URL);
 const students=await res.json();
 const tbody=document.querySelector("tbody");
 tbody.innerHTML="";
 students.forEach(s=>{
  tbody.innerHTML+=`
   <tr>
    <td>${s.id}</td>
    <td><input value="${s.name}" id="name-${s.id}"></td>
    <td><input value="${s.age}" id="age-${s.id}"></td>
    <td><input value="${s.department}" id="dept-${s.id}"></td>
    <td>
      <button class="action-btn edit" onclick="updateStudent(${s.id})">Update</button>
      <button class="action-btn delete" onclick="deleteStudent(${s.id})">Delete</button>
    </td>
   </tr>`;
 });
}

async function addStudent(){
 const name=document.getElementById("name").value;
 const age=document.getElementById("age").value;
 const department=document.getElementById("department").value;
 await fetch(API_URL,{method:"POST",headers:{"Content-Type":"application/json"},
 body:JSON.stringify({name,age,department})});
 loadStudents();
}

async function updateStudent(id){
 const name=document.getElementById(`name-${id}`).value;
 const age=document.getElementById(`age-${id}`).value;
 const department=document.getElementById(`dept-${id}`).value;
 await fetch(`${API_URL}/${id}`,{method:"PUT",headers:{"Content-Type":"application/json"},
 body:JSON.stringify({name,age,department})});
 loadStudents();
}

async function deleteStudent(id){
 await fetch(`${API_URL}/${id}`,{method:"DELETE"});
 loadStudents();
}

loadStudents();