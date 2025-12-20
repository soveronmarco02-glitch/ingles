
import { 
    Nivel_Basico_A1A2, 
    Nivel_Intermedio_B1, 
    Nivel_Avanzado_B2 
} from './data.js';


const levelMap = {
    'basico': Nivel_Basico_A1A2,
    'intermedio': Nivel_Intermedio_B1,
    'avanzado': Nivel_Avanzado_B2,
    'all': [...Nivel_Basico_A1A2, ...Nivel_Intermedio_B1, ...Nivel_Avanzado_B2]
};

let currentVocabulary = levelMap.all; 
let currentWordIndex = 0;
let score = 0;
let streak = 0;
let maxWordsLearned = 0; 




function updateScoreDisplay() {
    document.getElementById('score-display').textContent = `Puntuación: ${score} puntos`;
    document.getElementById('streak-display').textContent = `🔥 Racha: ${streak}`;
}

function updateProgressBar() {
    if (currentVocabulary.length === 0) return;
    const progress = (currentWordIndex / currentVocabulary.length) * 100;
    document.getElementById('progress-bar-fill').style.width = `${progress}%`;
}

function resetGame() {
    score = 0;
    streak = 0;
    shuffleVocabulary();
    updateScoreDisplay();
    updateProgressBar();
    document.getElementById('feedback-message').textContent = '';
    document.getElementById('status-message').textContent = "Juego Reiniciado. ¡Aprende!";
    document.getElementById('translation-input').value = '';
    document.getElementById('translation-input').disabled = false;
    document.getElementById('check-button').disabled = false;
    document.getElementById('show-answer-button').disabled = false;
}





window.loadVocabularyForLevel = function() {
    const level = document.getElementById('levelSelect').value;
    currentVocabulary = levelMap[level];
    maxWordsLearned = currentVocabulary.length;

    document.getElementById('status-message').textContent = `Cargado Nivel: ${level.toUpperCase()}. Palabras: ${maxWordsLearned}`;
    
    
    resetGame();
    shuffleVocabulary();
    displayWord();
}

function shuffleVocabulary() {
    
    for (let i = currentVocabulary.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [currentVocabulary[i], currentVocabulary[j]] = [currentVocabulary[j], currentVocabulary[i]];
    }
    currentWordIndex = 0; 
}

function displayWord() {
    const wordDisplay = document.getElementById('english-word');
    const sentenceDisplay = document.getElementById('english-sentence');
    const spanishTranslationDisplay = document.getElementById('spanish-translation');
    const spanishSentenceDisplay = document.getElementById('spanish-sentence');
    const nextButton = document.getElementById('next-button');

    if (currentVocabulary.length === 0) {
        wordDisplay.textContent = "¡No hay palabras cargadas!";
        sentenceDisplay.textContent = "";
        return;
    }

    if (currentWordIndex >= currentVocabulary.length) {
      
        wordDisplay.textContent = "¡Misión Cumplida! Mezclando de nuevo...";
        sentenceDisplay.textContent = "";
        spanishTranslationDisplay.classList.add('hidden');
        spanishSentenceDisplay.classList.add('hidden');
        shuffleVocabulary();
        currentWordIndex = 0; 
        
        setTimeout(displayWord, 1500); 
        return;
    }
    
    const word = currentVocabulary[currentWordIndex];

    wordDisplay.textContent = word.english;
    sentenceDisplay.textContent = word.sentence;

    document.getElementById('translation-input').value = '';
    document.getElementById('feedback-message').textContent = '';
    spanishTranslationDisplay.classList.add('hidden');
    spanishSentenceDisplay.classList.add('hidden');
    spanishSentenceDisplay.textContent = '';

  
    nextButton.textContent = 'Siguiente Palabra';
    document.getElementById('check-button').disabled = false;
    document.getElementById('translation-input').disabled = false;
    document.getElementById('show-answer-button').disabled = false;

    updateProgressBar();
    updateAudioButtons(word.english, word.sentence);
}

function checkTranslation() {
    const inputElement = document.getElementById('translation-input');
    const feedbackElement = document.getElementById('feedback-message');
    
    if (currentVocabulary.length === 0 || currentWordIndex >= currentVocabulary.length) return;
    
    const currentWord = currentVocabulary[currentWordIndex];
    const userInput = inputElement.value.trim().toLowerCase();
    

    const correctTranslations = currentWord.spanish.split(' / ').map(s => s.trim().toLowerCase());

    const isCorrect = correctTranslations.includes(userInput);
    
  
    document.getElementById('check-button').disabled = true;
    inputElement.disabled = true;

    if (isCorrect) {
        feedbackElement.textContent = `✅ ¡Correcto! +10 Puntos.`;
        feedbackElement.className = 'translation-result feedback-correct';
        score += 10;
        streak++;
    } else {
        feedbackElement.textContent = `❌ ¡Incorrecto! La respuesta era: ${currentWord.spanish}`;
        feedbackElement.className = 'translation-result feedback-incorrect';
        streak = 0; // Rompe la racha
    }

    updateScoreDisplay();
   
    document.getElementById('next-button').textContent = 'Continuar >>';
}

function showAnswer() {
    if (currentVocabulary.length === 0 || currentWordIndex >= currentVocabulary.length) return;

    const currentWord = currentVocabulary[currentWordIndex];
    const spanishTranslationDisplay = document.getElementById('spanish-translation');
    const spanishSentenceDisplay = document.getElementById('spanish-sentence');
    
    
    spanishTranslationDisplay.textContent = `Traducción: ${currentWord.spanish}`;
    spanishTranslationDisplay.classList.remove('hidden');
    
    spanishSentenceDisplay.textContent = `Traducción de la Oración: ${currentWord.sentenceSpanish}`;
    spanishSentenceDisplay.classList.remove('hidden');
    

    score = Math.max(0, score - 5);
    streak = 0;
    updateScoreDisplay();

    document.getElementById('check-button').disabled = true;
    document.getElementById('translation-input').disabled = true;
    document.getElementById('show-answer-button').disabled = true;
    document.getElementById('feedback-message').textContent = `Pista usada. -5 Puntos.`;
    document.getElementById('feedback-message').className = 'translation-result feedback-incorrect';
    document.getElementById('next-button').textContent = 'Continuar >>';
}

function nextWord() {
    currentWordIndex++;
    displayWord();
}



const synth = window.speechSynthesis;

function speak(text, lang) {
    if (synth.speaking) {
        synth.cancel();
    }
    const utterance = new SpeechSynthesisUtterance(text);
    
    utterance.lang = lang; 
    utterance.rate = 0.9; 
    synth.speak(utterance);
}

function updateAudioButtons(word, sentence) {
    const audioWordBtn = document.getElementById('audio-button-word');
    const audioSentenceBtn = document.getElementById('audio-button-sentence');
    
    if (word) {
        audioWordBtn.disabled = false;
        audioWordBtn.onclick = () => speak(word, 'en-US');
    } else {
        audioWordBtn.disabled = true;
    }

    if (sentence) {
        audioSentenceBtn.disabled = false;
        audioSentenceBtn.onclick = () => speak(sentence, 'en-US');
    } else {
        audioSentenceBtn.disabled = true;
    }
}




function quickSearchAndSpeak() {
    const searchInput = document.getElementById('search-input');
    const searchResult = document.getElementById('search-result');
    const query = searchInput.value.trim().toLowerCase();

    if (query === "") {
        searchResult.textContent = "Por favor, introduce una palabra para buscar.";
        searchResult.className = 'translation-result feedback-incorrect';
        return;
    }

  
    const allWords = levelMap.all;
    
    const foundWord = allWords.find(item => 
       
        item.spanish.toLowerCase().split(' / ').map(s => s.trim()).includes(query) || 
       
        item.english.toLowerCase() === query
    );

    if (foundWord) {
       
        const textToSpeak = foundWord.english; 
        
        searchResult.innerHTML = `
            <strong>Inglés:</strong> ${foundWord.english} <br>
            <strong>Español:</strong> ${foundWord.spanish} <br>
            <strong>Ejemplo:</strong> ${foundWord.sentence} <br>
            <em>(${foundWord.sentenceSpanish})</em>
        `;
        searchResult.className = 'translation-result feedback-correct';
        
        speak(textToSpeak, 'en-US'); 
    } else {
        searchResult.textContent = `❌ Palabra "${query}" no encontrada en la lista.`;
        searchResult.className = 'translation-result feedback-incorrect';
    }
}




window.onload = function() {
    
    document.getElementById('next-button').onclick = nextWord;
    document.getElementById('check-button').onclick = checkTranslation;
    document.getElementById('show-answer-button').onclick = showAnswer;
    document.getElementById('reset-button').onclick = resetGame;
    document.getElementById('search-button').onclick = quickSearchAndSpeak;

  
    document.getElementById('translation-input').addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            checkTranslation();
        }
    });

    
    loadVocabularyForLevel(); 
    
    document.getElementById('status-message').textContent = "¡Listo para la Quest! Selecciona un nivel o pulsa 'Siguiente Palabra'.";
};
