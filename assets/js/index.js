fetch("./assets/source/labelText.json")
  .then((response) => response.json())
  .then((data) => {
    // Access the keys and values of the JSON data
    data.forEach((item) => {
      // const titleToFind = item.title;
      const descriptionDiv = document.getElementById(item.title);
      if (descriptionDiv) descriptionDiv.innerHTML = item.description;
    });
  })
  .catch((error) => console.error("Error fetching JSON:", error));

fetch("./assets/source/imgsrc.json")
  .then((response) => response.json())
  .then((data) => {
    data.forEach((item) => {
      // const titleToFind = item.title;
      const descriptionDiv = document.getElementById(item.title);
      if (descriptionDiv) descriptionDiv.src = item.description;
    });
  })
  .catch((error) => console.error("Error fetching JSON:", error));
fetch("./assets/source/levels.json")
  .then((response) => response.json())
  .then((data) => {
    data.forEach((item) => {
      const descriptionDiv = document.getElementById(item.title);
      var level = parseInt(item.description);
      for (var i = 0; i < 5; i++) {
        const yellowStarSpan = document.createElement("span");
        if (!yellowStarSpan) continue;
        if (i <= level - 1) yellowStarSpan.className = "yellow-star";
        else yellowStarSpan.className = "dark-star";
        yellowStarSpan.innerHTML = "&#9733;"; // Yellow star symbol
        descriptionDiv.appendChild(yellowStarSpan);
      }
    });
  })
  .catch((error) => console.error("Error fetching JSON:", error));
