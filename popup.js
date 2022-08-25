window.onload = () => {
	wallet.addEventListener("click", async () => {
		icon.src = "check-icon.svg";
		navigator.clipboard.writeText("0x4A4c4016AA02e5795B75de931b292a8F9dDaf7d9");
		setInterval(() => {
			icon.src = "copy-icon.svg";
		}, 3000);
	});
};
