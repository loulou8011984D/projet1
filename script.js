const sendBtn = document.querySelector(".send-button");
const container = document.querySelector(".container-notification");
const form = document.querySelector(".form-horizontal");
const title = document.querySelector(".section-header");
console.log(container);

form.onsubmit = function(event) {
	event.preventDefault();
};

sendBtn.addEventListener("click", function(){
	const notification = document.createElement("div");
    notification.classList.add("notif");
	notification.innerText = "Votre commande a été prise en compte";
	title.innerText = "Commande prise en compte"
	container.appendChild(notification);
	setTimeout(function(){
		notification.remove();
}, 3000);
})

