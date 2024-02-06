
    const canvas = document.getElementById('shapeCanvas');
    const ctx = canvas.getContext('2d');

    const breatheInSlider = document.getElementById('breatheInSlider');
    const hold1Slider = document.getElementById('hold1Slider');
    const breatheOutSlider = document.getElementById('breatheOutSlider');
    const hold2Slider = document.getElementById('hold2Slider');

    const breatheInValue = document.getElementById('breatheInValue');
    const hold1Value = document.getElementById('hold1Value');
    const breatheOutValue = document.getElementById('breatheOutValue');
    const hold2Value = document.getElementById('hold2Value');

    function drawRectangle() {
      const width = parseInt(breatheInSlider.value);
      const height = parseInt(breatheOutSlider.value);

      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.fillRect(0, 0, width, height);

      widthValue.textContent = width;
      heightValue.textContent = height;
    }

    widthSlider.addEventListener('input', drawRectangle);
    heightSlider.addEventListener('input', drawRectangle);

    drawRectangle(); // Initial draw
