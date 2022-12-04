
const frutas1 = ['Manga', 'Banana','Morango'];
console.log(frutas1, frutas1.length);
console.log(frutas1.pop());
console.log(frutas1, frutas1.length);
frutas1.push('Pera');
console.log(frutas1);
for(let start =0; start<frutas1.length; start++) {
  console.log(frutas1[start]);
} 
let start =0; 
while(start<frutas1.length){
  console.log(frutas1[start]);
  start++;
}
frutas1.forEach((fruta,index,array)=>{
  console.log(fruta,index,array)
});

