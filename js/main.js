function DataCheck() {
  var xml = new XMLHttpRequest();
  xml.onload = function () {
    if (this.status == 200) {
      var dataset = JSON.parse(this.responseText);
      var tableset = document.getElementById("mytable");
      for (i = 0; i < dataset.data.length; i++) {
        console.log(dataset.data[i]);
        var row = `<tr>
          <td><img class = "round" src="${dataset.data[i].avatar}"> </td>
          <td><h2>${dataset.data[i].first_name}</h2></td>
          <td> ${dataset.data[i].last_name}</td>
          <td> ${dataset.data[i].email}</td>
        </tr>`;
        tableset.innerHTML += row;
      }
    }
  };
  xml.open("GET", "https://reqres.in/api/users", true);
  xml.send();
}
DataCheck();
