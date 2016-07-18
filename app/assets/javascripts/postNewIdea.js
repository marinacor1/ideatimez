function postNewIdea(selector){
  $('#submit-button').click(function(){
  var newTitle = $('#idea-t').val();
  var newBody = $('#idea-b').val();
  $.ajax({
    type: "POST",
    url: "api/v1/ideas",
    data: {title: newTitle, body: newBody},
    success: renderIdeas(selector)
  });
});
}
