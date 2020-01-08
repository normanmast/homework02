

//var flavor= ['Vanilla', 'Chocolate', 'Blueberry', 'Mint'];
//var index = 0;

//while (index < flavor.length) alert('You Like......' + flavor[index++]) ;
 
//for (var index=0; index < flavor.length; alert('You Like......' + flavor[index++])) ;

var zooAnimals = ['Zebra', 'Rhino', 'Giraffe', 'Owl']
zooAnimals[zooAnimals.length] = prompt("Enter Animal");
for (var index=0; index < zooAnimals.length; alert('You Like......' + zooAnimals[index++])) ;
for (var index=zooAnimals.length; index>0; alert('You Like......' + zooAnimals[--index].toLowerCase())) ;


