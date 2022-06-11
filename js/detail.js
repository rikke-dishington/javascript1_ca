const setTitle = document.querySelector("title");
const detailContainer = document.querySelector(".users-details");

const queryString = document.location.search;

const params = new URLSearchParams(queryString);

const id = params.get("id");

console.log(id);

const url = "https://reqres.in/api/users/" + id;

console.log(url);

async function fetchUserDetails() {
  try {
    const response = await fetch(url);
    const details = await response.json();

    console.log(details);

    const userDetails = details.data;

    console.log(details.data);

    createTitle(userDetails);
    createHtml(userDetails);
  } catch (error) {
    console.log(error);
    detailContainer.innerHTML = message("error", error);
  }
}

fetchUserDetails();

function createTitle(userDetails) {
  setTitle.innerHTML += `${userDetails.first_name}`;
}

function createHtml(userDetails) {
  detailContainer.innerHTML += `<div class="users-details">
                                <img src="${userDetails.avatar}"/>
                                <h4>${userDetails.first_name}</h4>
                                <p>${userDetails.email}</p>
  </div>`;
}
