const loadphone =async(textarea='iphone',isshowall)=>{
    const res = await fetch (`https://openapi.programming-hero.com/api/phones?search=${textarea}`);
    const data = await res.json();
    const phone =data.data;
    // console.log(phone)
    displayphones(phone, isshowall)
}
 const displayphones = (phone,isshowall) =>{
const phonecontainer =document.getElementById("div-container")
// clear phone container card before adding new card

phonecontainer.textContent=""
// dis play first 12 phone

const showallcontainer =document.getElementById("show-all-container")
if(phone.length >12 && !isshowall){
showallcontainer.classList.remove('hidden')

}else{
    showallcontainer.classList.add('hidden')
}

if(!isshowall){
    phone=phone.slice(0,12)
}

// console.log(isshowall)
phone=phone.slice(0,12)
    phone.forEach(phone => {
        // creat a div
        const phonecard =document.createElement('div')

        phonecard.classList=`card bg-base-100 p-5 shadow-xl`
        // set inner html
        phonecard.innerHTML=`<figure><img src="${phone.image}"
        alt="Shoes" /></figure>
        <div class="card-body">
        <h2 class="card-title">${phone.phone_name}</h2>
        <p>If a dog chews shoes whose shoes does he choose?</p>
        <div class="card-actions justify-end">
        <button onclick="showdetails('${phone.slug}');show_detail_modal.showModal()" class="btn btn-primary"> show details</button>
        </div>`

        // append child 
        phonecontainer.appendChild(phonecard);
        // console.log(phone)
        
    });

    togolloadingspiner(false)
 }

//  handle search button
const handlesearch= (isshowall) =>{
    togolloadingspiner(true);
  const searchfield =document.getElementById("search-field")
  const textarea =searchfield.value;
  console.log(textarea)
  loadphone(textarea,isshowall)
}

 const searchbtn = ()=>{
    togolloadingspiner(true);
    const searchfild = document.getElementById('search-area')
    const textarea = searchfild.value;
    loadphone(textarea)

    // console.log(textarea)
 }

 const togolloadingspiner =(isloading)=>{
    const loadingspiner =document.getElementById('loading-spinner');
    if(isloading){
        loadingspiner.classList.remove('hidden');
    }else{
        loadingspiner.classList.add('hidden')
    }
   
 }

 const handleshowall =()=>{
    handlesearch(true)
 }

loadphone()

const showdetails =async(id)=>{
    const res = await fetch (` https://openapi.programming-hero.com/api/phone/${id}`);
    const data = await res.json();
    // console.log(data)
    const phone= data.data;
    showphonedetails(phone)
}

const showphonedetails =(phone)=>{
    console.log(phone);
    show_detail_modal.showModal()
    const phonename = document.getElementById('phone-name');
    phonename.innerText=phone.name;
    
   const showcontainer =document.getElementById('show-datil-container');
   showcontainer.innerHTML=`<img src="${phone.image}" alt="">
   <p><span>storage:</span>${phone.mainFeatures.storage
    }</p>
    <p>${phone.mainFeatures.displaySize

    }</p>
    <p>${phone.mainFeatures.chipSet
    }</p>
    <p>Memory:${phone.mainFeatures.memory

    }</p>
   `

}


// for test
const dreamGirl = [
    {
    sokina: {
     name: "bbu",
     height: "5.4",
     family: [{ father: "rock", mother: "shila", sister: "chinki" }],
     age: undefined,
     contactInfo: [
     {
      facebook: {
      link: "https://www.facebook.com/",
      followers: "12545",
      status: "single",
      friendsList: [{ name: "rofik" }, undefined],
      },
     },
     { instagram: "https://www.instagram.com/" },
     ],
    },
    },
   ];
   console.log(dreamGirl[0].sokina.contactInfo[1].instagram)
   console.log(dreamGirl[0].sokina.instagram)

   const phones = [
    { name: "sony", price: 500 },
    { name: "apple", price: 700 },
    { name: "sony", price: 700 },
   ];
   console.log(phones.filter((phone) => phone.price != 500))
   console.log(phones.filter((phone) => phone.price == 500))
   console.log(phones.find((phone) => phone.price === 500))