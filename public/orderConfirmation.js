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

const date = moment().format('MMM Do YYYY');
$('#name').text(`${firstName} ${lastName}`);
$('#zip').text(zip);
$('#country').text(country);
$('#state').text(state);
$('#street').text(address);

$('#date').text(`:  ${date}`);

console.log(lastName);
