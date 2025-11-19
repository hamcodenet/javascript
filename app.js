// let userStatus = true

// // false -> inactive
// // true -> active

// // if (userStatus) {
// //   console.log('active')
// // } else {
// //   console.log('inactive')
// // }

// let userStatusLabel = userStatus ? 'active' : 'inactive'

// console.log(userStatusLabel)

let role = "administrator"; // reader, writer, maintainer, admin

// if (role == 'guest') {
//     console.log("You are guest! you can just log in!")
// } else if (role == 'reader') {
//     console.log("You can read the posts")
// } else if (role == 'writer') {
//     console.log("You can read and write")
// } else if (role == 'maintainer') {
//     console.log("You can maintaine the system!")
// } else if (role == 'admin' || role == 'administrator') {
//     console.log("You are super admin!")
// } else {
//     console.log("Invalid role!")
// }

// switch (role) {
//     case 'guest':
//         console.log("You are guest! you can just log in!")
//         break;
//     case 'reader':
//         console.log("You can read the posts")
//         break;
//     case 'writer':
//         console.log("You can read and write")
//         break;
//     case 'maintainer':
//         console.log("You can maintaine the system!")
//         break;
//     case 'admin':
//     case 'administrator':
//         console.log("You are super admin!")
//         break;
//     case 'developer':
//         console.log("You have full acccess")
//         break;
//     default:
//         console.log("Invalid role!")
//         break;
// }

// alert("Hi all!")

// let sure = confirm("Are you sure?")

// console.log(sure)

// let name = prompt("What is your name?")

// alert(`Welcome ${name}`)

// let age = parseInt(prompt("Enter your age:"))

// // let monthes = years * 12

// // alert (`You are ${monthes} monthes old!`)

// if (age > 18) {
//     alert("Welcome!")
// } else {
//     alert("Sorry!")
// }

// let age = parseInt(prompt("Enter your age:"));

// while (age > 120 || age < 3) {
//     alert("Invalid age!");

//     age = parseInt(prompt("Enter your age:"));
// }

// alert (`Your age is ${age}`);

// if (age > 120 || age < 3) {
//   alert("Invalid age!");

//   age = parseInt(prompt("Enter your age:"));

//   if (age > 120 || age < 3) {
//     alert("Invalid age!");

//     age = parseInt(prompt("Enter your age:"));

//     if (age > 120 || age < 3) {
//       alert("Invalid age!");

//       alert("You cannot use our system!")
//     }
//   }
// }


// let i = 0
// let age = 0
// while (i < 3) {
//     age = parseInt(prompt("Enter your age:"));

//     i = i + 1

//     if (age > 3 && age < 120) {
//         break;
//     }
// }

// alert(`The vaild age is ${age}`)




while (true) {

    command = prompt("Enter the command")

    if (command == 'quit') {
        break
    }

    if (command == 'test' || command == 'send') {
        continue
    }

    alert("Invalid command")
}