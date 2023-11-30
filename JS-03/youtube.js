let youtubeLink = prompt("Введіть посилання на відео в YouTube:");
const youtubeReg = /watch\W{1}v\W{1}(\w{11})/;;
let match = youtubeLink.match(youtubeReg);
let videoEmbedCode = `<iframe width="560" height="315" src="https://www.youtube.com/embed/${match[1]}" frameborder="0" allowfullscreen></iframe>`;
document.write(videoEmbedCode);



