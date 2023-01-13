document.querySelector('#clickMe').addEventListener('click', makeReq)

async function makeReq(){

  const res = await fetch(`/api`)
  const data = await res.json()

  console.log(data);
  if (data.flip == "heads") {
    document.querySelector("#result").innerText = "Heads!"
    document.querySelector('#coinResult').src = "/images/coinHead.png"
    /*document.querySelector("#coinHeads").classList.remove("hidden")
    document.querySelector("#coinTails").classList.add("hidden") */
  } else {
    document.querySelector("#result").innerText = "Tails!"
    document.querySelector('#coinResult').src = "/images/coinTails.png"
    /*document.querySelector("#coinTails").classList.remove("hidden")
    document.querySelector("#coinHeads").classList.add("hidden") */
  }
}