const resultsContainer = document.querySelector(".results");

const url = "https://reqres.in/api/users";

async function fetchUsers() {
  try {
    const response = await fetch(url);
    const json = await response.json();

    console.log(json);

    resultsContainer.innerHTML = "";

    const users = json.data;

    for (let i = 0; i < users.length; i++) {
      console.log(users[i].avatar);
      console.log(users[i].first_name);
      console.log(users[i].email);
      if (i === 4) {
        break;
      }

      const usersAvatar = users[i].avatar;
      const usersFirstName = users[i].first_name;
      const userEmail = users[i].email;
      const userId = users[i].id;

      resultsContainer.innerHTML += `<div class="users">
                                            <a href="detail.html?id=${userId}"><img src="${usersAvatar}"/></a>
                                            <a href="detail.html?id=${userId}"><h4>${usersFirstName}</h4>
                                            <a href="detail.html?id=${userId}"><p>${userEmail}</p>
                                        </div>`;
    }
  } catch (error) {
    console.log(error);
    resultsContainer.innerHTML = message("error", error);
  }
}

fetchUsers();
