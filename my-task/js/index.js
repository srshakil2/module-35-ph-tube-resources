const buttonLoad = () => {
  fetch("https://openapi.programming-hero.com/api/phero-tube/categories")
    .then((res) => res.json())
    .then((data) => displayShow(data.categories))
    .catch((error) => console.log(error));
};

const displayShow = (data) => {
  const btn = document.getElementById("btn");
  data.forEach((item) => {
    // console.log(item);
    const button = document.createElement("button");
    button.classList = "btn";
    button.innerText = item.category;
    btn.append(button);
  });
};
buttonLoad();
