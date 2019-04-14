const rootNode = document.getElementById('root');
const todoItems = [
	{isDone: false, id: 12345, description: 'Todo 1'}
];

const todoListData = storageGet('app_data');
const addButton = document.getElementById('addBtn');
const inputField = document.getElementById('input');
const taskContainer = document.getElementById('task_container');
const notification = document.getElementById('notification');
const currentP = ['main', 'add', 'modify'];
const element = [];
let id = [];

function show(nextP) {
	window.history.pushState('', '', `#/add/${id}`);
	currentP.forEach(function(page) {
		document.getElementById(page).style.display = 'none';
	}); 
	document.getElementById(nextP).style.display = 'block';
}

function getId() {
	for (let i = 1; i < arguments.length; i++) {
    let itemsId = arguments[i];
		if (itemsId.id > id) {
		id = itemsId;
		}
	}
	id++;
	return id;
}
//=============
function saveData(obj) {
	// obj = { isDone: bool, id: number, desc: string }
	todoItems.push(obj);
	storageAdd('app_data', todoItems);
}

function storageAdd(key, val) {
	const data = JSON.stringify(val);
	localStorage.getItem(key, data);
}

function storageGet(key) {
	return JSON.parse(localStorage.getItem(key));
}
//=============

function createE() {
	const localStorageEl = localStorage.getItem('element');
}

function addTask() {
	if(inputField.value) {
		createE(inputField.value);
		inputField.value = '';
		show('main');
	}
	notification.style.display = 'none';

}

function checkFn(check, done) {
	if(done) {
    check.classList.add('checked');
		check.src = 'assets/img/done-s.png';
		
		const listEl = check.parentNode;
    listEl.classList.add('checked');
    taskContainer.removeChild(listEl);
		taskContainer.appendChild(listEl);
	} else {
		check.classList.remove('checked');
		check.src = 'assets/img/todo-s.png';

		const listEl = check.parentNode;
		listEl.classList.remove('checked');
	}
}

// function deleteIcon() {
// }

function createList() {
	const listEl = document.getElementById('task_list').cloneNode(true);
	listEl.style.display = 'block';
	listEl.setAttribute('data-id', id);

	
}






// ////////////////////////////////////////////////////////////////


// todoListItem.addEventListener('click', function(e) {
// 	console.log(e.target);
// 	// todoListDiv.setAttribute("data-id", todoItems.length);    
// 	const id = e.target.dataset.id;
// 	window.history.pushState(null, null, `#/modify/${id}`);
	
// });


// function openPage(id) {
// 	document.querySelectorAll('.page').forEach( funciton(el) {
// 		if (id === el.style.id) {
// 			el.style.display = 'block';
// 		} else {
// 			el.style.display = 'none';
// 		}
// 	});
// };