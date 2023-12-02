$(document).ready(function() {
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
      if (xhr.readyState == 4 && xhr.status == 200) {
        var jsonData = JSON.parse(xhr.responseText);
        var items = jsonData.items;
        var html = "";
        for (var i = 0; i < items.length; i++) {
          html +=
            "Name: " + items[i].name + "<br>" +
            "Price: $" + items[i].price + "<br><br>";
        }
        document.getElementById("item-list").innerHTML = html;
      }
    };
    xhr.open("GET", "JSON/data.json", true);
    xhr.send();
  });
  