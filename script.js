// =========================================================
//                  script.js (Lógica del Juego)
// =========================================================

// 1. IMPORTAR LA BASE DE DATOS desde data.js
import { 
    Nivel_Basico_A1A2, 
    Nivel_Intermedio_B1, 
    Nivel_Avanzado_B2 
} from './data.js';


// =========================================================
//                  2. VARIABLES GLOBALES DE LA APLICACIÓN
// =========================================================

// Mapeo de niveles para la función loadVocabularyForLevel
const levelMap = {
    'basico': Nivel_Basico_A1A2,
    'intermedio': Nivel_Intermedio_B1,
    'avanzado': Nivel_Avanzado_B2,
    // El array 'all' se crea aquí para incluir TODAS las palabras
    'all': [...Nivel_Basico_A1A2, ...Nivel_Intermedio_B1, ...Nivel_Avanzado_B2]
};

let currentVocabulary = levelMap.all; // Vocabulario activo (por defecto, todos)
let currentWordIndex = 0;
let score = 0;
let streak = 0;
let maxWordsLearned = 0; // Se actualiza al cargar el vocabulario


// =========================================================
//                  3. MANEJO DE ESTADO Y UI
// =========================================================

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


// =========================================================
//                  4. FUNCIONES PRINCIPALES
// =========================================================

// Llamada desde el HTML al cambiar el <select>
window.loadVocabularyForLevel = function() {
    const level = document.getElementById('levelSelect').value;
    currentVocabulary = levelMap[level];
    maxWordsLearned = currentVocabulary.length;

    document.getElementById('status-message').textContent = `Cargado Nivel: ${level.toUpperCase()}. Palabras: ${maxWordsLearned}`;
    
    // Reinicia el estado del juego para el nuevo nivel
    resetGame();
    shuffleVocabulary();
    displayWord();
}

function shuffleVocabulary() {
    // Algoritmo Fisher-Yates para mezclar
    for (let i = currentVocabulary.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [currentVocabulary[i], currentVocabulary[j]] = [currentVocabulary[j], currentVocabulary[i]];
    }
    currentWordIndex = 0; // Reinicia el índice después de mezclar
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
        // Todas las palabras han sido mostradas
        wordDisplay.textContent = "¡Misión Cumplida! Mezclando de nuevo...";
        sentenceDisplay.textContent = "";
        spanishTranslationDisplay.classList.add('hidden');
        spanishSentenceDisplay.classList.add('hidden');
        shuffleVocabulary();
        currentWordIndex = 0; // Empieza desde el principio de nuevo
        // Pequeño retraso para mostrar el mensaje de misión cumplida
        setTimeout(displayWord, 1500); 
        return;
    }
    
    const word = currentVocabulary[currentWordIndex];

    wordDisplay.textContent = word.english;
    sentenceDisplay.textContent = word.sentence;
    
    // Limpiar y ocultar elementos de respuesta
    document.getElementById('translation-input').value = '';
    document.getElementById('feedback-message').textContent = '';
    spanishTranslationDisplay.classList.add('hidden');
    spanishSentenceDisplay.classList.add('hidden');
    spanishSentenceDisplay.textContent = '';

    // Actualizar botones y racha
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
    
    // Las posibles traducciones están separadas por ' / ' en la data.
    const correctTranslations = currentWord.spanish.split(' / ').map(s => s.trim().toLowerCase());

    const isCorrect = correctTranslations.includes(userInput);
    
    // Desactivar entrada/verificación para la palabra actual
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
    // Prepara el botón para la siguiente palabra
    document.getElementById('next-button').textContent = 'Continuar >>';
}

function showAnswer() {
    if (currentVocabulary.length === 0 || currentWordIndex >= currentVocabulary.length) return;

    const currentWord = currentVocabulary[currentWordIndex];
    const spanishTranslationDisplay = document.getElementById('spanish-translation');
    const spanishSentenceDisplay = document.getElementById('spanish-sentence');
    
    // Mostrar la respuesta y la frase
    spanishTranslationDisplay.textContent = `Traducción: ${currentWord.spanish}`;
    spanishTranslationDisplay.classList.remove('hidden');
    
    spanishSentenceDisplay.textContent = `Traducción de la Oración: ${currentWord.sentenceSpanish}`;
    spanishSentenceDisplay.classList.remove('hidden');
    
    // Penalización por pedir pista
    score = Math.max(0, score - 5);
    streak = 0;
    updateScoreDisplay();

    // Deshabilita la verificación y la pista para la palabra actual
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

// =========================================================
//                  5. FUNCIONES DE AUDIO (TTS)
// =========================================================

const synth = window.speechSynthesis;

function speak(text, lang) {
    if (synth.speaking) {
        synth.cancel();
    }
    const utterance = new SpeechSynthesisUtterance(text);
    // Establecer el idioma de la voz
    utterance.lang = lang; 
    utterance.rate = 0.9; // Habla un poco más lento
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


// =========================================================
//                  6. TRADUCTOR RÁPIDO
// =========================================================

function quickSearchAndSpeak() {
    const searchInput = document.getElementById('search-input');
    const searchResult = document.getElementById('search-result');
    const query = searchInput.value.trim().toLowerCase();

    if (query === "") {
        searchResult.textContent = "Por favor, introduce una palabra para buscar.";
        searchResult.className = 'translation-result feedback-incorrect';
        return;
    }

    // Buscamos en todo el vocabulario, incluyendo todos los niveles
    const allWords = levelMap.all;
    
    // Filtramos la palabra que coincida, buscando tanto en español como en inglés
    const foundWord = allWords.find(item => 
        // Verifica si la consulta está en la traducción española (manejando las barras '/')
        item.spanish.toLowerCase().split(' / ').map(s => s.trim()).includes(query) || 
        // Verifica si la consulta coincide con la palabra en inglés
        item.english.toLowerCase() === query
    );

    if (foundWord) {
        // Siempre mostramos la palabra y la leemos en inglés
        const textToSpeak = foundWord.english; 
        
        searchResult.innerHTML = `
            <strong>Inglés:</strong> ${foundWord.english} <br>
            <strong>Español:</strong> ${foundWord.spanish} <br>
            <strong>Ejemplo:</strong> ${foundWord.sentence} <br>
            <em>(${foundWord.sentenceSpanish})</em>
        `;
        searchResult.className = 'translation-result feedback-correct';
        
        speak(textToSpeak, 'en-US'); // Siempre hablamos la palabra en inglés
    } else {
        searchResult.textContent = `❌ Palabra "${query}" no encontrada en la lista.`;
        searchResult.className = 'translation-result feedback-incorrect';
    }
}


// =========================================================
//                  7. INICIALIZACIÓN GLOBAL
// =========================================================

window.onload = function() {
    // 1. Asigna Event Listeners
    document.getElementById('next-button').onclick = nextWord;
    document.getElementById('check-button').onclick = checkTranslation;
    document.getElementById('show-answer-button').onclick = showAnswer;
    document.getElementById('reset-button').onclick = resetGame;
    document.getElementById('search-button').onclick = quickSearchAndSpeak;

    // Permitir Enter en el input para verificar
    document.getElementById('translation-input').addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            checkTranslation();
        }
    });

    // 2. Carga el nivel inicial (Todos los niveles)
    loadVocabularyForLevel(); 
    
    document.getElementById('status-message').textContent = "¡Listo para la Quest! Selecciona un nivel o pulsa 'Siguiente Palabra'.";
};
