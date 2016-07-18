function postNewIdea(selector){
  $('#submit-button').click(function(){
  var newTitle = $('#idea-t').val();
  var newBody = $('#idea-b').val();
  $.ajax({
    type: "POST",
    url: "api/v1/ideas",
    data: {title: newTitle, body: newBody},
    success: function (response){
      var $target = '#idea-form';
      $target.prepend(formatIdea(idea));
      clearTextFields();
    }
  });
});
}

function clearTextFields(){
  $('#idea-t').val() = "";
  $('#idea-b').val() = "";
}
