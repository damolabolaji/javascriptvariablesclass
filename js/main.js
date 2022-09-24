

const speak = window.speechSynthesis
document.querySelector('#yell').onclick = getValues

function getValues(){
  const fName = document.querySelector('#firstName').value
  const fMid = document.querySelector('#firstMiddle').value
  const lMid = document.querySelector('#lastMiddle').value
  const lLast = document.querySelector('#lastName').value


  const yellName = `${fName} ${fMid} ${lMid} ${lLast}`

  document.querySelector('#placeToYell').innerText = yellName

  let yellThis = new SpeechSynthesisUtterance(yellName);
  speak.speak(yellThis);
}


document.querySelector('#convert').onclick = convertToFarenheit

function convertToFarenheit(){
    const celciusValue = document.querySelector('#celcius').valueAsNumber

    const farenheit = (celciusValue + 32);

    document.querySelector('#farenheitValue').innerText = farenheit

}