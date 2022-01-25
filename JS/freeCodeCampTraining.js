
// Manipulating Complex Objects
const myMusic = [
  {
    'artist': 'Billy Joel',
    'title': 'Piano Man',
    'release_year': 1973,
    'formats': [
      'CD',
      '8T',
      'LP'
    ],
    'gold': true
  },

  {
    'artist': 'Samurai',
    'title': 'Never Fade away',
    'release_year': 2020,
    'formats': [
      'SP',
      'LP',
    ]
  }
];

// Accessing Nested Objects
const myStorage = {
  "car": {
    "inside": {
      "glove box": "maps",
      "passenger seat": "crumbs"
    },
    "outside": {
      "trunk": "jack"
    }
  }
};

const gloveBoxContents = myStorage.car.inside["glove box"];



// Accessing Nested Arrays
const myPlants = [
  {
    type: "flowers",
    list: [
      "rose",
      "tulip",
      "dandelion"
    ]
  },
  {
    type: "trees",
    list: [
      "fir",
      "pine",
      "birch"
    ]
  }
];

const secondTree = myPlants[1].list[1];

// Iterate with JavaScript While Loops
const myArray = [];
let i = 0;
while (i <= 5) {
  myArray.unshift(i);
  i++;
}
console.log(myArray);

// Iterate with JavaScript For Loops
const myArray = [];
for (let i = 1; i <= 5; i++) {
  myArray.push(i);
}

// Iterate Odd Numbers With a For Loop
const myArray = [];
for (let i = 1; i < 11; i += 2) {
  myArray.push(i);
}
console.log(myArray)

// Count Backwards With a For Loop
const myArray = [];
for (let i = 9; i > 0; i -= 2){
  myArray.push(i)
}
console.log(myArray)

// Iterate Through an Array with a For Loop

const myArr = [2, 3, 4, 5, 6];
let total = 0;
for (let i = 0; i < myArr.length; i++) {
  console.log(  total += myArr[i]);
}
