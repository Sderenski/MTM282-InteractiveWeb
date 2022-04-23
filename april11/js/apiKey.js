const modal = document.getElementById('apiKeyModal');

const storeKey = (key) => {
  window.localStorage.setItem('apiKey', key);
  modal.style.display = 'none';
}

if (window.localStorage.getItem('apiKey') === null )
{
  console.log('We need to save this.');
  modal.style.display = "block";
}