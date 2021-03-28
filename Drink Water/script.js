const smallCups = document.querySelectorAll('.cup-small');
const liters = document.getElementById('litres');
const percentage = document.getElementById('percentage');
const remained = document.getElementById('remained');

updateBigCup();

smallCups.forEach((cup,idx) => {
    cup.addEventListener('click',() => highlightCups(idx));
})

function highlightCups(idx){
    if(smallCups[idx].classList.contains('full') && !smallCups[idx+1].classList.contains('full')){
        idx--;
    }
    smallCups.forEach((cup, idx2) => {
        if(idx2 <= idx){
            cup.classList.add('full');
        } else {
            cup.classList.remove('full');
        }
    })
    updateBigCup();
}

function updateBigCup(){
    const fullCups = document.querySelectorAll('.cup-small.full').length;
    const totalCups = smallCups.length;
    const per = (fullCups/totalCups)*100;
    if(fullCups === 0){
        percentage.style.visibility = 'hidden';
        percentage.style.height = 0;
    } else {
        percentage.style.visibility = 'visible';
        percentage.innerText = `${per}%`
        percentage.style.height = `${per}%`
    }

    if(fullCups === totalCups){
        remained.style.visibility = 'hidden';
        remained.style.height = 0;
    } else {
        remained.style.visibility = 'visible';
        liters.innerText = `${(totalCups - fullCups)*0.25}L`;
    } 
}