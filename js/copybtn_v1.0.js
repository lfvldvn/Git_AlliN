function copyToClipBoard() {
	var content = document.getElementById('cupom');
	content.select();
	document.execCommand('copy');
	//alert("Copied!");
}