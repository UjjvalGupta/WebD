
$('ul').on('click','input[id="text"]',function(){
    
    $(this).css('background-color','white');
    $(this).css('color','black');
    $('ul').on('click','#btn',function(){
        $(this).prev().css('background-color','rgba(40,40,40,0)');
        $(this).prev().css('color','yellow');
    })

})



$('input[type="text"]').keypress(function(e){
    if(e.which===13)   
    {
        const input=document.querySelector('#inp');
        const inpu=document.createElement('input');
        const li=document.createElement('li');
        inpu.setAttribute('type','text');
        inpu.setAttribute('id','text');

        inpu.value= input.value;
        const i=`<button id="btn">Update</button><span><button id="del"><i class="fas fa-trash-alt"></i>  Delete</button></span>`;

        // const todo=`<li>${inpu}<span><i class="fas fa-trash-alt"></i></span></li>`

        $(li).append(inpu);
        $(li).append(i);
        $('#list').append(li);
        $(this).val("");


        
    }
    
})





$('ul').on('click','span',function(event){
    $(this).parent().fadeOut(500,function(){  
        $(this).remove();  
    }) 
    event.stopPropagation();
})




$('#plus').click(function(){
    $('#list').fadeToggle(500);
})