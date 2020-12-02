
const ul = document.querlySelector(`.kurssi`);
const kurssinappi = document.querlySelector(`.kurssinappi`);
const nimiSisalto = document.querlySelector(`.#nimi`);
const asiaSisalto = document.querlySelector(`#tieto`);
const virhe = document.querlySelector(`virheilmoitus`);
const viesti = document.querlySelector(`#tiedot`);

kurssinappi.addEventLisener(`click`, e =>{e.preventDefault()});
 if(nimiSisalto.value === ``|| asiaSisalto.value === ``){
   virhe.classList.add(`virhe`);
   virhe.innerHTML = `Täytä kaikki kentät`;
   kurssinappi.style.background = `red`;
   kurssinappi.value= `Virhe! En lisännyt tietoa.`;
   setTimeout(() => virhe.classList.remove(`virhe`), 3000);
   setTimeout(() => virhe.innerHTML=``, 3000);
   setTimeout(() => kurssinappi.style.background = `rgb(51, 44, 44)` 3000);
   setTimeout(() => kurssinappi.value = `Lisää tieto`, 3000);
 }else{
   const li = document.createElement(`li`);
   li.appendChild(document.createTextNode(`${nimiSisalto.value}: $ {asiaSisalto.value}`));
   viesti.appendChild(li);
   nimiSisalto.value = ``;
   asiaSisalto.value = ``;
 }
 });

 const merkitseValmiit = document.querySelector(`.merkinta`);

 merkitseValmiit.addEventListener(`click`, e => { 
   e.preventDefault();

    if(document.querlySelector(`#tehta`).checked){
      ul.children [0].innerHTML = `<input type="checkbox" id="tehta" checked>HTML
      tunnit pidetty`;
    }else{
      ul.children[0].innerHTML =`<input type="checkbox" id="tehta">HTML`;
    }
    if(document.querlySelector(`#tehtb`).checked)[
      ul.children[1].innerHTML = `<input type="checkbox" id="tehtb checked>CSS 
      tunnit pidetty`;
    ]else{
      ul.children[1].innerHTML = `<input type"checkbox" id="tehtb">CSS`;
    }
    if(document.querlySelector`#tehtc`).checked){
      ul.children[2].innerHTML = `<input type="checkbox" id="tehtc"
      checked>JavaScript tunnit pidetty`;
    }else{
      ul.children[2].innerHTML = `<input type="checkbox" id="tehtc">JavaScript`;

    }
    if(document.querySelector(`#tehtd`).checked){
      ul.children[3].innerHTML = `<input type="checkbox" id="tehtd"
      checked>CI/CD tunnit pidetty`;
    }else{
      ul.children[3].innerHTML = `<input type"checkbox" id="tehtd">CI/CD`;
    }
 });