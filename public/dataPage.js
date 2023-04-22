import { getData } from "./request.js";

getData("/get-data")
  .then((res) => {
    return res.json();
  })
  .then((data) => {
    let UIdata = ''
    data.data.forEach((element) => {
      let imagePath = element.image.split('public')
      UIdata += `
        <div>
          <h3>${element.text}</h3>
        </div>

        <div>
          <img src="${imagePath[1]}" class="img-thumbnail w-25">
        </div>
        <hr>
      `;
    });
    document.querySelector('#main').innerHTML = UIdata
  })
  .catch(() => {});
