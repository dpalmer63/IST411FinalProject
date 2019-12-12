
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
        let img = document.createElement("img");
        img.setAttribute("src", data[i].src);
        img.setAttribute("width", "200");
        img.setAttribute("height", "200");
        document.querySelector("#content").appendChild(img);

        let pricetxt = document.createElement("p");
        let text = document.createTextNode("$" + data[i].price);
        pricetxt.appendChild(text);
        document.querySelector("#content").appendChild(pricetxt);

        let title = document.createElement("p");
        let ptext = document.createTextNode(data[i].name);
        title.setAttribute("style", "font-weight:bold");
        title.appendChild(ptext);
        document.querySelector("#content").appendChild(title);

      }
    }
    else
    {
      console.log("An error occured" + " " + request.status);
    }
  }
  request.send();
