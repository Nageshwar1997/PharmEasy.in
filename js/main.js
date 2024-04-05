let bannerList = [
  {
    imgUrl:
      "https://cms-contents.pharmeasy.in/banner/93051e0bc77-MEGA20_App.jpg",
  },
  {
    imgUrl:
      "https://cms-contents.pharmeasy.in/banner/dc5281c821e-GRAND1000_App.jpg",
  },
  {
    imgUrl: "https://cms-contents.pharmeasy.in/banner/86df3a0dc37-HP.jpg",
  },
  {
    imgUrl:
      "https://cdn01.pharmeasy.in/dam/banner/banner/35e5eacb98d-27OFFER.jpg",
  },
  {
    imgUrl:
      "https://cdn01.pharmeasy.in/dam/banner/banner/96173370bef-BOGO_pe.jpg",
  },
  {
    imgUrl:
      "https://cdn01.pharmeasy.in/dam/banner/banner/6daa13c2968-Slipper-HP-size.jpg",
  },
];

let bannerContainer = document.querySelector(".banner-wrapper");


createOfferList(bannerList, bannerContainer);
function createOfferList(list, container) {
    list.forEach((item) => {

        let img = document.createElement("img");
        // img.src = item.imgUrl; // OR
        img.setAttribute("src", item.imgUrl);

        container.append(img);
    })
}

// Select all images within the .banner-wrapper
let images = document.querySelectorAll(".banner-wrapper img");

// Loop through each image to add event listeners
images.forEach(img => {
    img.addEventListener('mouseenter', () => {
        // Pause the animation when mouse enters an image
        document.querySelector('.banner-wrapper').style.animationPlayState = 'paused';
    });
    
    img.addEventListener('mouseleave', () => {
        // Resume the animation when mouse leaves an image
        document.querySelector('.banner-wrapper').style.animationPlayState = 'running';
    });
});