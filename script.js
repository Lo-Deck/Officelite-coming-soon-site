const btnHeaderSubscribe = document.querySelectorAll('.header-button'); 
const btnSubscribe = document.querySelectorAll('.section-button');
const inputSelectCustom = document.querySelector('.value');
const selectListCustom = document.querySelector('.optList');
const optionCustom = document.querySelectorAll('.option');
const myForm = document.getElementById('myForm');
const selectDefault = document.getElementById('default-widget');
const selectCustom = document.getElementById('custom-widget');
const setTimeComing = document.querySelector('.title-time');
const setTimer = document.querySelectorAll('.setTimes');


/*DATE*/

let releaseDate = new Date();
releaseDate.setMonth(releaseDate.getMonth()+1);
releaseDate.setHours(8);
releaseDate.setMinutes(0);
releaseDate.setSeconds(0);

const arrayDate = releaseDate.toString().split(' ');
setTimeComing.innerHTML = `<span>Coming</span> ${arrayDate[2]} ${arrayDate[1]} ${arrayDate[3]}`

const differenceTime = releaseDate - new Date();

const days = Math.floor(differenceTime / (1000 * 60 * 60 * 24));
const hours = Math.floor((differenceTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));

let minutes = 0;
let secondes = 0;

const arrayTimer = [days, hours, minutes, secondes];

setInterval( () => {

    minutes = Math.floor(((releaseDate - new Date()) % (1000 * 60 * 60)) / (1000 * 60));
    secondes = Math.floor(((releaseDate - new Date()) % (1000 * 60)) / (1000));

    arrayTimer[2] = minutes;
    arrayTimer[3] = secondes;

    setTimer.forEach((item, index) => {

        item.innerText = `${arrayTimer[index]}`;
    
    });
    
}, 1000);




let subscription;

btnSubscribe.forEach( (item, index) => {

    item.addEventListener('click', () => {

        subscription = index;

    });


});


/*INDEX2*/

if(selectDefault && selectCustom)
{

    window.addEventListener("load", function () {

        selectDefault.classList.add('widget-hidden');
        selectCustom.classList.remove('widget-hidden');

    });

}


const url = window.location.href;
const regex = /plan=/;
let whichPlan = url.split(regex);
whichPlan = whichPlan.pop();


if(whichPlan)
{

    switch(whichPlan)
    {
        case 'basic':

            optionCustom[0].children[1].classList.add('checked');
            optionCustom[1].children[1].classList.remove('checked');
            optionCustom[2].children[1].classList.remove('checked');
            subscription = 0;
            selectDefault.value = selectDefault[0].value;
            inputSelectCustom.innerHTML = `${selectDefault.value} Pack <span>Free</span><span class="arrow"></span>`;
            break;

        case 'pro':

            optionCustom[1].children[1].classList.add('checked');
            optionCustom[0].children[1].classList.remove('checked');
            optionCustom[2].children[1].classList.remove('checked');
            subscription = 1;
            selectDefault.value = selectDefault[1].value;
            inputSelectCustom.innerHTML = `${selectDefault.value} Pack <span>$9.99</span><span class="arrow"></span>`;
            break;

        case 'ultimate':

            optionCustom[2].children[1].classList.add('checked');
            optionCustom[0].children[1].classList.remove('checked');
            optionCustom[1].children[1].classList.remove('checked');
            subscription = 2;
            selectDefault.value = selectDefault[2].value;
            inputSelectCustom.innerHTML = `${selectDefault.value} Pack <span>$19.99</span><span class="arrow"></span>`;
            break;
    }

}




let isClicked = false;

if(inputSelectCustom)
{

    inputSelectCustom.addEventListener('click', () => {

        isClicked = !isClicked;
        selectListCustom.classList.toggle('hidden');
        inputSelectCustom.children[1].style.transform = isClicked ? 'rotate(0deg)' : 'rotate(180deg)';

    });

}


optionCustom.forEach( (item, index) => {

    item.addEventListener('click', () => {

        for(let i = 0; i < optionCustom.length; i++)
        {

            if(i === index)
            {
                optionCustom[i].children[1].classList.add('checked');
                subscription = index;
                selectDefault.value = selectDefault[index].value;

                const price = (i) =>  {
                    if(i === 0)
                    {
                        return 'Free';
                    } 
                    else if(i === 1)
                    {
                        return '$9.99';
                    }
                    else if(i === 2)
                    {
                        return '$19.99';
                    }
                }; 

                inputSelectCustom.innerHTML = `${selectDefault.value} Pack <span>${price(i)}</span><span class="arrow"></span>`;
                inputSelectCustom.children[1].style.transform = 'rotate(0deg)';

            }
            else
            {
                optionCustom[i].children[1].classList.remove('checked');
                subscription = index;
            }

        }

    });

});



if(myForm)
{

    myForm.addEventListener('submit', (e) => {

        for(let i = 0; i < myForm.length-1; i++)
        {

            if(!myForm[i].validity.valid)
            {
                myForm[i].style.borderBottom = '0.0625rem solid #f05b5b';
                myForm[i].style.background = 'url(./images/sign-up/icon-cross.svg) no-repeat center right';
                myForm[i].style.color = '#f05b5b';
            }
            else
            {
                myForm[i].style.borderBottom = '0.0625rem solid hsla(227, 13%, 52%, 0.4)';
                myForm[i].style.background = '';
                myForm[i].style.color = '#747b95';
            }

        }
        
        e.preventDefault();

    });

}