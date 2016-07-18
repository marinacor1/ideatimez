 function ideaForm(selector){
  var $target = $(selector);
  $target.append(formatForm());
}

  function formatForm(){
  return '<div id="idea-form">' +
  '<form>Title: <br>' +
    '<input type="text" name="ideatitle" class="idea-title"><br>' +
  'Body: <br> ' + '<input type"text" class="idea-body" name="ideatitle">' +
  '<input type="submit" value="Submit"> </form></div>';
}
