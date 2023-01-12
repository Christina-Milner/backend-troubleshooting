document.querySelector('#clickMe').addEventListener('click', makeReq)

async function makeReq(){

  const res = await fetch(`/api`)
  const data = await res.json()

  console.log(data);
  if (data.flip == "heads") {
    document.querySelector("#result").innerText = "Heads!"
    document.querySelector("#coinPic").src = "/images/coinHead.png"
  } else {
    document.querySelector("#result").innerText = "Tails!"
    document.querySelector("#coinPic").src = "/images/coinTails.png"
  }
}