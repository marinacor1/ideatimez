function postAllIdeas(){
    $.ajax({
      type: "GET",
      url: "api/v1/ideas",
      success: renderIdeas,
    });

function renderIdeas(response){
  var $target = $('#idea-table');
  $.each(response, function(index, idea){
    $target.prepend(formatIdea(idea));
  });
 }

 function formatIdea(idea) {
   return '<div id="idea-table">' + '<ul>Title: ' +idea.title +
   '</ul><ul>Body: ' + idea.description + '</ul><ul>Quality: '+ idea.quality + '</ul></div>';
 }
}
