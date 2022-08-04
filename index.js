// Declaracion de botones de timing
const dailyBtn = document.getElementById('daily')
const weeklyBtn = document.getElementById('weekly')
const monthlyBtn = document.getElementById('monthly')

const cardsContainer = document.getElementById('cards-container') 


dailyBtn.addEventListener('click', ()=>{
  renderCards(JSON, 'daily')
  dailyBtn.classList.add('selected')
  weeklyBtn.classList.remove('selected')
  monthlyBtn.classList.remove('selected')
})
monthlyBtn.addEventListener('click', ()=>{
  renderCards(JSON, 'monthly')
  dailyBtn.classList.remove('selected')
  weeklyBtn.classList.remove('selected')
  monthlyBtn.classList.add('selected')
})
weeklyBtn.addEventListener('click', ()=>{
  renderCards(JSON, 'weekly')
  dailyBtn.classList.remove('selected')
  weeklyBtn.classList.add('selected')
  monthlyBtn.classList.remove('selected')
})

function renderCards (data, time){
  cardsContainer.innerHTML = ''

  data.forEach(data => {
    let title = ''
    data.title.includes(' ') 
      ? title = data.title.replace(' ', '')
      : title = data.title
      
    const article = document.createElement('article')
    article.classList.add('card', `card--${title.toLowerCase()}`)

    if (time === 'daily') {
      article.innerHTML =`
    <div class="card__info ">
      <p class="info--name">${data.title}</p>
      <p class="info--hours">${data.timeframes.daily.current}hrs</p>
      <p class="info--last">yesterday: ${data.timeframes.daily.previous}hrs</p>
    </div>`
      
    } else if (time === 'weekly') {
      article.innerHTML =`
    <div class="card__info ">
      <p class="info--name">${data.title}</p>
      <p class="info--hours">${data.timeframes.weekly.current}hrs</p>
      <p class="info--last">Last week: ${data.timeframes.weekly.previous}hrs</p>
    </div>`
    }else{
      article.innerHTML =`
    <div class="card__info ">
      <p class="info--name">${data.title}</p>
      <p class="info--hours">${data.timeframes.monthly.current}hrs</p>
      <p class="info--last">Last month: ${data.timeframes.monthly.previous}hrs</p>
    </div>`
    }

    cardsContainer.appendChild(article)
  })
}

renderCards(JSON)
