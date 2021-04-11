const  parser = new DOMParser();

const xmlString = `
<list>
  <student>
    <name lang="en">
      <first>Ivan</first>
      <second>Ivanov</second>
    </name>
    <age>35</age>
    <prof>teacher</prof>
  </student>
  <student>
    <name lang="ru">
      <first>Петр</first>
      <second>Петров</second>
    </name>
    <age>58</age>
    <prof>driver</prof>
  </student>
</list>
              `;


const xmlDom = parser.parseFromString(xmlString, "text/xml");

const list = xmlDom.querySelector("list");
const students = xmlDom.querySelectorAll("student");
let resultList = [];

students.forEach (
function whriteToList (student) {
  const studentName = student.querySelector("name");
  const studentFirstName = studentName.querySelector("first");
  const studentSecondName = studentName.querySelector("second");
  const studentAge = student.querySelector("age");
  const studentProfession = student.querySelector("prof");
  const studentLang = studentName.getAttribute("lang");
  
  resultList.push({
    name: studentFirstName.textContent + " " + studentSecondName.textContent, 
    age: studentAge.textContent,
    prof: studentProfession.textContent,
    lang: studentLang, 
    
  });
});

const result = {
  list: resultList
};

console.log(result);

