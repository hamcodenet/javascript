
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

let role = 'administrator' // reader, writer, maintainer, admin

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

switch (role) {
    case 'guest':
        console.log("You are guest! you can just log in!")
        break;
    case 'reader':
        console.log("You can read the posts")
        break;
    case 'writer':
        console.log("You can read and write")
        break;
    case 'maintainer':
        console.log("You can maintaine the system!") 
        break;
    case 'admin':
    case 'administrator':
        console.log("You are super admin!")
        break;
    case 'developer':
        console.log("You have full acccess")
        break;
    default:
        console.log("Invalid role!")
        break;
}