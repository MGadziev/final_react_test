


var dc = document.getElementById("radio1");
  var box = document.getElementById("catalog");

dc.addEventListener("click", () => {
  let heroes = new XMLHttpRequest();
  heroes.open("GET", "heroes.json");
  heroes.send();
  heroes.onreadystatechange = function() {
    if (heroes.readyState === 4 && heroes.status === 200) {
      let dc = JSON.parse(heroes.response);
// ФОРМИРОВАНИЕ ТАБЛИЦЫ ГЕРОЕВ
      var html = "<table>"+"<tr class='dc'>";
      for (let i = 0; i < dc.dc.length; i++) {
        if (i % 2 === 0){
        html += "<td>" + dc.dc[i].name +"<img  src="+dc.dc[i].image+">"+ "</td>" ;
      }
    }
    html +="</tr>"+"<tr>";
    for (let i = 0; i < dc.dc.length; i++) {
      if (i % 2 === 1) {
        html += "<td>" + dc.dc[i].name +"<img src="+dc.dc[i].image+">"+ "</td>";
      }
    }
      html +="</tr>"+"</table>";
      box.innerHTML = html;
      // КОНЕЦ ТАБЛИЦЫ ГЕРОЕВ
    }
  };
});
