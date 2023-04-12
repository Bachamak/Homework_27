// Створити функцію mapping(array/obj,callback) для обектів та масивів.

const array_1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const users = [
    { id: 11, name: 'Adam', age: 23, group: 'editor' },
    { id: 47, name: 'John', age: 28, group: 'admin' },
    { id: 85, name: 'William', age: 34, group: 'editor' },
    { id: 97, name: 'Oliver', age: 28, group: 'admin' }
  ];
function mapping(arrObj, callback) {
	let result = [];

	if (Array.isArray(arrObj)) {
		for (let i = 0; i < arrObj.length; i++) {
			const num = arrObj[i];
			result.push(callback(num));
		}
	} else if ( typeof arrObj === 'object') {
		for ( let i = 0; i < arrObj.length; i++) {
			const age = arrObj[i].age;
			result.push(callback(age));
		}
	} else {
		alert("'Massive or object isn't right");
	}
	
	return result;
}

function cb_1 (num) {
	return num ** 2;
}

function cb_2 (age) {
	return age * 2;
}

let result_1 = mapping(array_1, cb_1);
let result_2 = mapping(users, cb_2);

console.log(result_1);
console.log(result_2);

// Створити функцію filter(array, callback) "аналог Array.filter" але на відмнну повертає обект з двома масивами right и wrong const { right, wrong } = filter(array, callback)

const array_2 = [1, 20931, 'ff', NaN, 24, Boolean, 'ajj32u', '', '%', -13, 0, 'Jack'];

function filter(arr, callback) {
	const rightArr = [];
	const wrongArr = [];
	for (let i = 0; i < arr.length; i++) {
	  callback(arr[i]) ? rightArr.push(arr[i]) : wrongArr.push(arr[i]);
	}
	return {
		rightArr, wrongArr
	};
  }
let result_3 = filter(array_2, (x) => typeof x == 'number');
console.log(result_3)

