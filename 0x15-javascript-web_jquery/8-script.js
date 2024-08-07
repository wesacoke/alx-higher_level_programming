$(document).ready(function () {
<<<<<<< HEAD
    $.get(
        'https://swapi-api.alx-tools.com/api/films/?format=json',
        function (data) {
            $.each(data.results, function (index, movie) {
                $('UL#list_mocies').append('<li>' + movie.tittle + '</li>');
            });
        });
});
=======
  $.get('https://swapi-api.alx-tools.com/api/films/?format=json', function (data) {
    $.each(data.results, function (i, movie) {
      $('<li>').text(movie.title).appendTo('ul#list_movies');
    });
  });
});
>>>>>>> 570628e9fc8c3e6ddf17874a3950e0f726643115
