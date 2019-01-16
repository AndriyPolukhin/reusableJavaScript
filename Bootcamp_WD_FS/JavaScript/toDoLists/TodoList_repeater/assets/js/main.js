/**
 * TODO LIST FUNCTIONALITY
 */

// 1. Check Off Specific Todos By Clicking
$('ul').on('click', 'li', function () {
  $(this).toggleClass('completed');
});


// 2. Click on X to delete todo
$('ul').on('click', 'span', function (e) {
  e.stopPropagation();
  $(this).parent().fadeOut(500, function () {
    $(this).remove();
  });
});

// 3. Selecting the input
$('input[type="text"]').keypress(function (e) {
  if (e.which === 13) {
    let todoText = $(this).val();
    $('ul').append(`<li><span><i class="fa fa-trash"></i></span> ${todoText}</li>`);
  }
});

// 4. Toggle the input field
$('.fa-plus').click(() => {
  $("input[type='text']").fadeToggle();
});
