//your code here
const evaluatedText = document.getElementById('evaluatedText');
const wordCount = document.getElementById('wordCount');

evaluatedText.addEventListener('input', () => {
  const text = evaluatedText.value.trim();
  const count = text ? text.split(/\s+/).length : 0;
  wordCount.innerText = count;
});
