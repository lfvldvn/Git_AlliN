function cupomcopy() {
	let cupomcopiado = document.getElementById('cupom')
	cupomcopiado.select();
	cupomcopiado.setSelectionRange(0, 99999)
	document.execCommand("copy");
	alert("Seu cupom é: " + cupomcopiado.value);
}