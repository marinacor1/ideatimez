function postAllIdeas(selector){
    $.ajax({
      type: "GET",
      url: "api/v1/ideas",
      success: renderIdeas(selector),
    });

function renderIdeas(selector){
	return function(response) {
      var $target = $(selector);
      $.each(response, function(index, idea){
       $target.prepend(formatIdea(idea));
      });
	};
 }
 function formatIdea(idea) {
   return '<div id="idea-table"><ul>' + 'Title:' +idea.title +
   '</ul><ul>Body:' + idea.description + '</ul><ul>Quality: '+ idea.quality + '</ul></div>';
 }
}
