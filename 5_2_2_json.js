const jsonString = `
  {
 "list": [
  {
   "name": "Petr",
   "age": "20",
   "prof": "mechanic"
  },
  {
   "name": "Vova",
   "age": "60",
   "prof": "pilot"
  }
 ]
}
`;

const data = JSON.parse(jsonString);
const list = data.list;
resList = [];

list.forEach (
  function writeToList (person) {
    const name = person.name
    const age = person.age
    const prof = person.prof
  
  resList.push ({
    name: name,
    age: age,
    prof: prof
  });
});

const result = {
  list: resList
};

console.log(result);