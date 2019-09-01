$(function(){

  var form = $('#new_post')
  console.log(form)

  form.on('submit', function(e){
    e.preventDefault();
    // var value = e.target[2].value
    var formData = new FormData(this);

    var url = $(this).attr("action")
   
    // ここハッシュのデータで送るみたい
    $.ajax({
      url: url,
      type: 'POST',
      data: formData,
      dataType: 'json',
      processData: false,
      contentType: false
    })
    .done(function(data){
      var posts = $('.posts')
      var tempelete = `<a href="/users/${data.user_id}">${data.user_email}</a>
      <a>${data.content}</a>`
      posts.append(tempelete)
    })

  })

})