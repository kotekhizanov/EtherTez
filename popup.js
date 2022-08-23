window.onload = () => {
	wallet.addEventListener("click", async () => {
		console.log("z");
		icon.src = "check-icon.svg";
		navigator.clipboard.writeText("0x4A4c4016AA02e5795B75de931b292a8F9dDaf7d9");
		console.log("u");
		setInterval(() => {
			icon.src = "copy-icon.svg";
		}, 3000);
		console.log("f");
	});
};
