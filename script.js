// --- 1. Base de Datos (Se mantiene tu lista de vocabulario) ---
const vocabulary = [
  
    { english: "Knowledge", spanish: "Conocimiento", sentence: "Knowledge is power.", sentenceSpanish: "El conocimiento es poder." },
    { english: "Improve", spanish: "Mejorar", sentence: "I want to improve my English.", sentenceSpanish: "Quiero mejorar mi inglés." },
    { english: "Challenge", spanish: "Desafío", sentence: "This puzzle is a great challenge.", sentenceSpanish: "Este rompecabezas es un gran desafío." },
    { english: "Therefore", spanish: "Por lo tanto", sentence: "It's raining; therefore, we must stay inside.", sentenceSpanish: "Está lloviendo; por lo tanto, debemos quedarnos dentro." },
    { english: "Awesome", spanish: "Increíble", sentence: "The concert was awesome last night.", sentenceSpanish: "El concierto fue increíble anoche." },
    { english: "Reliable", spanish: "Fiable / Confiable", sentence: "She is a reliable employee.", sentenceSpanish: "Ella es una empleada confiable." },
    { english: "Opportunity", spanish: "Oportunidad", sentence: "Don't miss this opportunity.", sentenceSpanish: "No pierdas esta oportunidad." },
    { english: "Goal", spanish: "Meta / Objetivo", sentence: "My main goal is to travel more.", sentenceSpanish: "Mi principal objetivo es viajar más." },
    { english: "Effort", spanish: "Esfuerzo", sentence: "Success requires constant effort.", sentenceSpanish: "El éxito requiere un esfuerzo constante." },
    { english: "Consider", spanish: "Considerar", sentence: "Did you consider my proposal?", sentenceSpanish: "¿Consideraste mi propuesta?" },
    { english: "Develop", spanish: "Desarrollar", sentence: "We need to develop new skills.", sentenceSpanish: "Necesitamos desarrollar nuevas habilidades." },
    { english: "Available", spanish: "Disponible", sentence: "Is the product available in blue?", sentenceSpanish: "¿Está el producto disponible en azul?" },
    { english: "Environment", spanish: "Medio ambiente", sentence: "Protecting the environment is vital.", sentenceSpanish: "Proteger el medio ambiente es vital." },
    { english: "Essential", spanish: "Esencial", sentence: "Water is essential for life.", sentenceSpanish: "El agua es esencial para la vida." },
    { english: "Imagine", spanish: "Imaginar", sentence: "Can you imagine a world without cars?", sentenceSpanish: "¿Puedes imaginar un mundo sin coches?" },
    { english: "Process", spanish: "Proceso", sentence: "Learning a language is a long process.", sentenceSpanish: "Aprender un idioma es un proceso largo." },
    { english: "Strategy", spanish: "Estrategia", sentence: "They adopted a new marketing strategy.", sentenceSpanish: "Adoptaron una nueva estrategia de marketing." },
    { english: "Variety", spanish: "Variedad", sentence: "The store offers a wide variety of goods.", sentenceSpanish: "La tienda ofrece una amplia variedad de productos." },
    { english: "Achieve", spanish: "Lograr", sentence: "She hopes to achieve her dreams.", sentenceSpanish: "Ella espera lograr sus sueños." },
    { english: "Benefit", spanish: "Beneficio", sentence: "Exercise has many health benefits.", sentenceSpanish: "El ejercicio tiene muchos beneficios para la salud." },
    { english: "Completely", spanish: "Completamente", sentence: "I completely forgot about the meeting.", sentenceSpanish: "Me olvidé completamente de la reunión." },
    { english: "Decision", spanish: "Decisión", sentence: "We need to make a final decision soon.", sentenceSpanish: "Necesitamos tomar una decisión final pronto." },
    { english: "Experience", spanish: "Experiencia", sentence: "Traveling broadens your experience.", sentenceSpanish: "Viajar amplía tu experiencia." },
    { english: "Feature", spanish: "Característica", sentence: "The main feature of this phone is the camera.", sentenceSpanish: "La principal característica de este teléfono es la cámara." },
    { english: "Handle", spanish: "Manejar", sentence: "He knows how to handle difficult situations.", sentenceSpanish: "Él sabe cómo manejar situaciones difíciles." },
    { english: "Identify", spanish: "Identificar", sentence: "Can you identify the source of the noise?", sentenceSpanish: "¿Puedes identificar la fuente del ruido?" },
    { english: "Measure", spanish: "Medir", sentence: "Please measure the room dimensions.", sentenceSpanish: "Por favor, mide las dimensiones de la habitación." },
    { english: "Notice", spanish: "Notar / Aviso", sentence: "Did you notice the color change?", sentenceSpanish: "¿Notaste el cambio de color?" },
    { english: "Obvious", spanish: "Obvio", sentence: "The answer was quite obvious.", sentenceSpanish: "La respuesta era bastante obvia." },
    { english: "Purpose", spanish: "Propósito", sentence: "What is the purpose of this device?", sentenceSpanish: "¿Cuál es el propósito de este dispositivo?" },
    { english: "Quantity", spanish: "Cantidad", sentence: "We need a large quantity of material.", sentenceSpanish: "Necesitamos una gran cantidad de material." },
    { english: "Regularly", spanish: "Regularmente", sentence: "I visit my parents regularly.", sentenceSpanish: "Visito a mis padres regularmente." },
    { english: "Slightly", spanish: "Ligeramente", sentence: "The door was only slightly open.", sentenceSpanish: "La puerta estaba solo ligeramente abierta." },
    { english: "Suggest", spanish: "Sugerir", sentence: "I suggest we take a break now.", sentenceSpanish: "Sugiero que tomemos un descanso ahora." },
    { english: "Throughout", spanish: "A lo largo de", sentence: "It rained throughout the night.", sentenceSpanish: "Llovió a lo largo de toda la noche." },
    { english: "Upcoming", spanish: "Próximo / Venidero", sentence: "The upcoming election is important.", sentenceSpanish: "La próxima elección es importante." },
    { english: "Valid", spanish: "Válido", sentence: "Do you have a valid passport?", sentenceSpanish: "¿Tienes un pasaporte válido?" },
    { english: "Wonder", spanish: "Preguntarse / Maravilla", sentence: "I wonder where they went.", sentenceSpanish: "Me pregunto adónde fueron." },
    { english: "Yield", spanish: "Ceder / Rendimiento", sentence: "The sign means you must yield.", sentenceSpanish: "La señal significa que debes ceder el paso." },
    { english: "Zest", spanish: "Entusiasmo / Ralladura", sentence: "She approached the project with great zest.", sentenceSpanish: "Ella abordó el proyecto con gran entusiasmo." },
    { english: "Address", spanish: "Dirigir / Dirección", sentence: "Please address your questions to me.", sentenceSpanish: "Por favor, dirija sus preguntas a mí." },
    { english: "Assume", spanish: "Asumir", sentence: "Don't assume anything without proof.", sentenceSpanish: "No asumas nada sin pruebas." },
    { english: "Client", spanish: "Cliente", sentence: "Our client was very satisfied.", sentenceSpanish: "Nuestro cliente quedó muy satisfecho." },
    { english: "Determine", spanish: "Determinar", sentence: "They need to determine the cause of the problem.", sentenceSpanish: "Necesitan determinar la causa del problema." },
    { english: "Ensure", spanish: "Asegurar / Garantizar", sentence: "We must ensure the safety of our guests.", sentenceSpanish: "Debemos garantizar la seguridad de nuestros huéspedes." },
    { english: "Flexible", spanish: "Flexible", sentence: "Are your working hours flexible?", sentenceSpanish: "¿Son flexibles tus horas de trabajo?" },
    { english: "Involve", spanish: "Involucrar", sentence: "The job involves a lot of travel.", sentenceSpanish: "El trabajo involucra muchos viajes." },
    { english: "Manage", spanish: "Administrar / Gestionar", sentence: "Can you manage this team effectively?", sentenceSpanish: "¿Puedes administrar este equipo eficazmente?" },
    { english: "Require", spanish: "Requerir", sentence: "The task requires a high level of concentration.", sentenceSpanish: "La tarea requiere un alto nivel de concentración." },
    { english: "Solution", spanish: "Solución", sentence: "We found a simple solution to the issue.", sentenceSpanish: "Encontramos una solución simple al problema." },
    
    // NUEVAS PALABRAS (30 adicionales para llegar a 80)
    { english: "Acquire", spanish: "Adquirir", sentence: "We plan to acquire a new company.", sentenceSpanish: "Planeamos adquirir una nueva compañía." },
    { english: "Accurate", spanish: "Preciso / Exacto", sentence: "The data must be accurate.", sentenceSpanish: "Los datos deben ser precisos." },
    { english: "Adjust", spanish: "Ajustar", sentence: "You need to adjust the monitor height.", sentenceSpanish: "Necesitas ajustar la altura del monitor." },
    { english: "Briefly", spanish: "Brevemente", sentence: "He spoke briefly about his trip.", sentenceSpanish: "Él habló brevemente sobre su viaje." },
    { english: "Capacity", spanish: "Capacidad", sentence: "The hall has a capacity of 300 people.", sentenceSpanish: "El salón tiene una capacidad para 300 personas." },
    { english: "Cautious", spanish: "Cauteloso", sentence: "Be cautious when crossing the street.", sentenceSpanish: "Sé cauteloso al cruzar la calle." },
    { english: "Confirm", spanish: "Confirmar", sentence: "Please confirm your reservation.", sentenceSpanish: "Por favor, confirma tu reservación." },
    { english: "Curious", spanish: "Curioso", sentence: "I am curious about the results.", sentenceSpanish: "Tengo curiosidad por los resultados." },
    { english: "Disrupt", spanish: "Interrumpir / Perturbar", sentence: "Noise can disrupt concentration.", sentenceSpanish: "El ruido puede interrumpir la concentración." },
    { english: "Eager", spanish: "Ansioso / Entusiasmado", sentence: "She is eager to start her new job.", sentenceSpanish: "Ella está ansiosa por empezar su nuevo trabajo." },
    { english: "Evaluate", spanish: "Evaluar", sentence: "We need to evaluate the risks.", sentenceSpanish: "Necesitamos evaluar los riesgos." },
    { english: "Exceed", spanish: "Exceder", sentence: "Do not exceed the speed limit.", sentenceSpanish: "No excedas el límite de velocidad." },
    { english: "Fulfill", spanish: "Cumplir", sentence: "He must fulfill his promises.", sentenceSpanish: "Él debe cumplir sus promesas." },
    { english: "Generate", spanish: "Generar", sentence: "The machine generates electricity.", sentenceSpanish: "La máquina genera electricidad." },
    { english: "Hesitate", spanish: "Dudar / Vacilar", sentence: "Don't hesitate to ask questions.", sentenceSpanish: "No dudes en hacer preguntas." },
    { english: "Immediate", spanish: "Inmediato", sentence: "We require an immediate response.", sentenceSpanish: "Requerimos una respuesta inmediata." },
    { english: "Integrate", spanish: "Integrar", sentence: "We need to integrate the new system.", sentenceSpanish: "Necesitamos integrar el nuevo sistema." },
    { english: "Maintain", spanish: "Mantener", sentence: "You must maintain constant speed.", sentenceSpanish: "Debes mantener una velocidad constante." },
    { english: "Negotiate", spanish: "Negociar", sentence: "They will negotiate the contract terms.", sentenceSpanish: "Ellos negociarán los términos del contrato." },
    { english: "Persist", spanish: "Persistir", sentence: "He decided to persist with his studies.", sentenceSpanish: "Él decidió persistir con sus estudios." },
    { english: "Prioritize", spanish: "Priorizar", sentence: "You must prioritize your tasks.", sentenceSpanish: "Debes priorizar tus tareas." },
    { english: "Reflect", spanish: "Reflejar / Reflexionar", sentence: "The mirror reflects the light.", sentenceSpanish: "El espejo refleja la luz." },
    { english: "Release", spanish: "Liberar / Lanzar", sentence: "The company will release a new product.", sentenceSpanish: "La compañía lanzará un nuevo producto." },
    { english: "Respond", spanish: "Responder", sentence: "I need you to respond to this email.", sentenceSpanish: "Necesito que respondas a este correo electrónico." },
    { english: "Severe", spanish: "Grave / Severo", sentence: "The weather forecast predicts severe rain.", sentenceSpanish: "El pronóstico del tiempo predice lluvia severa." },
    { english: "Simplify", spanish: "Simplificar", sentence: "We should simplify this procedure.", sentenceSpanish: "Deberíamos simplificar este procedimiento." },
    { english: "Suspend", spanish: "Suspender", sentence: "The bus service was suspended due to snow.", sentenceSpanish: "El servicio de autobús fue suspendido debido a la nieve." },
    { english: "Tremendous", spanish: "Tremendo / Enorme", sentence: "She made a tremendous effort.", sentenceSpanish: "Ella hizo un esfuerzo tremendo." },
    { english: "Uncertain", spanish: "Incierto", sentence: "The outcome of the election is uncertain.", sentenceSpanish: "El resultado de la elección es incierto." },
    { english: "Visualize", spanish: "Visualizar", sentence: "Try to visualize the final outcome.", sentenceSpanish: "Intenta visualizar el resultado final." }
];



// --- 2. Variables de Estado y DOM ---
let currentWordIndex = -1;
let score = 0; // NUEVO: Contador de puntuación
let hasChecked = false; // Estado para saber si ya intentó verificar

// Referencias al DOM
const englishWordDOM = document.getElementById('english-word');
const nextButton = document.getElementById('next-button');
const audioButtonWord = document.getElementById('audio-button-word');
const audioButtonSentence = document.getElementById('audio-button-sentence');
const statusMessageDOM = document.getElementById('status-message');
const englishSentenceDOM = document.getElementById('english-sentence');
const spanishSentenceDOM = document.getElementById('spanish-sentence');
const spanishTranslationDOM = document.getElementById('spanish-translation'); // Todavía la usamos para la respuesta

// NUEVAS REFERENCIAS PARA EL EJERCICIO ACTIVO
const translationInput = document.getElementById('translation-input');
const checkButton = document.getElementById('check-button');
const feedbackMessageDOM = document.getElementById('feedback-message');
const showAnswerButton = document.getElementById('show-answer-button'); // Botón para revelar
const scoreDisplay = document.createElement('p'); // Elemento para mostrar la puntuación

// --- 3. Funcionalidad de Pronunciación ---

function speakText(text, language = 'en-US') {
    if ('speechSynthesis' in window && text) {
        const utterance = new SpeechSynthesisUtterance(text);
        utterance.lang = language; 
        utterance.rate = 0.9; 
        
        window.speechSynthesis.cancel();
        window.speechSynthesis.speak(utterance);
    } else {
        console.warn("Speech Synthesis no está disponible.");
    }
}

// --- 4. Funciones de Lógica ---

function getRandomWord() {
    if (vocabulary.length === 0) return null;
    let newIndex;
    do {
        newIndex = Math.floor(Math.random() * vocabulary.length);
    } while (newIndex === currentWordIndex);
    currentWordIndex = newIndex;
    return vocabulary[currentWordIndex];
}

// Función principal para mostrar una nueva palabra
function displayNextWord() {
    const word = getRandomWord();
    if (!word) return;

    // Resetear el estado del ejercicio
    hasChecked = false;
    translationInput.value = '';
    translationInput.disabled = false;
    checkButton.disabled = false;
    feedbackMessageDOM.className = 'translation-result'; // Limpiar clases de feedback
    feedbackMessageDOM.textContent = '';
    
    // Ocultar las respuestas
    spanishTranslationDOM.classList.add('hidden');
    spanishSentenceDOM.classList.add('hidden');
    showAnswerButton.disabled = false;

    // 1. Palabra
    englishWordDOM.textContent = word.english;
    
    // 2. Oración
    englishSentenceDOM.textContent = word.sentence;
    spanishTranslationDOM.textContent = word.spanish; // Almacena la respuesta en el DOM (oculta)

    // Actualizar el botón principal
    nextButton.textContent = 'Siguiente Palabra (Next)';
    
    // Opcional: Pronunciar la palabra automáticamente
    // speakText(word.english); 
    
    updateScoreDisplay(); // Actualizar la puntuación
}

// NUEVA FUNCIÓN: Verificar la traducción del usuario
function checkTranslation() {
    if (currentWordIndex === -1 || hasChecked) return;

    const currentWord = vocabulary[currentWordIndex];
    const userAnswer = translationInput.value.trim().toLowerCase();
    
    // Función de comparación flexible: acepta múltiples traducciones (separadas por '/')
    const correctAnswers = currentWord.spanish.toLowerCase().split('/').map(s => s.trim());
    
    let isCorrect = correctAnswers.includes(userAnswer);

    // Si no es correcto, intentar una limpieza de acentos y puntuación
    if (!isCorrect) {
        // Opción: permitir pequeños errores o buscar coincidencias parciales
        isCorrect = correctAnswers.some(answer => answer === userAnswer);
    }
    
    if (isCorrect) {
        score++;
        feedbackMessageDOM.textContent = '¡Correcto! ✅';
        feedbackMessageDOM.classList.add('feedback-correct');
    } else {
        feedbackMessageDOM.textContent = `Incorrecto. La respuesta era: "${currentWord.spanish}" ❌`;
        feedbackMessageDOM.classList.add('feedback-incorrect');
    }

    // Bloquear el input y el botón de verificación después del primer intento
    translationInput.disabled = true;
    checkButton.disabled = true;
    hasChecked = true;
    
    updateScoreDisplay();
}

// Función para revelar la respuesta sin verificar
function revealAnswer() {
    if (currentWordIndex === -1) return;
    
    const currentWord = vocabulary[currentWordIndex];
    
    // Mostrar respuestas y bloquear verificación
    spanishTranslationDOM.classList.remove('hidden');
    spanishSentenceDOM.classList.remove('hidden');
    translationInput.disabled = true;
    checkButton.disabled = true;
    showAnswerButton.disabled = true;
    
    feedbackMessageDOM.textContent = `Respuesta revelada: ${currentWord.spanish}`;
    feedbackMessageDOM.classList.remove('feedback-correct', 'feedback-incorrect');
}

// Función para actualizar la puntuación
function updateScoreDisplay() {
    scoreDisplay.textContent = `Puntuación: ${score} puntos`;
}


// --- 5. Event Listeners ---

nextButton.addEventListener('click', () => {
    // Si no ha revisado la palabra anterior, forzamos un aviso (o simplemente pasamos)
    if (currentWordIndex !== -1 && !hasChecked) {
        if (!confirm("¿Seguro que quieres pasar sin verificar la respuesta?")) {
            return;
        }
    }
    displayNextWord();
});

// NUEVO Event Listener para la verificación
checkButton.addEventListener('click', checkTranslation);

// Permitir Enter para verificar
translationInput.addEventListener('keydown', (event) => {
    if (event.key === 'Enter' && !checkButton.disabled) {
        checkTranslation();
    }
});

// NUEVO Event Listener para revelar la respuesta
showAnswerButton.addEventListener('click', revealAnswer);


audioButtonWord.addEventListener('click', () => {
    if (currentWordIndex !== -1) {
        speakText(vocabulary[currentWordIndex].english);
    }
});

audioButtonSentence.addEventListener('click', () => {
    if (currentWordIndex !== -1) {
        speakText(vocabulary[currentWordIndex].sentence);
    }
});

// --- 6. Inicialización ---

document.addEventListener('DOMContentLoaded', () => {
    // Añadir el display de puntuación
    const controlsDiv = document.querySelector('.controls');
    controlsDiv.parentNode.insertBefore(scoreDisplay, controlsDiv);
    
    statusMessageDOM.textContent = "¡Vocabulario cargado!";
    nextButton.disabled = false;
    audioButtonWord.disabled = false;
    audioButtonSentence.disabled = false;

    englishWordDOM.textContent = "Ready to learn? (Listo para aprender?)";
    englishSentenceDOM.textContent = "Press START to begin.";
    updateScoreDisplay(); // Inicializar puntuación
});
