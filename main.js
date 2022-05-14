var slideIndex = 1;
var rotation = 0;
var click = 0;

showSlides(slideIndex);
window.addEventListener('load', (event) => {
    rotation = 0;

});

//גלריה
function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    if (n > slides.length) {
        slideIndex = 1
    }
    if (n < 1) {
        slideIndex = slides.length
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}


//סיבוב תמונה
function rotateImg() {
    click += 1;
    rotation += 90;
    if (rotation === 360) {
        rotation = 0;
    }
    document.querySelector("#img").style.transform = `rotate(${rotation}deg)`;


}

//בדיקות מייל
function witheb(str)
{
    return (/[\u0590-\u05FF]/).test(str);
}

function onlyenglish()
{
    let mail = document.getElementById("email").value;
    let flag=1;
    for(let char of mail) {
         if(witheb(char)||char==' '||char==',')
         {
          flag=0;
         }
    }
    if(!flag)
        alert("הכתובת תיהיה רק באנגלית")
}

function isshtrudelafter3()
{
    let mail = document.getElementById("email").value;
   let index=0;
    for(let char of mail)
    {
        if (char=='@')
        {
            if(index<=2||index==mail.length-1)
            {
                window.alert("השטרודל יהיה רק אחרי התו השלישי ")
            }
        }
        index+=1;
    }

}

function nopointfirstorlast()
{
    let mail = document.getElementById("email").value;

    if(mail[0]=='.'||mail[mail.length-1]=='.')
    {
        alert("הנקודה לא יכולה להיות בתחילת משפט ולא בסוף משפט")
    }

}

function y2spacesbeforepoint()
{
    let mail = document.getElementById("email").value;
    let counter=0;
    let index=0
    let flag=0;
    for(let char of mail)
    {

        if(flag!=0)
        {
            counter++;
        }
        if (char=='@')
        {
            flag=1;
        }
        if (char=='.')
        {
            if(counter<=2)
            {
                alert("לפחות שתי רווחים בין השטרודל לנקודה")
            }
        }
        index+=1
    }

}

function only1point()
{
    let mail = document.getElementById("email").value;
    let counter=0;
    for(let char of mail)
        if (char=='.')
            counter+=1
    if(char==0)
        alert("אפשר רק נקודה אחת במייל")

}

function only1shtrudal()
{
    let mail = document.getElementById("email").value;
    let counter=0;
    for(let char of email)
        if (char=='@')
            counter+=1
    if(counter!=1)
        alert("אפשר רק שטרודל אחד במייל")

}

function atleast6()
{
var email = document.getElementById("email").value;

if (email.length<6)
{
alert("מייל חייב להכיל לפחות 6 תווים")
    }
}
//בדיקה האם סומן מין מסוים
function putgender() {
    var gender = document.getElementsByName("gender");
    if (!gender[0].checked && !gender[1].checked) {
        alert("לא מילאת שום מגדר")
    }
}
//בדיקה אם נבחר תאריך
function didntputdate(){
var date=document.getElementById('date').value;
if (date==""){
    alert("לא הכנסת תאריך")
}
}


function is_valid()
{
    atleast6();
    only1shtrudal();
    isshtrudelafter3();
    y2spacesbeforepoint();
    only1point();
    nopointfirstorlast();
    onlyenglish();
    putgender();
    didntputdate();

}