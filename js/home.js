const solutionsWrapperCards = document.querySelector(
  ".solutions-wrapper-cards"
);

function getData(url) {
  let promise = new Promise((resolve, reject) => {
    let request = new XMLHttpRequest();

    request.onreadystatechange = function () {
      if (request.readyState === 4 && request.status === 200) {
        let dataJson = request.response;
        data = JSON.parse(dataJson);
        resolve(data);
      } else if (request.readyState === 4) {
        reject(request.statusText);
      }
    };

    request.timeout = 10000;

    request.open("GET", url);

    request.send();
  });

  return promise;
}

let users;

function getUserCards(user) {
  console.log(user);

  let randomId = Math.floor(Math.random() * 3) + 1;
  return `
    <div class="solutions-wrapper-cards-item">
  <div class = "herro-card">
      <img src="./image/home/expert${randomId}.png" alt="User Image">
     <div>
      <h3>
        <span>${user.id}</span>.${user.name}
      </h3>
      <h4>
        ${user.username}
      </h4>
      <a href="mailto:${user.email}">${user.email}</a>
      </div>
  </div>

      <a class= "btn card-btn" href = "#">Read more -></a>
    </div>
`;
}

getData("https://jsonplaceholder.typicode.com/users").then((res) => {
  users = res;
  users.map((user) => {
    solutionsWrapperCards.innerHTML += getUserCards(user);
  });
});
