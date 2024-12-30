const process = [
  {
    id: 1,
    title: "Discover",
    image: "../image/home/expert7.png",
    desc: "We aim to attain the greatest satisfaction for our clients and be one of the prominent.",
  },
  {
    id: 2,
    title: "Designing",
    image: "../image/home/expert8.png",
    desc: "We aim to attain the greatest satisfaction for our clients and be one of the prominent.",
  },
  {
    id: 3,
    title: "Development",
    image: "../image/home/expert9.png",
    desc: "We aim to attain the greatest satisfaction for our clients and be one of the prominent.",
  },
  {
    id: 4,
    title: "Testing",
    image: "../image/home/expert10.png",
    desc: "We aim to attain the greatest satisfaction for our clients and be one of the prominent.",
  },
  {
    id: 5,
    title: "Deployment",
    image: "../image/home/expert11.png",
    desc: "We aim to attain the greatest satisfaction for our clients and be one of the prominent.",
  },
  {
    id: 6,
    title: "Maintenance",
    image: "../image/home/expert12.png",
    desc: "We aim to attain the greatest satisfaction for our clients and be one of the prominent.",
  },
];

const processCards = document.querySelector(".process-wrapper-cards");

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

  let randomId = Math.floor(Math.random() * 12) + 1;
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

function getProcess(el) {
  return `
     <div class = "process-wrapper-cards-item">
            <span>0${el.id}</span>
            <img src=${el.image} alt=${el.title} />
            <div>
              <h3>${el.title}</h3>
              <p>${el.desc}</p>
            </div>

            <img class="process-line" src = "../image/home/gorizantal.png"/>
          </div>
  `;
}

process.map((el) => {
  processCards.innerHTML += getProcess(el);
});
