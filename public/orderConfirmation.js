

console.log(moment.locale()); // cs


const firstName = $("#firstName").val()


const lastName = $("#lastName").val()

let date = moment().format("MMM Do YY");
$("#Date").text(":  " + date)


const Total = $("#grandTotal").val()

//const paymentMethod = 

const address = $("#address").val()

const country = $("#country").val()

const state = $("#state").val()
const zip = $("#zip").val()

console.log(firstName, lastName, date, address, country, state, zip)
