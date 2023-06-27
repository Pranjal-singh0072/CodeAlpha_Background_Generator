const color1Input = document.getElementById('color1');
    const color2Input = document.getElementById('color2');
    const gradientDiv = document.getElementById('gradient');
    const outputText = document.getElementById('output');

    function setGradient() {
      gradientDiv.style.background = `linear-gradient(to right, ${color1Input.value}, ${color2Input.value})`;
      outputText.textContent = gradientDiv.style.background + ';';
    }

    color1Input.addEventListener('input', setGradient);
    color2Input.addEventListener('input', setGradient);

    setGradient();