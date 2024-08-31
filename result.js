document.addEventListener('DOMContentLoaded', function() {
    const urlParams = new URLSearchParams(window.location.search);
    const userText = urlParams.get('userText');
    const textToType = urlParams.get('textToType');
    const time = urlParams.get('time');

    if (userText && textToType && time) {
        const accuracy = userText === textToType ? '正解です！' : '残念! 不正解! もう一度!';
        document.getElementById('accuracy').textContent = accuracy;
        document.getElementById('elapsed-time').textContent = `タイム: ${time}秒`;

        const comparisonHtml = generateComparisonHtml(userText, textToType);
        document.getElementById('text-comparison').innerHTML = comparisonHtml;
    }

    function generateComparisonHtml(userText, textToType) {
        let resultHtml = '';
        for (let i = 0; i < textToType.length; i++) {
            if (userText[i] === textToType[i]) {
                resultHtml += `<span class="highlight-correct">${textToType[i]}</span>`;
            } else {
                resultHtml += `<span class="highlight-error">${textToType[i]}</span>`;
            }
        }
        return resultHtml;
    }
});
