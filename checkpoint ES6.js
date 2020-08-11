const pets=[
  {name: "Max",type:"dog", bornOn:2018},
  { name: "Angel", type: "cat", bornOn:2015 },
  { name: "Jasper", type: "dog", bornOn:2016 }
];

var petWithAge=pets.map(pet=>Date().getFullYear() - pet.bornOn)
console.log(petWithAge) 
var jasper=pets.find(pet=>{return pet.name=="Jasper"})
var dogs=pets.filter(pet=>{return pet.type=="dog"})