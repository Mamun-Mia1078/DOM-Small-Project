const list = document.querySelector('#book-list ul');
// delete book list code is here 
list.addEventListener('click',function(e){
    if(e.target.className == 'delete'){
        const li = e.target.parentElement;
        list.removeChild(li)
    }
})
//  end book list code 
 // book list section starta by here 
 const addForm = document.forms['add-book'];
 addForm.addEventListener('submit',function(e){
    e.preventDefault();
    const value = addForm.querySelector('input[type="text"]').value;
   
    // create element start here 
   
    const li = document.createElement('li');
    const bookName = document.createElement('span');
        const deleteBtn = document.createElement('span');
      // add content
              deleteBtn.textContent = 'delete';
              bookName.textContent = value;
              

              // add classes 
              bookName.classList.add('name');
              deleteBtn.classList.add('delete');

        
        // append document start here 
        li.appendChild(bookName);
        li.appendChild(deleteBtn);
        list.appendChild(li);
        
       
  
});
 // searchbar 
        
 const searchBar = document.forms['search-books'].querySelector('input');
 searchBar.addEventListener('keyup',function(e){
     const term = e.target.value.toLowerCase();
     const books = list.getElementsByTagName('li');
     Array.from(books).forEach(function(book){
         const title = book.firstElementChild.textContent;
         if(title.toLocaleLowerCase().indexOf(term) !=-1){
             book.style.display = 'block';
         } else {
             book.style.display = 'none';
         }
     })
     
 })