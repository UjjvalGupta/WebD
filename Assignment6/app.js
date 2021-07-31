const section=document.querySelector('section');
const inp=document.createElement('input')
const ul=document.createElement('ul')
inp.setAttribute('type','text');
inp.setAttribute('id','special');
const button=document.querySelector('#btn');
var a=1;
button.addEventListener('click',()=>{
    if(a==1)
    {
        section.append(inp);
        section.append(ul);
        a=0;
        button.innerHTML='<i style="margin-right: 10px; color: white; font-size: 20px;" class="fas fa-minus"></i>'
    }
    else{
        inp.remove();
        ul.remove();
        a=1;
        button.innerHTML='<i style="margin-right: 10px; color: white; font-size: 20px;" class="fas fa-plus one" ></i>'
    }
    inp.addEventListener('keydown',(e)=>{
        if(e.key==='Enter' && inp.value!='')
        {
            const div=document.createElement('div');
            const inpu=document.createElement('input')
            inpu.setAttribute('type','text');
            inpu.setAttribute('id','special2');
            const but=document.createElement('button')
            ul.append(div)
            but.innerHTML='<i class="fas fa-trash-alt"></i>  ';
            inpu.value=inp.value;
            div.append(but);
            div.append(inpu);
            but.addEventListener('click',()=>{
                div.remove();
            })
            
            // const a=li.innerHTML.split('</i>')[0];
            // but.addEventListener('click',(event)=>{
            //     event.target.remove();
            // })
            
            inp.value='';
        }
        
    })
})
