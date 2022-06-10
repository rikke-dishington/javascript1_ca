const detailContainer = document.querySelector(".game-details");

const queryString = document.location.search;

const params = new URLSearchParams(queryString);

const id = params.get("id");

console.log(id);

const url = "https://reqres.in/api/users" + id;

console.log(url);

async function fetchUsers() {
  try {
    const response = await fetch(url);
    const details = await response.json();

    console.log(details);

    createHtml(details);
  } catch (error) {
    console.log(error);
    detailContainer.innerHTML = message("error", error);
  }
}

fetchUsers();

function createHtml(details) {
  detailContainer.innerHTML = `<div class="details-image" url('${details.avatar}')"></div>
                                <h1>${details.first_name}</h1>
                                <div class="details-description">${details.email}</div>`;
}
