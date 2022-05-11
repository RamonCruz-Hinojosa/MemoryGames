//new memory game woohoo
const cardArray = [
  {
    name: "okaypepe",
    img: "images/okaypepe.jpg",
  },
  {
    name: "loops",
    img: "images/loops.jpg",
  },
  {
    name: "mickey",
    img: "images/mickey.jpg",
  },
  {
    name: "mushroomy",
    img: "images/mushroomy.png",
  },
  {
    name: "smeargle",
    img: "images/smeargle.png",
  },
  {
    name: "smugknifecat",
    img: "images/smug_knife_cat.jpg",
  },
  {
    name: "okaypepe",
    img: "images/okaypepe.jpg",
  },
  {
    name: "loops",
    img: "images/loops.jpg",
  },
  {
    name: "mickey",
    img: "images/mickey.jpg",
  },
  {
    name: "mushroomy",
    img: "images/mushroomy.png",
  },
  {
    name: "smeargle",
    img: "images/smeargle.png",
  },
  {
    name: "smugknifecat",
    img: "images/smug_knife_cat.jpg",
  },
];

cardArray.sort(() => 0.5 - Math.random());

const gridDisplay = document.querySelector("#grid");

function createBoard() {
  for (let i = 0; i < 10; i++) {
    const card = document.createElement("img");
    card.setAttribute("src", "images/yeahboi.jpg");
    card.setAttribute("data-id", i);
    console.log(card, i);
  }
}
createBoard();
