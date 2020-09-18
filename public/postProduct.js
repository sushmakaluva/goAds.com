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
      url: '/api/postProduct',
      data: formData,
      success(data) {
        console.log('Item has been successfully posted!', data);
        alert('Ad has been posted successfully !!');
      },
      error() {
        console.log('Item has not been posted!');
        alert('Please refresh the page and try again later');
      },
    });
  });
});
