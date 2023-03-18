let news = [];
let menus = document.querySelectorAll(".menus button");
// console.log("menus", menus);
menus.forEach((menu) =>
  menu.addEventListener("click", (event) => getNewsByTopic(event))
);
const getLatestNews = async () => {
  let url = new URL(
    `https://api.newscatcherapi.com/v2/latest_headlines?countries=KR&page_size=10`
  );
  console.log(url);
  let header = new Headers({
    "x-api-key": "nq2E-U6-rnhkP4H2LixJkv4NWnFNzyQleA6Y9Hd4fKg",
  });
  let response = await fetch(url, { headers: header }); //API를 부르는 방식:ajax , http, fetch
  let data = await response.json();
  news = data.articles;
  console.log("This is data", news);

  render();
};

const getNewsByTopic = async (event) => {
  console.log("클릭됨", event.target.textContent);

  let topic = event.target.textContent.toLowerCase();
  let url = new URL(
    `https://api.newscatcherapi.com/v2/latest_headlines?countries=KR&page_size=10&topic=${topic}`
  );
  let header = new Headers({
    "x-api-key": "nq2E-U6-rnhkP4H2LixJkv4NWnFNzyQleA6Y9Hd4fKg",
  });
  let response = await fetch(url, { headers: header }); //API를 부르는 방식:ajax , http, fetch
  let data = await response.json();
  news = data.articles;

  render();
};

const render = () => {
  let newsHTML = articles
    .map((item) => {
      return `<div class="row news">
    <div class="col-lg-4">
      <img
        class="new-img-size"
        src="${item.media}"
      />
    </div>
    <div class="col-lg-8">
      <h2>${item.title}</h2>
      <p>${item.summary}</p>
      <div>${item.rights} * ${item.published_data}</div>
    </div>
  </div>`;
    })
    .join("");
  console.log(newsHTML);

  document.getElementById("news-board").innerHTML = newsHTML;
};

getLatestNews();
