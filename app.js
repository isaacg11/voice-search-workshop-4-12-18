const response1 = new webkitSpeechRecognition();
const utterance1  = new SpeechSynthesisUtterance();

response1.onresult = (event1) => {
    utterance1.text = `Did you say ${event1.results[0][0].transcript}? Please say yes or no`;
    speechSynthesis.speak(utterance1);
    setTimeout(() => {
        const response2 = new webkitSpeechRecognition();
        response2.start();
        response2.onresult = (event2) => {
            if(event2.results[0][0].transcript === 'yes') {
                setTimeout(() => {
                    const utterance2 = new SpeechSynthesisUtterance();
                    utterance2.text = `Okay, here are the results I found for ${event1.results[0][0].transcript}`;
                    speechSynthesis.speak(utterance2);

                    setTimeout(() => {
                        window.location.href = `https://www.google.com/search?q=${event1.results[0][0].transcript}`
                    }, 3000)
                    
                }, 3000)
            } else {
                const utterance3 = new SpeechSynthesisUtterance();
                utterance3.text = 'Okay, please try again';
                speechSynthesis.speak(utterance3);

                setTimeout(() => {
                    start()
                }, 3000)

            }
        }
    }, 3000)
}

function start() {
    response1.start()
}