const buttonLoad = () => {
  fetch("https://openapi.programming-hero.com/api/phero-tube/categories")
    .then((res) => res.json())
    .then((data) => displayShow(data.categories))
    .catch((error) => console.log(error));
};

const displayShow = (data) => {
  const btn = document.getElementById("btn");
  data.forEach((item) => {
    const button = document.createElement("button");
    button.classList = "btn";
    button.innerText = item.category;
    btn.append(button);
  });
};
const videosShow = () => {
  fetch("https://openapi.programming-hero.com/api/phero-tube/videos")
    .then((res) => res.json())
    .then((videoData) => displayShowBtn(videoData.videos))
    .catch((error) => console.log(error, "Pless try agine"));
};

const displayShowBtn = (videoData) => {
  const crad = document.getElementById("crads");
  videoData.forEach((video) => {
    const daisyCrad = document.createElement("div");
    daisyCrad.innerHTML = `
    <div class="card bg-base-100 shadow-xl">
  <figure>
   <div class="h-[200px]">
    <img class="h-full w-screen object-cover"
      src="${video.thumbnail}"
      alt="video" />
   </div>
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
    <img class="w-6" src="https://img.icons8.com/?size=48&id=D9RtvkuOe31p&format=png"/>
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

buttonLoad();
videosShow();
