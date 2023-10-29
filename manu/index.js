const mobileCta = document.getElementById('mobile-cta')
    nav = document.querySelector('nav')
    mobileExit = document.getElementById('mobile-exit');


    mobileCta.addEventListener('click', ()=>{
      nav.classList.add('mobile-btn')
    })

    mobileExit.addEventListener('click', ()=>{
      nav.classList.remove('mobile-btn')
    })


    document.querySelector("#root > div.App > div > div > div.DashboardV2-content > div.DashboardV2-token-cards > div.stats-wrapper.stats-wrapper--gmx > div:nth-child(2) > div.stats-piechart > div > svg > g > g:nth-child(1) > path")
    