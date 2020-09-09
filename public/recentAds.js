$(document).ready(() => {
  $.ajax({
    method: 'GET',
    url: '/api/recent-ads',
  }).then((response) => {
    console.log(response);
    const rowDiv = $('<div>');
    $('#cardsId').append(rowDiv);
    rowDiv.addClass('row');
    for (let i = 0; i < response.length; i += 1) {
      const colDiv1 = $('<div>');
      // const colDiv2 = $('<div>');
      // const colDiv3 = $('<div>');
      colDiv1.addClass('col card');
      // colDiv2.addClass('col card');
      // colDiv3.addClass('col card');
      colDiv1.appendTo(rowDiv);
      // const imgTag = $('<img>');
      // colDiv1.append(imgTag);
      // imgTag.addClass('card-img-top');
      // imgTag.attr('src', '/assets/img/gallery/1.png');
      const cardBodyDiv = $('<div>');
      cardBodyDiv.appendTo(colDiv1);
      cardBodyDiv.addClass('card-body');
      const pTag1 = $('<p>');
      const pTag2 = $('<p>');
      const pTag3 = $('<p>');
      const pTag4 = $('<p>');
      pTag1.appendTo(cardBodyDiv);
      pTag2.appendTo(cardBodyDiv);
      pTag1.addClass('card-text');
      pTag2.addClass('card-text');
      pTag1.html(response[i].product_name);
      pTag2.html(`${response[i].price} CAD`);
    }
  });
});
