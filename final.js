const btn = document.querySelector("button"); 
const resultNode = document.querySelector('.result');
let page_int;
let limit_int;



function useRequest (page_int, limit_int, page, limit) {
  if(page_int===true && limit_int===true) {
    url = `https://picsum.photos/v2/list?page=${page}&limit=${limit}`
    const xhr = new XMLHttpRequest();
    xhr.open('GET', url, true);
    
    xhr.onload = function() {
    if (xhr.status != 200) {
      console.log('Статус ответа: ', xhr.status);
    } else {
      const result = JSON.parse(xhr.response);
      writeToLocalStorage (xhr.response);
      displayResult(result);
    }
  };
    
    xhr.onerror = function() {
    console.log('Ошибка! Статус ответа: ', xhr.status);
  };
  
  xhr.send();


  } else if (page_int===false && limit_int===true){
    
      resultNode.innerHTML = ("Номер страницы вне диапазона от 1 до 10");
    
  } else if (page_int===true && limit_int===false) {
    
      resultNode.innerHTML = ("Лимит вне диапазона от 1 до 10");
  } else {
    
      resultNode.innerHTML = ("Номер страницы и лимит вне диапазона от 1 до 10");
  }
};

// функция записывает url картинок в local storage

function writeToLocalStorage(apiData) {
  localStorage.clear();
  console.log('Записано в localStorage:', apiData)
  localStorage.setItem('previousSuccessfulRequest', JSON.stringify(apiData));
};

// функция отображает картинки на экране
function displayResult(apiData) {
  
  
  let cards = '';
  
  apiData.forEach(item => {
    const cardBlock = `
      <div class="card">
        <img src="${item.download_url}" class="card-image"/>
      </div>
    `;
    cards = cards + cardBlock;
  });
  
    
  resultNode.innerHTML = cards;
};

const jsonFromLocalStorage = JSON.parse(localStorage.getItem('previousSuccessfulRequest'));
console.log('Хранится в localStorage:', jsonFromLocalStorage);

if (jsonFromLocalStorage) {
  
  displayResult(JSON.parse(jsonFromLocalStorage));
};

btn.addEventListener("click", () => {
  const page = document.querySelector(".page").value;
  const limit = document.querySelector(".limit").value;
  if((page<=10) && (page>=1) && (limit<=10) && (limit>=1)){
      page_int = true;
      limit_int = true;
  } else if (((page>10) || (page<1)) && ((limit<=10) && (limit>=1))) {
      page_int = false;
      limit_int = true;
  } else if(((limit>10) || (limit<1)) && ((page<=10) && (page>=1))) {
      page_int = true;
      limit_int = false;
  } else {
      page_int = false;
      limit_int = false;
  }
  useRequest(page_int, limit_int, page, limit);
});