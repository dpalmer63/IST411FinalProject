
  let request = new XMLHttpRequest();
  request.open("GET", "http://127.0.0.1:3000/getAll", true);
  request.onload = function() {
    let data = JSON.parse(this.response);
    if(request.status == 200)
    {
      let rowDiv = document.createElement("div");
      rowDiv.setAttribute('class', 'row');
      document.querySelector("#content").appendChild(rowDiv);

      for (var i = 0; i < data.length; i++)
      {
        let div = document.createElement("div");
        rowDiv.setAttribute('class', 'col-sm-2');
        document.querySelector("#content").appendChild(div);

        let img = document.createElement("img");
        img.setAttribute("src", data[i].src);
        img.setAttribute("width", "100");
        img.setAttribute("height", "100");
        document.querySelector("#content").appendChild(img);

        //let h3 = document.createElement("p");
        //let text = document.createTextNode(data[i].name);
        //h3.appendChild(text);
        //document.querySelector("#content").appendChild(h3);

      }
    }
    else
    {
      console.log("An error occured" + " " + request.status);
    }
  }
  request.send();
