
var bodyEle= document.querySelector('body')
bodyEle.style.fontFamily=' Arial, Helvetica, sans-serif'


var headingEle =document.createElement('h1')
headingEle.innerText='Game Of Thrones Books'
headingEle.classList.add('text-center')
bodyEle.append(headingEle)


var mainDiv =  document.createElement('div')
mainDiv.setAttribute('class','mainDiv')
mainDiv.classList.add('container')
bodyEle.append(mainDiv)
var rowDiv = document.createElement('div')
rowDiv.setAttribute('class','rowDiv')
rowDiv.classList.add('row')
rowDiv.classList.add('gap-5')
mainDiv.append(rowDiv)
rowDiv.style.display='flex'
rowDiv.style.justifyContent='center'



async function api(){
   try{
    var responce = await fetch( "https://www.anapioficeandfire.com/api/characters?page=1&pageSize=50")
    book = await responce.json()
    console.log(book)
    
    for(var i in book){
    var responce2 = await fetch(book[i].books[0])
    bookDetail = await responce2.json()
    // console.log(bookDetail)
    
    // console.log(bookDetail.name)
    // console.log(bookDetail.isbn)
    // console.log(bookDetail.authors[0])
    // console.log(bookDetail.publisher)
    // console.log(bookDetail.released)

    //create subDive
    var subDivEle = document.createElement('div')
    subDivEle.setAttribute('class','subDiv')
    subDivEle.classList.add('col-sm-12')
    subDivEle.classList.add('col-md-12')
    subDivEle.classList.add('col-xl-5')
    subDivEle.classList.add('col-xxl-3')

    subDivEle.style.backgroundColor='#E3FDFD'
    subDivEle.classList.add('rounded-start-2')
    // subDivEle.classList.add('p-2')
    // subDivEle.classList.add('h-50')
    
    
    
    rowDiv.append(subDivEle)
    
    //create Div1
    var subDivEle1 = document.createElement('div')
    subDivEle1.setAttribute('class','subDiv1')
    subDivEle1.classList.add('text-center')
    subDivEle.append(subDivEle1)
   

    var pBookEle = document.createElement('p')
    pBookEle.innerText=`Book ${Number(i)+1}`
    subDivEle1.append(pBookEle)

    var h4Ele = document.createElement('h4')
    h4Ele.innerText=`${bookDetail.name}`
    subDivEle1.append(h4Ele)

    //create Div2
    var subDivEle2 = document.createElement('div')
    subDivEle2.setAttribute('class','subDiv2')
    subDivEle.append(subDivEle2)

    

    var pAuthorEle = document.createElement('p')
    pAuthorEle.innerText=`Author: ${bookDetail.authors[0]}`
    subDivEle2.append( pAuthorEle)


    var pPublisherEle = document.createElement('p')
    pPublisherEle.innerText=`Publisher: ${bookDetail.publisher}`
    subDivEle2.append(pPublisherEle)


    var pReleasedDateEle = document.createElement('p')
    pReleasedDateEle.innerText=`Released Date: ${bookDetail.released}`
    subDivEle2.append(pReleasedDateEle)


    var pNoOfPageEle = document.createElement('p')
    pNoOfPageEle.innerText=`No Of Page: ${bookDetail.numberOfPages}`
    subDivEle2.append(pNoOfPageEle)

    var pIsbnEle = document.createElement('p')
    pIsbnEle.innerText=`ISBN: ${bookDetail.isbn}`
    subDivEle2.append(pIsbnEle)

    var pCharactorEle = document.createElement('p')
    var character =[]
    for(var i=0; i<10;i++){
        
        var responce3 =await fetch(bookDetail.characters[i])
        charactersDetail = await responce3.json()
        if(!charactersDetail.name==""){
            character.push(charactersDetail.name)
        }
        
    
    }
    character = character.join()
    pCharactorEle.innerText=`Characters: ${character}`
    subDivEle2.append(pCharactorEle)
    
    // console.log('------------------------------------------')
    }
    
   } catch(error){
    console.log(error)
   }
    

}
api()

