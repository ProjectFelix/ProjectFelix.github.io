var main = () => {
  //$('.answer-list').children().hover(event => {
  //  $(event.currentTarget).css('background', 'linear-gradient(to top right, #66ffff 0%, #FFFFFF 100%)')
  //}, event => {$(event.currentTarget).css('background', '')});


  //$('.answer-list').children().hover(event => {$(event.currentTarget).animate({background: 'linear-gradient(to top right, #66ffff 0%, #FFFFFF 100%)'}, 200)},
  //    event => {$(event.currentTarget).animate({background: 'linear-gradient(to top right, #66ffff 0%, #0000cc 100%)'}, 200)})
  $('.answer-list').children().click(event => {
    $(event.currentTarget).addClass('selected');
    $(event.currentTarget).siblings().removeClass('selected');
  })
}

$(document).ready(main)
