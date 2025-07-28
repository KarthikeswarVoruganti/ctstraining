let items = [250,645,300,900,50];
let offer;
let newitems=[];
for(let i=0;i<items.length;i++)
{
  offer = items[i]/10;
  items[i] = items[i]-offer;
  newitems.unshift(items[i]);
}

console.log(newitems);