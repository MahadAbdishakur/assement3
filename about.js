console.log("hello world");



function handleSubmit(evt) {
	evt.preventDefault();
	alert("the message has been sent succesfully");
	// console.log('form submit');
}
let duckpic = document.getElementById("duck");
const duckinfo =() =>{
alert("ducks are the cutests natural preadtors to bread other then humans");
}
duckpic.addEventListener("mouseover", duckinfo);


form.addEventListener('submit', handleSubmit);