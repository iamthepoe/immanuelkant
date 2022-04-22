document.querySelector('.crpura-portrait').addEventListener('mouseover', ()=>{
	document.querySelector('.crpura-portrait-image').style.marginTop = "-122px";
	document.querySelector('.btn-crpura').hidden = false;
});

document.querySelector('.crpura-portrait').addEventListener('mouseout', ()=>{
	document.querySelector('.crpura-portrait-image').style.marginTop = "0px";
	document.querySelector('.btn-crpura').hidden = true;
});