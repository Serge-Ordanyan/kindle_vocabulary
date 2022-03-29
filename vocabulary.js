let  res;

let textMeaning = {
    'foundation':'հիմք',
    'programs':'Հավելվածներ',
    'all':'Ամբողջ',
    'organization':'Համակարգ',
    'variables/functions':'փոփոխականներ և ֆունկցիաներ',
    'never':'Երբեք' ,
    'nested':'ներկառուցված',
    'power':'ուք',
    'builds':'կառուցված է',



    

};





let testArr = [];

let getContents = (e)=>{

      e.onclick = '';
        console.log(e.innerHTML);
        if(typeof(e.innerHTML) !== 'undefined'){
           
            testArr.push(e.innerHTML)

            res = testArr
                .map((a)=>
                `<span">${a[0].toUpperCase() + a.slice(1)}&nbsp; - ${typeof(textMeaning[a])==='undefined'?a:textMeaning[a]}</span><br>`)
                .filter((item, index,arr) => arr.indexOf(item) === index)
                .join('&nbsp')
                .replace(/[.,\s]/g,' ');



            localStorage.setItem("names", JSON.stringify([res]));
            
            counter.innerHTML = testArr.length;
            console.log(testArr.length)

            e.style['text-decoration']='underline'



        }
       
      e.onclick = getContents;


     
};


