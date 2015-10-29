$.getJSON("https://api.github.com/users/memphis796/repos").done(function(data){
  var files = data;
  console.log(files);
});


$.getJSON("https://api.github.com/users/memphis796").done(function(data){
  var profile = data;
  console.log(profile);
  $(".head").append("<h1>"+ profile.name +"</h1>")
  $(".head").append("<h2>"+ profile.login +"</h2>")
  $(".head").append("<time>"+ profile.created_at +"</time>")
  $(".head").append("<h3>"+ profile.followers +"</h3>")
});
