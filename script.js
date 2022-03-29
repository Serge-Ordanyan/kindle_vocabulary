let resultByContents = textContent.map((w)=>{

    let arr = w.split(' ');
     paragraph.innerHTML += arr.map((a)=>`<span id="spanIk" onClick="getContents(this)">${a}</span>`).join('&nbsp');
   
})


