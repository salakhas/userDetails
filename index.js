var button = document.getElementById("create");
console.log(button)
button.addEventListener("click",createCard);
var i=0,j='a';

function createCard(e){
    e.preventDefault();
    let outerDiv = document.getElementById("results");
    let card = document.createElement("div");
    card.setAttribute("class","card");

    let names = document.getElementById("name").value;
    let phnNum = document.getElementById("contact").value;

    let nameOfPerson = document.createElement("h3");
    nameOfPerson.innerHTML = `Name: ${names}`;

    
    let cardButton = document.createElement("button");
    cardButton.setAttribute("class","btn btn-primary");
    cardButton.id = i;
    cardButton.textContent = "Show Contact Details";
    

    let showContact = document.createElement("div");
    showContact.id = j;
    showContact.className = "hide";

    card.append(nameOfPerson,cardButton);
    outerDiv.append(card)

    cardButton.addEventListener("click",function toggleDisplay(){

       let ids =showContact.id;
       console.log(ids)
       let contacts = document.getElementById(ids);
        console.log("showContact=>",showContact.className)
        console.log("cardButton=>",cardButton.className)
        let contactOfPerson = document.createElement("h4");
        contactOfPerson.innerHTML = "";
        if(contacts.className === "hide"){
            
            contactOfPerson.innerHTML = `Phone No. : ${phnNum}`;
            contacts.append(contactOfPerson);
            contacts.className = "show";
            cardButton.textContent = "Hide Contact Details";
        }
        else if(contacts.className === "show"){
            contacts.innerHTML = "";
            contacts.className = "hide";
            cardButton.textContent = "Show Contact Details";
        }
    });
    card.append(showContact)
  
    i++;
    j+='a';
    let forms = document.getElementById("form");
    forms.reset();
}

