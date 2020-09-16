$(document).ready(() => {
  $('#uploadForm').submit((e) => {
    e.preventDefault();

    const form = $('#uploadForm')[0];
    const formData = new FormData(form);
    console.log(formData);

    $.ajax({
      type: 'POST',
      enctype: 'multipart/form-data',
      processData: false,
      contentType: false,
      cache: false,
      url: '/api/postAd',
      data: formData,
      success(data) {
        console.log('Item has been successfully posted!', data);
      },
      error() {
        console.log('Item has not been posted!');
      },
    });
  });
});
