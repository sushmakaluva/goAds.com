$(document).ready((e) => {
  $('#uploadForm').submit(function () {
    e.preventDefault();

    const product_name = $('#product_name').val();
    const price = $('#price').val();
    const category = $('#category option:selected').text();
    const description = $('#description').val();
    const image = $('#image').val();

    $.ajax({
      url: '/api/postAd',
      data: new FormData(this),
      type: 'POST',
      // on success
      success(data) {
        console.log('Item has been successfully posted!');
      },
      // on error
      error() {
        console.log('Item has not been posted!');
      },
    });
  });
});
