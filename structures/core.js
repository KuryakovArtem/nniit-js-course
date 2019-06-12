//Напишите функцию, которая делает первый символ строки заглавным (задание со звездочкой - капитализируйте каждое слово)
function capitalize(str) {
  return str[0].toUpperCase() +str.slice(1);  
}

//Напишите функцию, которая вернет строку, усеченную до n символов и добавляет в конец многоточие (если n > длина строки - ничего делать не надо)
function truncate(str, n) {
  if (str.length>n){
    return str.substr(0,n)+'...';
  }else {
    return str;
  }
}

//Определите, пуст ли объект
function isEmpty(obj) {
  for(var key in obj)
    {
        return false;
    }
    return true;
}

//Напишите функцию, умножающую численные свойства на 2
function multiply(obj) {
  for (var key in obj) {
    let n=obj[key];
    if (!isNaN(n)&&isFinite(n)) {
      obj[key] *= 2;
    }
  }
  return obj;
}

//Напишите функцию, считающую сумму всех элементов массива (желательно использовать reduce)
function sumArr(arr) {
  return arr.reduce((csum,nextitem)=>{return csum+nextitem});
}

//Напишите функцию, определяющую, является ли данное слово палиндромом
function isPali(str) {
  return str.toLowerCase().split('').reverse().join('')==str;
}

module.exports = {
  capitalize,
  truncate,
  isEmpty,
  multiply,
  sumArr,
  isPali
};
