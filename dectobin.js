let a = 26;
function dtb(a)
{
    binary = 0;
    pv=1;
    
    while(a>0){
        let rem = a%2;
        binary = binary + rem*pv;
        pv=pv*10;
        a= Math.floor(a/2);
    }
    return binary;
}
let ans = dtb(a);
console.log(ans);