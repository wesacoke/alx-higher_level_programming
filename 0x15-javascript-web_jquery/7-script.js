<<<<<<< HEAD
$(document).ready(function () {
    // ensure that code is executed only when document is fully loaded
    $.get(
        // Use jQuery GET method to make an AJAX request to the URL
        'https://swapi-api.alx-tools.com/api/people/5/?format=json',
        function (data) {
            $('#character').text(data.name);
        });
  });
=======
$.get('https://swapi-api.alx-tools.com/api/people/5/?format=json', function (data) {
  $('#character').text(data.name);
});
>>>>>>> 570628e9fc8c3e6ddf17874a3950e0f726643115
