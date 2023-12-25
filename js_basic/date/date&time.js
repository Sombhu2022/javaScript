let setHour=document.getElementById('hour')
let setMin=document.getElementById('min')
let setSec = document.getElementById('sec')
let setAm=document.getElementById('am-pm')
let setSign =document.getElementById('sign')
let setDate=document.getElementById('date')
let setDay=document.getElementById('day')
//get time now



let timeHandler=()=>{
    let date = new Date()
    
    let nowDate=date.getDate()

    let dayIndex=date.getDay()
    let dayName = ['Sun','Mon','Tus','Wed','Thu','Fri','Sat']
    let nowDay=dayName[dayIndex]

    let nowHour=date.getHours()
    let nowMinute=date.getMinutes()
    let nowSecond=date.getSeconds()
    
    if (nowHour > 12){
        nowHour = nowHour-12;
        setAm.textContent='PM'
        setSign.innerText='🌙'
    }
    else if(nowHour == 0){
        nowHour=12
        setAm.textContent='AM'
        setSign.innerText='🌤️'

    }
    else{
        setAm.textContent='AM'
        setSign.innerText='⛅'


    }



    setHour.textContent = nowHour
    setMin.textContent =nowMinute
    setSec.textContent=nowSecond
    setDate.textContent=nowDate
    setDay.textContent= nowDay

   
}
setInterval(timeHandler,1000)

let alarm=document.getElementById('alarm')

alarm.addEventListener('click',function(){
    let givenHour=prompt('enter hour:')
    let givenMin=prompt('enter minute:')
    

})
