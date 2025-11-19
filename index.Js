console.log("hello")
let prases = [
{text:'отправить другу смешную гифку', image:'./image/1.gif'},
{text:'посмотреть интересный сериал',image:'./image/2.png'},
{text:'разобраться , о чем поют рэперы',image:'./image/3.png'},
{text:'смотреть интересный блок',image:'./image/4.png'},
{text:'раставить книги на полке по цвету',image:'./image/5.png'},
{text:'чат с друзьями в Telegram',image:'./image/6.png'},
]

// let userData = {name :'Maria',
//                     age:24  ,  
//                     city:'Ufa'};

// console.log(userData);                    
// console.log(userData.name);
// console.log(userData.age);
// console.log(userData.city);



let button = document.querySelector('.button');
console.log(button);
let phrase =document.querySelector('.phrase');
console.log(phrase);
let image=document.querySelector('.image');
console.log(image);

// let randIndex = Math.floor(Math.random() * prases.length);
//  console.log(randIndex);

// console.log(prases[randIndex]);

function getRandomElement(){
    let randIndex = Math.floor(Math.random() * prases.length);
    console.log(randIndex);
    console.log(prases[randIndex]);
    console.log(prases[randIndex].text);
    phrase.textContent = prases[randIndex].text;
    image.src = prases[randIndex].image;
}

button.addEventListener('click',getRandomElement);


// getRandomElement();


// console.log(prases)

// let i = 0;
// while(i<6){
//     console.log(prases[i])
//     i = i + 1;
// }
  
// let a = 0;
// while (a<100){
//     console.log(a)
//     a = a + 1
// }

// for (let i = 1; i < 100; i = i + 2){
//     console.log(i);
// }

// for (let i = 0; i <= prases.lengtn; i = i + 1){
//     console.log(prases[i]);
// }

// function sethello (){
//     console.log('hello,Alex!')
// }

// for (let k = 0; k <= 1000; k = k + 1){
//     sethello();
// }

// function sethello(name){
//     console.log('hello,',name);
// }

// sethello('kola');
// sethello('pepsi');
// sethello('fanta');

// function sethello(prases){
//     console.log('Не писать код,а',prases);
// }

//  sethello(prases[0]);
// sethello(prases[1]);
// sethello(prases[2]);
// sethello(prases[3]);
// sethello(prases[4]);
// sethello(prases[5]);
// sethello(prases[6]);



// for(let i = prases.length -1; i>=0;i = i -1){
//     sethello(prases[i]);
// }

// function setS(a,b){
// s = a*b;
// return s ;
    // console.log('площядь треугольника =',a *b);
//  }


// setSRoom(20,30);
// console.log('общая площядь квартиры =',setSRoom,'m2')
// setS (10,10);

//     function setP(a,d){
//         P=(a+d)*2;
//     return(a+d)*2;
// }
        // console.log('периметр прямоугол =',(a+d));

    

//  setPerRoom = (setP(20,15) + setP(10,30) + setP(5,30) + setP(5,10))/ 4;
// function setPRoom(a,d,f,c){
    

// console.log('общая плошадь квартиры =',setPRoom()) ;   
// }
