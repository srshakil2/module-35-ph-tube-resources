const buttonLoad = () => {
  fetch("https://openapi.programming-hero.com/api/phero-tube/categories")
    .then((res) => res.json())
    .then((data) => displayShow(data.categories))
    .catch((error) => console.log(error));
};

// -----------3  btn starts
const displayShow = (data) => {
  const btn = document.getElementById("btn");
  data.forEach((item) => {
    const div = document.createElement("div");
    // div.classList = "flex gap-4";
    div.innerHTML = `
    <button onclick="loardArlat(${item.category_id})" class="btn" >${item.category}</button>
    `;
    btn.append(div);
  });
};
// document.getElementById("activebtn").addEventListener("click", function () {
//   console.log("Ami akhon active hoyechi");
// });

const loardArlat = (id) => {
  fetch(`https://openapi.programming-hero.com/api/phero-tube/category/${id}`)
    .then((res) => res.json())
    .then((data) => displayShowCard(data.category))
    .catch((error) => console.log(error));
};
// ----3 btn end
const videosShow = () => {
  fetch("https://openapi.programming-hero.com/api/phero-tube/videos")
    .then((res) => res.json())
    .then((videoData) => displayShowCard(videoData.videos))
    .catch((error) => console.log(error, "Pless try agine"));
};

// -----------cards videos--
const displayShowCard = (videoData) => {
  const crad = document.getElementById("crads");
  crad.innerHTML = "";
  // console.log(videoData);
  if (videoData.length === 0) {
    crad.classList.remove("grid");
    crad.innerHTML = `
    <div class=" flex flex-col justify-center items-center">
    <div class=" h-24 w-24"> <img class="h-full w-full " src="./assects/Icon.png"/></div>
    <h2 class=" text-xl font-extrabold">NO Contant Hare</h2>
    </div>
    `;
    return;
  } else {
    crad.classList.add("grid");
  }
  videoData.forEach((video) => {
    const daisyCrad = document.createElement("div");
    daisyCrad.innerHTML = `
    <div class="card bg-base-100 shadow-xl">
  <figure class=" relative">
   <div class="h-[200px]">
    <img class="h-full w-screen object-cover"
      src="${video.thumbnail}"
      alt="video" />
   </div>
   <span class=" absolute right-2 bottom-2 text-white bg-black font-semibold rounded-lg px-2">${times(
     video.others.posted_date
   )}</span>
  </figure>
  <div class=" py-2 flex gap-2">
    <div class="h-[60px] w-[60px]">
    <img class=" h-full w-full object-cover rounded-full"
      src="${video.authors[0].profile_picture}"
      alt="profile" />
    </div>
    <div>
    <h2 class="card-title">${video.authors[0].profile_name}</h2>
  <div class=" flex gap-1 justify-between items-center">
    <p class=" whitespace-nowrap">${video.title}</p> 
    ${
      video.authors[0].verified === true
        ? `<img class="w-6" src="https://img.icons8.com/?size=48&id=D9RtvkuOe31p&format=png"/>`
        : "false"
    }
   </div>
   <p >${video.others.views}</p>
    <div class=" mt-2">
      <button class="btn bg-red-400">Video ditails</button>
    </div>
    </div>
  </div>
</div>
    `;
    crad.append(daisyCrad);
  });
};

// -------time minit sec
function times(seconder) {
  const second = parseFloat(seconder);
  const h = second / 3600;
  const hours = parseInt(h);
  const seconds = second % 3600;
  const m = seconds / 60;
  const minit = parseInt(m);
  const sec = seconds % 60;
  return `${hours} hour ${minit} minits ${sec}`;
}

// ----------modal open

buttonLoad();
videosShow();
