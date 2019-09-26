function adj(ej3){
  a = 0;
  b = 0;
  var cont = [];
  for( i=0; i<ej3.length-1; i++){
      a= ej3[i]*ej3[i+1];
      cont[i] = a;

  }
  for(j = 0; j<cont.length; j++){
      if(cont[j]>b)
      b = cont[j];
  }
  return b;
}
console.log(adj([3,6,-2,7,3]));
