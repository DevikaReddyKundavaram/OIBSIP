const temperatureInput=document.getElementById('temperature-input');
const celsiusOutput=document.getElementById('celsius-output');
const fahrenheitOutput=document.getElementById('fahrenheit-output');
const convertBtn=document.getElementById('convert-btn');
const invalidParaOutput=document.getElementById('invalidPara');

convertBtn.addEventListener('click',() =>{
    const userInputValue=temperatureInput.value
    const length=userInputValue.length

    const temperature=parseFloat(temperatureInput.value);

    let lastLetter = userInputValue[length-1];


switch(lastLetter){
    case "C":
        celsiusOutput.value=temperature.toFixed(2);
        let Fc=32+((9*temperature)/5);
        fahrenheitOutput.value=Fc.toFixed(2);
        let Kc=273+temperature;
        kelvinOutput.value=Kc.toFixed(2);

        invalidParaOutput.textContent=" ";
        break;
    case "F":
        let Cf=((temperature-32)*5)/9;
        celsiusOutput.value=Cf.toFixed(2);

        fahrenheitOutput.value=temperature.toFixed(2);

        let Kf=273+Cf;
        kelvinOutput.value=kf.toFixed(2);

        invalidParaOutput.textContent=" ";
        break;
    default:
        celsiusOutput.value=" ";
        fahrenheitOutput.value=" ";
        invalidParaOutput.textContent="Please Enter a Valid Temperature";
        break;

    }
});