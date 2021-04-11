
const btn = document.querySelector("button"); 
const resultNode = document.querySelector('.result');

function useRequest (){
  const xhr = new XMLHttpRequest();
  inputNumber =  document.querySelector("input").value;
  
  if (inputNumber>=1 && inputNumber <=10){
    url = `https://picsum.photos/v2/list?limit=${inputNumber}`
    console.log(url);
    xhr.open('GET', url, true);
    xhr.onload = function() {
      if (xhr.status != 200) {
        console.log('Статус ответа: ', xhr.status);
      } else {
        const result = JSON.parse(xhr.response);
        pictureBlock = ''
        result.forEach (item => {
            const picture = `
            <div class="card">
              <img src="${item.download_url}" class="card-image"/>
              <p>${item.author}</p>
            </div>
      `;
          pictureBlock = pictureBlock + picture
        });

        
        resultNode.innerHTML = pictureBlock
      };
    };
    xhr.send();
  } else {
    resultNode.innerHTML = "Число вне диапазона от 1 до 10"
  };
  
  
};

    
 
    
btn.addEventListener("click", () => {
  useRequest();
});