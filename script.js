window.addEventListener('DOMContentLoaded',init);
function init (){
    const container = document.querySelector('.container');
    const boxItem1 = document.querySelector('.box-item1');
    const inputItem = document.getElementById('input-item');
    const addNotBtn = document.getElementById('button-item');
    const boxItemCont = document.querySelector('.box-item-content');
    const viewNoteItem = document.querySelector('.view-note');
    const viewNoteCloseBtn = document.querySelector('.close-btn');
    var numberOfBoxes = 1;
    
    const viewNoteTextField = document.querySelector('.view-note-text-field');
    
    //boxItem1.style.display = 'none';
    viewNoteItem.style.display = 'none';

    addNotBtn.addEventListener('click',addNote);
    viewNoteCloseBtn.addEventListener('click',closeNote);
    

    function addNote(e){
        if(numberOfBoxes >= 4){
            alert('you cannot enter more notes');
        }else{
            var boxElement = document.createElement('div');
            document.querySelector('.box').appendChild(boxElement);
            boxElement.classList.add('box-item1');
            boxElement.style.display = 'grid';
            boxElement.innerHTML = `<div class="box-item-title title-text"><span>note ${numberOfBoxes}</span></div>
                <div class="box-item-content">${inputItem.value}</div>`;
            var btn1 = document.createElement('button');
            var btn2 = document.createElement('button');
            boxElement.appendChild(btn1);
            btn1.classList.add('button');
            btn1.classList.add('box-item-button1');
            btn1.textContent = 'view';
            btn1.addEventListener('click',displayNote);

            boxElement.appendChild(btn2);
            btn2.classList.add('button');
            btn2.classList.add('delete-btn');
            btn2.textContent = 'delete';
            btn2.addEventListener('click',()=>{
               boxElement.remove();
               numberOfBoxes -= 1;  
            });
            numberOfBoxes += 1;
        }
       
    }
   
    function closeNote(){
        viewNoteItem.style.display = 'none';
    }
    function displayNote(){
        viewNoteItem.style.display = 'grid';
        viewNoteTextField.innerHTML = `<span>${inputItem.value}</span>`;
    }
 
}