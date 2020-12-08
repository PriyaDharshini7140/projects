let array_1 = [1,2,3,4,5]
let sum=0
let product=1
for(let i=0; i<array_1.length;i++)
{
     sum += array_1[i]
}
document.write("sum of the array : ",sum,"<br/>")

for(let i=0; i<array_1.length;i++)
{
     product *= array_1[i]
}
document.write("product of the array : ",product,"<br/>")

