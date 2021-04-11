const btn = document.querySelector("button"); 
const resultNode = document.querySelector('.result');

function useRequest (width, height){
  if((width<=300) && (width>=100) && (height<=300) && (height>=100)){
    url = `https://picsum.photos/${width}/${height}`
    console.log(url)
    fetch (url)
      .then((response) =>{
        console.log(response.url);
        return response.url;
    })
      .then((data) => {
            const picture = `
            <div class="card">
              <img src="${data}" class="card-image"/>
            </div>
      `;
      resultNode.innerHTML = picture;
  })
      .catch((error) => {console.log('error', error)});

  } else{
    resultNode.innerHTML = ("Одно из чисел вне диапазона от 100 до 300");
  }
}

btn.addEventListener("click", () => {
  const width = document.querySelector(".width").value;
  const height = document.querySelector(".height").value;
  useRequest(width, height);
});