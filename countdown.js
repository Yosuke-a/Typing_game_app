document.addEventListener('DOMContentLoaded', function() {
    const countdownDisplay = document.getElementById('countdown-timer');
    const countdownDuration = 5; 

    let remainingTime = countdownDuration;

    
    countdownDisplay.textContent = 'Are you ready?';

    const countdownInterval = setInterval(function() {
        remainingTime--;

        if (remainingTime > 3) {
            countdownDisplay.textContent = 'Are you ready?'; 
        } else if (remainingTime >= 1) {
            countdownDisplay.textContent = `${remainingTime}秒`; 
        } else {
            clearInterval(countdownInterval);
            countdownDisplay.textContent = 'Start !'; 
            setTimeout(function() {
                window.location.href = '/practice'; 
            }, 1000); 
        }
    }, 1000);
});
