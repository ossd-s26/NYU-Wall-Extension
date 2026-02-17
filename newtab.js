const imageCount = 24;
const pick = `nyu_imgs/${Math.floor(Math.random() * imageCount) + 1}.jpg`;
document.body.style.backgroundImage = `url("${pick}")`;