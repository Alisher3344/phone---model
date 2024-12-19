const inputText = document.getElementById('inputText');
const outputText = document.getElementById('outputText');
const translateButton = document.getElementById('translateButton');
const copyButton = document.getElementById('copyButton');
 
let daraja = document.querySelector(".batareaq");


translateButton.addEventListener('click', async () => {
  const fromLang = document.getElementById('fromLanguage').value;
  const toLang = document.getElementById('toLanguage').value;
  const text = inputText.value.trim();

  if (!text) {
    alert('Iltimos, matn kiriting!');
    return;
  }

  try {
    const response = await fetch(`https://api.mymemory.translated.net/get?q=${encodeURIComponent(text)}&langpair=${fromLang}|${toLang}`);
    const data = await response.json();
    outputText.value = data.responseData.translatedText;
    copyButton.disabled = false;
  } catch (error) {
    alert('Tarjima qilishda xatolik yuz berdi.');
    console.error(error);
  }
});

copyButton.addEventListener('click', () => {
  outputText.select();
  document.execCommand('copy');
  alert('Tarjima nusxalandi!');
});

let stopInterval = setInterval(() => {
    
    let batteryPromise = navigator.getBattery();

    batteryPromise.then((batteryObject) => {
      let foiz =("Percentage", batteryObject.level);
    daraja.textContent=`${foiz*100}`
     
    });
  }, 1);