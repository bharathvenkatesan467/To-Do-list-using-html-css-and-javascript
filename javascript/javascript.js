
// function add(){
//     var messa=document.getElementById("add").addlist.value;
//     messa.innerHTML='';

// }
// function remove(){
//     var messa=document.getElementById("add");
//     messa.remove();
// }

// function mul(a,b=1){
//     return a*b;
// }
// console.log(mul(5));

let val=[];

document.getElementById('b1').addEventListener('click',add);

function add(){
    let inn=document.getElementById('input1');
    let ad=inn.value.trim();
    if(ad!==''){
        val.push(ad);
        inn.val='';
        del();
    }
}

function del()
{
    let inevent=document.getElementById('add');
    inevent.innerHTML='';

    val.forEach((val,index) => {
        let valelement=document.createElement('li');
        valelement.textContent = task;

        let deletebt1=document.createElement('button');
        deletebt1.className = 'deleteb2';
        deletebt1.textContent='Delete';
        deletebt1.addEventListener('click', ()=>{
            val.splice(index,1);
            del();
        });

        valelement.appendChild(deletebt1);
        inevent.appendChild(valelement);
    })
}

del();