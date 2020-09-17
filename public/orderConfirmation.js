function getUrlVars() {
  const queryString = {};
  let key;
  let val;
  const queryParams = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&');
  for (let i = 0; i < queryParams.length; i += 1) {
    [key, val] = queryParams[i].split('=');
    queryString[key] = val;
  }
  return queryString;
}

const queryString = getUrlVars();
const { lastName } = queryString;
const { firstName } = queryString;
const { email } = queryString;
const { zip } = queryString;
const { country } = queryString;
const { state } = queryString;
const { address } = queryString;
const total = queryString.grandTotal;

const date = moment().format('MMM Do YYYY');
$('#name').text(`${firstName} ${lastName}`);
$('#zip').text(zip);
$('#country').text(country);
$('#state').text(state);
$('#street').text(address);
$('#date').text(`:  ${date}`);
<<<<<<< HEAD
var total= JSON.parse(localStorage.getItem("grandTotal"))
$("#total").text(`: $${total} CAD`)


=======
$('#total').text(total);
>>>>>>> a3ba97d234777ca42f2b83ee5dfd878f557b9b2c
