


var marvel = document.getElementById("radio2");
  var box = document.getElementById("catalog");

marvel.addEventListener("click", () => {
  let heroes = new XMLHttpRequest();
  heroes.open("GET", "heroes.json");
  heroes.send();
  heroes.onreadystatechange = function() {
    if (heroes.readyState === 4 && heroes.status === 200) {
      let dc = JSON.parse(heroes.response);
// ФОРМИРОВАНИЕ ТАБЛИЦЫ ГЕРОЕВ
      var html = "<table>"+"<tr>";
      for (let i = 0; i < dc.marvel.length; i++) {
        if (i % 2 === 0){
        html += "<td>" + dc.marvel[i].name +"<img  src="+dc.marvel[i].image+">"+ "</td>" ;
      }
    }
    html +="</tr>"+"<tr>";
    for (let i = 0; i < dc.marvel.length; i++) {
      if (i % 2 === 1) {
        html += "<td>" + dc.marvel[i].name +"<img src="+dc.marvel[i].image+">"+ "</td>";
      }
    }
      html +="</tr>"+"</table>";
      box.innerHTML = html;
      // КОНЕЦ ТАБЛИЦЫ ГЕРОЕВ
    }
  };
});
