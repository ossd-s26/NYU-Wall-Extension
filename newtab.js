const images = [
  "nyu_imgs/2021_0330_nyu_campus-pictures_jc_0007 (1).jpg",
  "nyu_imgs/2021_0330_nyu_campus-pictures_jc_0022.jpg",
  "nyu_imgs/2021_0330_nyu_campus-pictures_jc_0063 (1).jpg",
  "nyu_imgs/2021_0330_nyu_campus-pictures_jc_0091 (1).jpg",
  "nyu_imgs/2021_0330_nyu_campus-pictures_jc_0103 (1).jpg",
  "nyu_imgs/2021_0330_nyu_campus-pictures_jc_0116 (2).jpg",
  "nyu_imgs/2021_0407_campus-pictures_jc_0022.jpg",
  "nyu_imgs/2021_0407_campus-pictures_jc_0042 (1).jpg",
  "nyu_imgs/2021_0407_campus-pictures_jc_0043.jpg",
  "nyu_imgs/2021_0407_campus-pictures_jc_0052 (1).jpg",
  "nyu_imgs/2021_0407_campus-pictures_jc_0056 (1).jpg",
  "nyu_imgs/2021_0407_campus-pictures_jc_0069 (1).jpg",
  "nyu_imgs/2021_0407_campus-pictures_jc_0074.jpg",
  "nyu_imgs/2021_0407_campus-pictures_jc_0079.jpg",
  "nyu_imgs/2021_0407_campus-pictures_jc_0103.jpg",
  "nyu_imgs/2021_0407_campus-pictures_jc_0106.jpg",
  "nyu_imgs/2021_0407_campus-pictures_jc_0156 (1).jpg",
  "nyu_imgs/2021_0407_campus-pictures_jc_0159.jpg",
  "nyu_imgs/2021_0407_campus-pictures_jc_0172 (1).jpg",
  "nyu_imgs/2021_0407_campus-pictures_jc_0185 (1).jpg"
];

const pick = images[Math.floor(Math.random() * images.length)];
document.body.style.backgroundImage = `url("${pick}")`;
