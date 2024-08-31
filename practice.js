document.addEventListener('DOMContentLoaded', function() {
    const timerDisplay = document.getElementById('timer');
    const endButton = document.getElementById('end-button');
    const userInput = document.getElementById('user-input');
    const textToType = document.getElementById('text-to-type').textContent;
    
    let startTime = Date.now();
    let timerInterval;

    function startTimer() {
        timerInterval = setInterval(function() {
            let elapsedTime = Math.floor((Date.now() - startTime) / 1000);
            timerDisplay.textContent = `タイマー: ${elapsedTime}秒`;
        }, 1000);
    }

    startTimer();

    endButton.addEventListener('click', function() {
        clearInterval(timerInterval);
        const userText = userInput.value;
        const correct = userText === textToType;
        const elapsedTime = Math.floor((Date.now() - startTime) / 1000);
        
        // 結果画面に遷移
        setTimeout(function() {
            window.location.href = '/result?userText=' + encodeURIComponent(userText) + '&textToType=' + encodeURIComponent(textToType) + '&time=' + encodeURIComponent(elapsedTime);
        }, 1000);
    });
});

