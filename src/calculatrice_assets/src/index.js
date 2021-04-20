import { Actor, HttpAgent } from '@dfinity/agent';
import { idlFactory as calculatrice_idl, canisterId as calculatrice_id } from 'dfx-generated/calculatrice';

const agent = new HttpAgent();
const calculatrice = Actor.createActor(calculatrice_idl, { agent, canisterId: calculatrice_id });

document.getElementById("clickMeBtn").addEventListener("click", async () => {
  const name = document.getElementById("name").value.toString();
  const greeting = await calculatrice.greet(name);

  document.getElementById("greeting").innerText = greeting;
});
