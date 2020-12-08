let array1 = ['python','javascript','java','python','r','c','c++']
let array2 = []
let count=0
for(let i=0;i<array1.length;i++)
{
    document.write(array1[i],"<br/>")
}
document.write("<br>")
document.write("<h4> removed duplicate array </h4> ");

for(let i=0;i<array1.length;i++)
{
   if(array2.indexOf(array1[i]) === -1)
   {
       array2.push(array1[i])

   }
}
for(let i=0;i<array2.length;i++)
{
    document.write(array2[i],"<br/>")
}



