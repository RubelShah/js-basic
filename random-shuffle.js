
//Fisher-Yates Shuffle Algorithm Explanation
const points = [40, 100, 1, 5, 25, 10];

for (let i = points.length -1; i > 0; i--) {
  let j = Math.floor(Math.random() * (i+1));
  let k = points[i];
  console.log(j);//for the understaing the value of j

  points[i] = points[j];
  points[j] = k;// if we don't use k then we miss the original value of i;

  console.log(points )//this is print the new arry for every loop cycle;
}

// console.log(points)
