 function ideaForm(selector){
  var $target = $(selector);
  $target.append(formatForm());
  $target.prepend(searchBox());
}

  function formatForm(){
  return '<div id="idea-form">' +
  '<form>Idea Title: <br>' +
    '<input id="idea-t" type="text" name="ideatitle" class="idea-title"><br>' +
  'Idea Body: <br> ' + '<input type"text" id="idea-b" class="idea-body" name="ideatitle">' +
  '<input id="submit-button" type="submit" value="Save"> </form></div>';
}

function searchBox(){
  return 'Search: <input type="text" name="searchbox" value="Search ideas"><br><br>'
}
