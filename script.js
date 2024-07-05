async function fetchInitialUsers() {
  const url = "https://randomuser.me/api/?results=5";
  try {
    const response = await fetch(url);
    const data = await response.json();
    const users = data.results;
    updateProfiles(users);
  } catch (error) {
    console.error("Error fetching user data:", error);
  }
}

document
  .getElementById("fetchUsersButton")
  .addEventListener("click", fetchUsers);

fetchInitialUsers();

async function fetchUsers() {
  const url = "https://randomuser.me/api/?results=5";
  try {
    const response = await fetch(url);
    const data = await response.json();
    const users = data.results;
    updateProfiles(users);
  } catch (error) {
    console.error("Error fetching user data:", error);
  }
}

function updateProfiles(users) {
  const profilesContainer = document.getElementById("profilesContainer");
  const tableBody = document.getElementById("profilesTableBody");

  profilesContainer.innerHTML = "";
  tableBody.innerHTML = "";

  users.forEach((user) => {
    const profileCard = document.createElement("div");
    profileCard.className = "profile-card";

    profileCard.innerHTML = `
            <img src="${user.picture.medium}" alt="${user.name.first} ${user.name.last}">
            <h3>${user.name.first} ${user.name.last}</h3>
            <p>${user.email}</p>
        `;

    profilesContainer.appendChild(profileCard);

    const tableRow = document.createElement("tr");
    tableRow.innerHTML = `
            <td>${user.name.first} ${user.name.last}</td>
            <td>${user.email}</td>
        `;

    tableBody.appendChild(tableRow);
  });
}
