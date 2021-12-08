const result = document.getElementById("result");
const filter = document.getElementById("filter");
const listItems = [];
const API_ROOT = "https://randomuser.me/api/";

fetchData(`${API_ROOT}?results=50`);
filter.addEventListener("input", (e) => filterInput(e.target.value));

async function fetchData(api) {
  const response = await fetch(api);
  const { results } = await response.json();
  // clear result
  result.innerHTML = "";
  results.forEach((user) => {
    const list = document.createElement("li");
    listItems.push(list);
    list.innerHTML = `
    <img src="${user.picture.medium}">
    <div class="user-info">
    <h4>${user.name.first} ${user.name.last}</h4>
    <p>${user.location.city}, ${user.location.country}</p>
    </div>
    `;

    result.appendChild(list);
  });
}

function filterInput(searchTerm) {
  listItems.forEach((item) => {
    console.log(item.innerText);
    if (item.innerText.toLowerCase().includes(searchTerm.toLowerCase())) {
      item.classList.remove("hide");
    } else {
      item.classList.add("hide");
    }
  });
}
