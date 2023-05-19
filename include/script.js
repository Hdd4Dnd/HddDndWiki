        function showNavbar(){
          var nav = document.getElementById("navbar");
          if(nav.style.display == "none"){
            nav.style.display = "block";
          }else{
            nav.style.display = "none";
          }
        }	
	
	
/* Loop through all dropdown buttons to toggle between hiding and showing its dropdown content - This allows the user to have multiple dropdowns without any conflict */
var dropdown = document.getElementsByClassName("dropdown-btn");
var i;

for (i = 0; i < dropdown.length; i++) {
  dropdown[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var dropdownContent = this.nextElementSibling;
    if (dropdownContent.style.display === "block") {
      dropdownContent.style.display = "none";
    } else {
      dropdownContent.style.display = "block";
    }
  });
}


function open(item){
  document.getElementById("npcs").style.display = "none";
  document.getElementById("magicItems").style.display = "none";
  document.getElementById("locations").style.display = "none";
  document.getElementById("title").style.display = "none";
  showNavbar();

  var elem = document.getElementById("DISPLAY");
  if(elem){
    elem.remove();
  }
  var wrapper = document.createElement("div");

  var propValue;
  for(var propName in item){
    if(propName!="Foto"){
      propValue = item[propName];
      console.log(propValue,propName);
      
      var element = document.createElement("div");
	    if(propName != "Description"){
		element.innerHTML = "<b>"+propName+" : </b>"+ propValue;
		element.style.margin = "10px";
	    }else{
		element.innerHTML = "<b>"+propName+" : </b><br>"+ propValue;
		element.style.textAlign = "justify";
	    }
      wrapper.appendChild(element);
    }
  }
  if(item["Foto"]){
	  var imgDiv = document.createElement("div");
	  imgDiv.className = "itemImage";
    var img = document.createElement("img");
    img.src = "resources/images/"+item["Foto"];
	imgDiv.appendChild(img);  
    wrapper.appendChild(imgDiv);
  }
  wrapper.id = "DISPLAY";
  document.getElementById("main").appendChild(wrapper);
}
