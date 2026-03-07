let loginForm = document.getElementById("loginForm")
let signupForm = document.getElementById("signupForm")
let showSignup = document.getElementById("showSignup")
let showLogin = document.getElementById("showLogin")

let signupBtn = document.getElementById("signupBtn")
let loginBtn = document.getElementById("loginBtn")

let signupName = document.getElementById("signupName")
let signupPassword = document.getElementById("signupPassword")

let loginName = document.getElementById("loginName")
let loginPassword = document.getElementById("loginPassword")

let users = JSON.parse(localStorage.getItem("users")) || []

showSignup.addEventListener("click",()=>{
  loginForm.classList.remove("active")
  signupForm.classList.add("active")
})

showLogin.addEventListener("click",()=>{
  signupForm.classList.remove("active")
  loginForm.classList.add("active")
})

function userExists(name){
  return users.some(user => user.name === name)
}

signupBtn.addEventListener("click",()=>{

  let name = signupName.value.trim()
  let password = signupPassword.value.trim()

  if(name === "" || password === ""){
    Swal.fire({
      icon: "warning",
      title: "All fields required"
    })
    return
  }

  if(userExists(name)){
      Swal.fire({
      icon: "error",
      title: "User already exists"
    })
    return
  }

  users.push({name,password})
  localStorage.setItem("users",JSON.stringify(users))

  Swal.fire({
    icon: "success",
    title: "Account created successfully",
    timer: 1500,
    showConfirmButton: false
  })

  signupName.value = ""
  signupPassword.value = ""

  signupForm.classList.remove("active")
  loginForm.classList.add("active")
})

loginBtn.addEventListener("click",()=>{

  let name = loginName.value.trim()
  let password = loginPassword.value.trim()

  let validUser = users.find(user => 
    user.name === name && user.password === password
  )

  if(!validUser){
    Swal.fire({
      icon: "error",
      title: "Invalid credentials"
    })
    return
  }

  localStorage.setItem("loggedInUser",JSON.stringify(validUser))

  Swal.fire({
    icon: "success",
    title: "Login successful",
    timer: 1200,
    showConfirmButton: false
  }).then(()=>{
    window.location.href = "https://shahzaibkhan326.github.io/JavaScript-App-And-Projects/TodoList/"
  })
})