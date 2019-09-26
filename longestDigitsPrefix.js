function longD(ej){
  l = ej.length;
  var fin = 1;
  var r = null;
  ent = 0;
  o = 0;
  for(null; fin<= l; fin++){
    try{
      r = parseInt(ej.substring(o.fin));
    }
    catch{
      fin --;
      r = parseInt(ej.substring(o.fin));
      ent =1;
      break;
    }
  }
  return r
}
console.log(longD("125553aal"));
