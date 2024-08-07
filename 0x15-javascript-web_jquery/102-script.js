<<<<<<< HEAD
$(document).ready(function () {
    $('INPUT#btn_translate').click(function () {
      const languageCode = $('INPUT#language_code').val();
      $.get(
        'https://www.fourtonfish.com/hellosalut/hello/?lang=' + languageCode,
        function (data) {
          $('DIV#hello').text(data.hello);
        }
      );
    });
  });
=======
$(document).ready(() => {
  const URL = 'https://www.fourtonfish.com/hellosalut/hello/';

  $('#btn_translate').click(() => {
    const langCode = $('#language_code').val();
    $.get(`${URL}?lang=${langCode}`, function (data) {
      $('#hello').text(data.hello);
    });
  });
});
>>>>>>> 570628e9fc8c3e6ddf17874a3950e0f726643115
