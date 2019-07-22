var main = () => {
  $('#modal').modal('show')
  $('.quiz-container').css('hidden', 'true')

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

const questionsList = {
  question1: {
    question: "How many ACAT Categories are there?",
    answers: ["1", "2", "3", "4"],
    answer: "4"
  }
}
