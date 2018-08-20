$('ul').on('click', 'li', function () {
  $(this).toggleClass('completed');
});

// CLick on X to delete Todo
$('ul').on('click', 'span', function (e) {
  $(this).parent().fadeOut(500, function () {
    $(this).remove();
  });
  e.stopPropagation();
});


$("input[type='text'").keypress(function (e) {
  if (e.which === 13) {
    let todoText = $(this).val();
    $(this).val('');

    $('ul').append(`<li><span>X</span> ${todoText}</li>`);

  }
});