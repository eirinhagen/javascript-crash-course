// functions

function addNums(num1,num2) {
    console.log(num1 + num2)
 }

 addNums(2,2)

 const addNumbers =( n1 = 1, n2 = 2)=>  n1 + n2;
  console.log(addNumbers()) //arrow function
 
  const kisa = x => "myaw";
  console.log(kisa()) //af 2




  const myFriends = ["dasha","nadja","elisa"]
  myFriends.forEach((friend)=>console.log(friend))

  const friends = [
    {name:"Dasha",
    face:"beautiful"},
    {name:"Nadja",
    face:"beautiful"},
    {name:"Elisa",
    face:"beautiful"}
  ];

  friends.forEach((friend)=>console.log(friend.face));
  