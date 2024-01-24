
window.onload = function () {
    
    
    var tableBody = document.querySelector("#gamesTable tbody");
    
   
    var xmlRequest = new XMLHttpRequest();
    xmlRequest.open("GET", "games.xml", true);
    xmlRequest.onreadystatechange = function() {
        if (xmlRequest.readyState == 4 && xmlRequest.status == 200) {
            var xmlDoc = xmlRequest.responseXML;
            var games = xmlDoc.getElementsByTagName("game");
            for (var i = 0; i < games.length; i++) {
                var game = games[i];
                var name = game.querySelector("name").textContent;
                var description = game.querySelector("description").textContent;
                var description2 = game.querySelector("image > description").textContent;
                var hourlyPricing = game.querySelector("pricing > hourly").textContent;
                var perGamePricing = game.querySelector("pricing > perGame").textContent;
                

                var row = tableBody.insertRow(i);
                var cellName = row.insertCell(0);
                var cellDescription = row.insertCell(1);
                var cellHourlyPricing = row.insertCell(2);
                var cellPerGamePricing = row.insertCell(3);

                cellName.innerHTML = name;
                cellDescription.innerHTML = description + " " +description2;
                cellHourlyPricing.innerHTML = hourlyPricing;
                cellPerGamePricing.innerHTML = perGamePricing;
            }
        }
    };
    xmlRequest.send();
    
    var button = document.getElementById("loadimages");
    button.dataset.imagesLoaded = "true";
   


    document.getElementById("loadimages").addEventListener("click", function(){

        var button = this;
        

        if (button.dataset.imagesLoaded === "true") {
            button.dataset.imagesLoaded = "false";
            var table = document.getElementById("gamesTable");
            var tableHead = document.querySelector("#gamesTable thead");
   
            tableHead.innerHTML = `
            <tr>
            <th>Name</th>
            <th>Description</th>
            <th>Pricing (Hourly)</th>
            <th>Pricing (Per Game)</th>
            <th>Images</th>
            </tr>
            `;
        
        
        var jsonRequest = new XMLHttpRequest();
        jsonRequest.open("GET", "games.json", true);
        jsonRequest.onreadystatechange = function () {
            if (jsonRequest.readyState == 4 && jsonRequest.status == 200) {
                var jsonData = JSON.parse(jsonRequest.responseText);
                var games = jsonData.games;
    
                for (var i = 0; i < games.length; i++) {
                    var game = games[i];
                    var gameName = game.name;
    
                    for (var j = 0; j < table.rows.length; j++) {
                        var row = table.rows[j];
                        var cellName = row.cells[0];
                        var rowName = cellName.innerHTML;
    
                        if (rowName === gameName) {
                            var cellImages = row.insertCell(4);
                            var image = document.createElement("img");
                            image.src = game.imagePath;
                            image.alt = game.name;
                            cellImages.appendChild(image);
                        }
                    }
                }
            }
        };
        jsonRequest.send();
    }
    else{

        button.dataset.imagesLoaded = "true";
        var tableHead = document.querySelector("#gamesTable thead");
   
            tableHead.innerHTML = `
            <tr>
            <th>Name</th>
            <th>Description</th>
            <th>Pricing (Hourly)</th>
            <th>Pricing (Per Game)</th>
            </tr>
            `;

        var tableBody = document.querySelector("#gamesTable tbody");
        tableBody.innerHTML=" ";
    
   
    var xmlRequest = new XMLHttpRequest();
    xmlRequest.open("GET", "games.xml", true);
    xmlRequest.onreadystatechange = function() {
        if (xmlRequest.readyState == 4 && xmlRequest.status == 200) {
            var xmlDoc = xmlRequest.responseXML;
            var games = xmlDoc.getElementsByTagName("game");
            for (var i = 0; i < games.length; i++) {
                var game = games[i];
                var name = game.querySelector("name").textContent;
                var description = game.querySelector("description").textContent;
                var description2 = game.querySelector("image > description").textContent;
                var hourlyPricing = game.querySelector("pricing > hourly").textContent;
                var perGamePricing = game.querySelector("pricing > perGame").textContent;
                

                var row = tableBody.insertRow(i);
                var cellName = row.insertCell(0);
                var cellDescription = row.insertCell(1);
                var cellHourlyPricing = row.insertCell(2);
                var cellPerGamePricing = row.insertCell(3);

                cellName.innerHTML = name;
                cellDescription.innerHTML = description + " " +description2;
                cellHourlyPricing.innerHTML = hourlyPricing;
                cellPerGamePricing.innerHTML = perGamePricing;
            }
        }
    };
    xmlRequest.send();
    }
    })
 };




