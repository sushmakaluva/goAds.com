$(document).ready(() => {
  $.ajax({
    method: 'GET',
    url: '/api/recent-ads',
  }).then((response) => {
    const rowDiv = $('<div>');
    $('#cardsId').append(rowDiv);
    rowDiv.addClass('row');

    response.forEach((ad) => {
      const colDiv1 = $('<div>');
      colDiv1.addClass('col-lg-4 col-xl-4 col-md-4 col-sm-12 col-xs-12card');
      colDiv1.appendTo(rowDiv);
      const cardBodyDiv = $('<div>');
      cardBodyDiv.appendTo(colDiv1);
      cardBodyDiv.addClass('card-body');
      const imgTag = $('<img>');
      imgTag.addClass('card-img-top');
      imgTag.attr('src', '/assets/img/gallery/dummy_pic.png');
      imgTag.appendTo(cardBodyDiv);
      const pTag1 = $('<h5>');
      const pTag2 = $('<p>');
      pTag1.appendTo(cardBodyDiv);
      pTag2.appendTo(cardBodyDiv);
      pTag1.addClass('product-caption');
      // pTag2.addClass('card-text');
      pTag1.html(ad.product_name);
      pTag1.css('font-weight', 'bold');
      pTag2.html(`${ad.price} CAD`).css('font-family', 'Poppins');
    });
  });
});


