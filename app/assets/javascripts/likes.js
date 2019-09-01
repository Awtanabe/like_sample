$(function(){

 var create_button = $("#like_create")
 var delete_button = $("#like_delete")
　　
 create_button.on("submit", function(e){
    e.preventDefault();
    var post_id = 
    console.log(button)
    console.log($(this).attr('action'))
    var url = $(this).attr('action')

    $.ajax({
      url: url,
      type: 'POST',
      dataType: 'json',
      processData: false,
      contentType: false
    })
  })


  delete_button.on("delete", function(e){
      debugger
    e.preventDefault();
    console.log(button)
    console.log($(this).attr('action'))
    var url = $(this).attr('action')

    $.ajax({
      url: url,
      type: 'POST',
      dataType: 'json',
      processData: false,
      contentType: false
    })
  })




});