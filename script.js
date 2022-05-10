const search = document.getElementById("search");
const jobPositions = document.querySelectorAll(".job");

search.addEventListener("keyup", (e) => {
  e.preventDefault();

  const searchJob = search.value.toLowerCase().trim();

  for (let i = 0; i < jobPositions.length; i++) {
    if (jobPositions[i].classList.contains(searchJob)) {
      jobPositions[i].style.display = "flex";
    } else if (searchJob == "") {
      jobPositions[i].style.display = "flex";
    } else {
      jobPositions[i].style.display = "none";
    }
  }
});
