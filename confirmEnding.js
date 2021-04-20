function confirmEnding(str,target){
    let arr=str.split('');
    let targetString = arr[arr.length-1];
    let tar= targetString.slice(-target.length);
if(tar==target)
{
  return true;
}
else
{
  return false;
}
}

let ret = confirmEnding("Bastian", "n");
console.log(ret);
    

