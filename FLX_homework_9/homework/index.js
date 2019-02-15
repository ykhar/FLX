function findTypes () {
  var arrType = [];
    for (var i = 0; i < arguments.length; i++) {
      arrType.push(typeof(arguments[i]));
    }
  return arrType;
}
findTypes(null, 5, 'hello'); 

function executeforEach(arr, func) {
  for (var i = 0; i < arr.length; i++) {
    func(arr[i]);
  }
}
executeforEach([1,2,3], function(el) { 
  console.log(el); 
}); 

function mapArray(arr, func) {
  var newArr = [];
  executeforEach(arr, function(el) {
    newArr.push(func(el));
  });
  return newArr;
}
mapArray([2, 5, 8], function(el) { 
  return el + 3;
});

function filterArray(arr, func) {
  var newArr = [];
  executeforEach(arr, function(el) {
    if (func(el)) {
      newArr.push(el);
    }
  });
  return newArr;
}

filterArray([2, 5, 8], function(el) { 
  return el > 3;
});

var userArr = [
  {
    "_id": "5b5e3168c6bf40f2c1235cd6",
    "index": 0,
    "age": 39,
    "eyeColor": "green",
    "name": "Stein",
    "favoriteFruit": "apple"
  },
  {
    "_id": "5b5e3168e328c0d72e4f27d8",
    "index": 1,
    "age": 38,
    "eyeColor": "blue",
    "name": "Cortez",
    "favoriteFruit": "strawberry"
  },
  {
    "_id": "5b5e3168cc79132b631c666a",
    "index": 2,
    "age": 2,
    "eyeColor": "blue",
    "name": "Suzette",
    "favoriteFruit": "apple"
  },
  {
    "_id": "5b5e31682093adcc6cd0dde5",
    "index": 3,
    "age": 19,
    "eyeColor": "green",
    "name": "George",
    "favoriteFruit": "banana"
  }
];

function getAmountOfAdultPeople (data) {
  return filterArray(data, function(el) {
    return el.age >= 18;
  }).length;
}  
getAmountOfAdultPeople(userArr);

function getGreenAdultBananaLovers(data) {
  var newArr = [];
  filterArray (data, function(el) {
    if (el.age >= 18 && el.favoriteFruit === 'banana' && el.eyeColor === 'green') {
      newArr.push(el.name);
    }
  });
  return newArr;
}
getGreenAdultBananaLovers(userArr);

function keys(keyObj) {
  var arr = [];
  for (var key in keyObj) {
    arr.push(key);
  }
  return arr;
}
keys({keyOne: 1, keyTwo: 2, keyThree: 3});

function values(obj) {
  var arr = [];
  for (var value in obj) {
    arr.push(obj[value]);
  }
  return arr;
}
values({keyOne: 1, keyTwo: 2, keyThree: 3});

function showFormattedDate(date) {
  var monthArr = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Auп', 'Sep', 'Oct', 'Nov', 'Dec'];
  return `Date: ${date.getDate()} of ${monthArr[date.getMonth()]}, ${date.getFullYear()}`;
}
showFormattedDate(new Date('2019-01-27T01:10:00'));

function isEvenYear(date) {
  var year = date.getFullYear();
  return year % 2 === 0;
}
isEvenYear(new Date('2019-01-27T01:10:00'));

function isEvenMonth(date) {
  var month = date.getMonth();
  return month % 1 === 0;
}
isEvenMonth(new Date('2019-02-27T01:10:00'));