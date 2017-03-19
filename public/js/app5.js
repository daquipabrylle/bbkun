$('#app').html(`<div class="loader">Loading...</div>
</div>
	
  
`);

setTimeout(function(){
	x();
},1000);

function x(){
$.ajax({
	url: "http://www.omdbapi.com/?t=saw+V"
}).done(function(res){
	console.log(res);
	let html = 
	


	`<center>
	
		<h1>Title:${res.Title}</h1>
		</center>
		<div id="container">
		<div id="left">
		<div style="width:510px;height:70px;padding:10px;border:10px double red;">	
		<br><br>
		<img width=500 height=700 src="${res.Poster}"/>
		</div>
		<div style="width:510px;height:720px;padding:10px;border:10px double red;">
		</div>
		<left>
		<br>
		<h5>MOVIE TRAILER<h5>
		<div style="width:1000px;height:500px;padding:10px;border:10px double red;">		
		<iframe width="1000" height="500"  src="https://www.youtube.com/embed/WljWVrvGXAE" frameborder="0" allowfullscreen></iframe>
		</div>
		</left>
		<center>
<h5>SCREENSHOTS<h5>
<table style="width:100%">  
<tr>
<tr>
<center>
<td><div class="gallery">
  <a target="_blank" href="image/sw17.jpg">
  <div style="width:500px;height:300px;padding:10px;border:10px double red;">
  <img src="image/sw17.jpg" alt="image/sw17.jpg" width="500" height="300">
  </a>
  </div>
  </div>
</td>
<td>
<div cla ss="gallery"> 	
  <a target="_blank" href="image/sw18.jpg">
  <div style="width:500px;height:300px;padding:10px;border:10px double red;">
    <img src="image/sw18.jpg" alt="image/sw18.jpg" width="500" height="300">
  </div>
  </a>
  </td>
</tr>
<tr>
<td>
<center>
<div class="gallery">
  <a target="_blank" href="image/sw19.jpg">
  <div style="width:500px;height:300px;padding:10px;border:10px double red;">
    <img src="image/sw19.jpg" alt="image/sw19.jpg" width="500" height="300">
  </div>
  </a>
</td>  
</div>
<br>
<td>
<div class="gallery">
  <a target="_blank" href="image/sw20.jpg">
  <div style="width:500px;height:300px;padding:10px;border:10px double red;">
    <img src="image/sw20.jpg" alt="image/sw20.jpg" width="500" height="300">
  </div>
  </a>
</td>
</tr>
</center> 
</table>
</center>	
		</div>
		<div id="right">
		<div style="width:400px;height:70px;padding:10px;border:10px double red;">
		<h2>-MOVIE DESCIRPTION-</h2>
		</div>
		<div style="width:400px;height:720px;padding:10px;border:10px double red;">
		<h3>Plot: ${res.Plot}</h3>
		<h3>Writer: ${res.Writer}</h3>
		<h3>Actors: ${res.Actors}</h3>
		<h3>Type: ${res.Type}</h3>
		<h3>Released: ${res.Released}</h3>
		<h3>Runtime: ${res.Runtime}</h3>
		<h3>Genre: ${res.Genre}</h3>
		<h3>Director: ${res.Director}</h3>
		<h3>Language: ${res.Language}</h3>
		<h3>Country: ${res.Country}</h3>
		<h3>Awards: ${res.Awards}</h3>
		</div>
		</div>
		</div>
	
	`;
	$('#app').html(html);


});
}

