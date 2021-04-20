let tony ={
    name :"Tony",
    lastname : 'Stark',
    friends : ['Steve','Bruce','Peter'],
    age: 36,
    isAvenger:true,
    abc:undefined,

    address:{
        State: 'New york',
        city: 'long  island'

    },
    saysHi: function fn(){
        console.log("Iron man says hi");
        return "Part of journey is the end"
    }

}
// console.log(tony.name);
// console.log(tony.friends[1]);
//  console.log(tony.age);
//  console.log(tony.isAvenger);
//  console.log(tony.address.city);
//  console.log(tony.saysHi());
//  console.log(tony.anything);
//2 string method
// console.log(tony['name']);
// console.log(tony['friends'][0]);
// console.log(tony['age']);
// console.log(tony['isAvenger']);
// console.log(tony['address']['city']);
// console.log(tony['saysHi']());

let karr = Object.keys(tony);
console.log(karr);
// for(let k in tony)
// {
//     console.log(tony[k]);
// }
for(let i=0;i<karr.length;i++)
{
    // let key = karr[i];
    // console.log(key);
    console.log(tony[karr[i]]);
}


