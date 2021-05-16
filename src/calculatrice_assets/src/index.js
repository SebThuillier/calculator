import { Actor, HttpAgent } from '@dfinity/agent';
import { idlFactory as Calcul_idl, canisterId as Calcul_id } from 'dfx-generated/Calcul';

const agent = new HttpAgent();
const Calcul = Actor.createActor(Calcul_idl, { agent, canisterId: Calcul_id });

// document.getElementById("clickMeBtn").addEventListener("click", async () => {
//   const name = document.getElementById("name").value.toString();
//   const greeting = await Calcul.greet(name);

//   document.getElementById("greeting").innerText = greeting;
// });




// ///// New code here



// const addCalculation = async (x, y) => {

//   await Calcul.clear();
//   await Calcul.add(x);
//   let result = await Calcul.add(y)

//   return result;


// }

// const addition =  async (x,y) => {

//   let result = await addCalculation(x,y);
//   document.getElementById("greeting").innerText = result;
//   return;
  
// }
// let number1;
// let number2;
// let choice = parseInt(prompt("Welcome ! I am a calculator, you need to enter /n 1 for addition /n 2/ for substraction 3/ for multiplication 4/ for division /n /n"));


//   switch (choice) {
//       case 1: 
//         number1 = parseInt(prompt("Entrez le nombre 1"));
//         number2 = parseInt(prompt("Entrez le nombre 2"));
//         addition(number1,number2);
//         break;

//       case 2:
//         sub();
//         break;

//       case 3:
//         mult()
//         break;
    
//       case 4:
//         div()
//         break;
//       default:
      

//   }


  /// Start from here


  let state = 1;
  let number1;
  let number2;
  let result;
  let operation;

  const allDivs = document.querySelectorAll("div");
  const help = document.querySelector(".help");
  const pResult = document.querySelector(".result");

  allDivs.forEach(div => {
    if (div.classList[0] == "calculator") {
      div.addEventListener("click", global);
    }

    else {
      return;
    }
    
  });
  


  function global () {
    switch(state) {
      case 1:
        stateOne(this);
        break;
      case 2:
        stateTwo(this);
        break;
      case 3:
        stateThree(this);
        break;
      case 4:
        stateFour(this);
        break;

      default:
        console.log("error....");
        state =1;
        
    }
  }

  function stateOne(that) {
    let value = (that.dataset.value);
    if(value < 10) {
      number1 = value;
      help.innerText = "Choose your operation";
      pResult.innerText = `${number1}`;
      state = 2;

    }
    else if (value==10) {
      number1 = 0;
      help.innerText = "Choose your operation";
      pResult.innerText = `${number1}`;
      state = 2;
    }
    else {
      return;
    }
  }

  function stateTwo (that) {
    let value = (that.dataset.value);

    if (value<=10) {
      return;
      help.innerText = "I said : AN OPERATION !"
    }
    else if (value=11) {
      operation = 1;
      help.innerText = "Choose your second number"
      pResult.innerText = `${number1} +`;
      state =3;
    }
    else if (value=14) {
      operation = 2;
      help.innerText = "Choose your second number"
      pResult.innerText = `${number1} -`;
      state =3;
    }
    else if (value=15) {
      operation = 3;
      help.innerText = "Choose your second number (not 0 please)"
      pResult.innerText = `${number1} /`;
      state =3;
    }
    else if (value=16) {
      operation = 4;
      help.innerText = "Choose your second number"
      pResult.innerText = `${number1} +`;
      state =3;
    }
  
    else {
      return;
    }
  }


  function stateThree (that) {
    let value = (that.dataset.value);
    if(value < 10) {
      number2 = value;
      help.innerText = "Click on egal to calculate the result";
      pResult.innerText += ` ${number2}`;
      state = 4;

    }
    else if (value==10) {
      number2 = value;
      help.innerText = "Click on egal to calculate the result";
      pResult.innerText = ` ${number2}`;
      state = 4;
    }
    else {
      return;
    }
  }
  
  function stateFour (that) {
    if(that.dataset.value ==17) {
      console.log("On est là");
      calcul(number1,number2);
      return;
    }
    else if (that.dataset.value == 18) {
      console.log("Faut gérer ça")
      return;
    }
    else {
      return;
    }
  }

const calcul = (x,y) => {

  switch (operation) {
    case 1:
      console.log("Choix addition");
      addition(x,y);
      break;
    case 2:
      soustraction(x,y);
      break;
    case 3:
      multiplication (x,y);
      break;
    case 4:
      division (x,y);
      break;
    default:
      console.log("Fuck");
    
  }
}
  
const addCalculation = async (x, y) => {

  await Calcul.clear();
  await Calcul.add(x);
  let z = await Calcul.add(y)
  console.log(z);
  return z;
}


const addition =  async (x,y) => {

    result = await addCalculation(x,y);
    help.innerText = "The result is "
    console.log(result);
    pResult.innerText = result;
  
  return;
}

const subCalculation = async (x, y) => {

  await Calcul.clear();
  await Calcul.add(x);
  let z = await Calcul.sub(y)

  return z;
}


const soustraction =  async (x,y) => {

    result = await subCalculation(x,y);
    help.innerText = "The result is "
    pResult.innerText = result;
  
  return;
}

const multCalculation = async (x, y) => {

  await Calcul.clear();
  await Calcul.add(x);
  let z = await Calcul.mult(y)

  return z;
}


const multiplication =  async (x,y) => {

    result = await multCalculation(x,y);
    help.innerText = "The result is "
    pResult.innerText = result;
  
  return;
}

const divCalculation = async (x, y) => {

  await Calcul.clear();
  await Calcul.add(x);
  let z = await Calcul.div(y)

  return z;
}


const division =  async (x,y) => {

    result = await divCalculation(x,y);
    help.innerText = "The result is "
    pResult.innerText = result;
  
  return;
}