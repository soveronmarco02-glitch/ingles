// =========================================================
//                  1. BASE DE DATOS CLASIFICADA (300 PALABRAS)
// =========================================================

const Nivel_Basico_A1A2 = [
    // --- Nivel 1: Básico (A1/A2) - 100 Palabras ---
    // Verbos de Uso Diario
    { english: "Walk", spanish: "Caminar", sentence: "I like to walk in the park every morning.", sentenceSpanish: "Me gusta caminar en el parque todas las mañanas." },
    { english: "Talk", spanish: "Hablar", sentence: "Can we talk about the plan now?", sentenceSpanish: "¿Podemos hablar del plan ahora?" },
    { english: "Live", spanish: "Vivir", sentence: "She lives in a big city.", sentenceSpanish: "Ella vive en una ciudad grande." },
    { english: "Help", spanish: "Ayudar", sentence: "Will you help me move this box?", sentenceSpanish: "¿Me ayudarás a mover esta caja?" },
    { english: "Wait", spanish: "Esperar (tiempo)", sentence: "Please wait for me at the station.", sentenceSpanish: "Por favor, espérame en la estación." },
    { english: "Ask", spanish: "Preguntar / Pedir", sentence: "I need to ask a question.", sentenceSpanish: "Necesito hacer una pregunta." },
    { english: "Call", spanish: "Llamar", sentence: "I will call you tonight.", sentenceSpanish: "Te llamaré esta noche." },
    { english: "Find", spanish: "Encontrar", sentence: "Did you find your keys?", sentenceSpanish: "¿Encontraste tus llaves?" },
    { english: "Look", spanish: "Mirar", sentence: "Look at the beautiful sky.", sentenceSpanish: "Mira el hermoso cielo." },
    { english: "Try", spanish: "Intentar / Probar", sentence: "I will try to finish the work.", sentenceSpanish: "Intentaré terminar el trabajo." },
    { english: "Start", spanish: "Empezar", sentence: "The movie starts at eight.", sentenceSpanish: "La película empieza a las ocho." },
    { english: "Stop", spanish: "Detener / Parar", sentence: "Please stop the car here.", sentenceSpanish: "Por favor, detén el coche aquí." },
    { english: "Bring", spanish: "Traer", sentence: "Can you bring me a glass of water?", sentenceSpanish: "¿Puedes traerme un vaso de agua?" },
    { english: "Send", spanish: "Enviar", sentence: "I need to send this email.", sentenceSpanish: "Necesito enviar este correo electrónico." },
    { english: "Pay", spanish: "Pagar", sentence: "How much did you pay for this?", sentenceSpanish: "¿Cuánto pagaste por esto?" },
    { english: "Hear", spanish: "Oír", sentence: "I can hear music from next door.", sentenceSpanish: "Puedo oír música de al lado." },
    { english: "Show", spanish: "Mostrar / Enseñar", sentence: "Show me your new phone.", sentenceSpanish: "Muéstrame tu nuevo teléfono." },
    { english: "Feel", spanish: "Sentir", sentence: "I feel tired after the exercise.", sentenceSpanish: "Me siento cansado después del ejercicio." },
    { english: "Keep", spanish: "Mantener / Guardar", sentence: "Keep the change, please.", sentenceSpanish: "Quédate con el cambio, por favor." },
    { english: "Forget", spanish: "Olvidar", sentence: "Don't forget your password.", sentenceSpanish: "No olvides tu contraseña." },

    // Sustantivos Esenciales
    { english: "Time", spanish: "Tiempo / Hora", sentence: "What time is the meeting?", sentenceSpanish: "¿A qué hora es la reunión?" },
    { english: "Day", spanish: "Día", sentence: "Today is a sunny day.", sentenceSpanish: "Hoy es un día soleado." },
    { english: "Week", spanish: "Semana", sentence: "I will see you next week.", sentenceSpanish: "Te veré la próxima semana." },
    { english: "Work", spanish: "Trabajo", sentence: "I have a lot of work to do.", sentenceSpanish: "Tengo mucho trabajo que hacer." },
    { english: "Money", spanish: "Dinero", sentence: "I don't have enough money for that.", sentenceSpanish: "No tengo suficiente dinero para eso." },
    { english: "Place", spanish: "Lugar", sentence: "This is a nice place to relax.", sentenceSpanish: "Este es un buen lugar para relajarse." },
    { english: "Food", spanish: "Comida", sentence: "What kind of food do you like?", sentenceSpanish: "¿Qué tipo de comida te gusta?" },
    { english: "Water", spanish: "Agua", sentence: "Can I have a glass of water?", sentenceSpanish: "¿Puedo tomar un vaso de agua?" },
    { english: "Car", spanish: "Coche / Carro", sentence: "My new car is red.", sentenceSpanish: "Mi coche nuevo es rojo." },
    { english: "Friend", spanish: "Amigo/a", sentence: "She is my best friend.", sentenceSpanish: "Ella es mi mejor amiga." },
    { english: "Family", spanish: "Familia", sentence: "My family is very important to me.", sentenceSpanish: "Mi familia es muy importante para mí." },
    { english: "House", spanish: "Casa", sentence: "I live in a small house.", sentenceSpanish: "Vivo en una casa pequeña." },
    { english: "Door", spanish: "Puerta", sentence: "Close the door, please.", sentenceSpanish: "Cierra la puerta, por favor." },
    { english: "Key", spanish: "Llave", sentence: "I lost my house key.", sentenceSpanish: "Perdí la llave de mi casa." },
    { english: "Book", spanish: "Libro", sentence: "I am reading an interesting book.", sentenceSpanish: "Estoy leyendo un libro interesante." },
    { english: "Table", spanish: "Mesa", sentence: "Put the plates on the table.", sentenceSpanish: "Pon los platos en la mesa." },
    { english: "Chair", spanish: "Silla", sentence: "Sit down on the chair.", sentenceSpanish: "Siéntate en la silla." },
    { english: "Street", spanish: "Calle", sentence: "The house is on this street.", sentenceSpanish: "La casa está en esta calle." },
    { english: "City", spanish: "Ciudad", sentence: "London is a big city.", sentenceSpanish: "Londres es una ciudad grande." },
    { english: "Country", spanish: "País / Campo", sentence: "Which country are you from?", sentenceSpanish: "¿De qué país eres?" },

    // Adjetivos Comunes
    { english: "Good", spanish: "Bueno", sentence: "Have a good day!", sentenceSpanish: "¡Ten un buen día!" },
    { english: "Bad", spanish: "Malo", sentence: "It was a bad idea to go out.", sentenceSpanish: "Fue una mala idea salir." },
    { english: "Big", spanish: "Grande", sentence: "I saw a big dog.", sentenceSpanish: "Vi un perro grande." },
    { english: "Small", spanish: "Pequeño", sentence: "She lives in a small apartment.", sentenceSpanish: "Ella vive en un apartamento pequeño." },
    { english: "Happy", spanish: "Feliz", sentence: "I am very happy today.", sentenceSpanish: "Estoy muy feliz hoy." },
    { english: "Sad", spanish: "Triste", sentence: "Why are you looking sad?", sentenceSpanish: "¿Por qué te ves triste?" },
    { english: "New", spanish: "Nuevo", sentence: "I bought a new computer.", sentenceSpanish: "Compré un ordenador nuevo." },
    { english: "Old", spanish: "Viejo / Antiguo", sentence: "This building is very old.", sentenceSpanish: "Este edificio es muy antiguo." },
    { english: "Easy", spanish: "Fácil", sentence: "The test was very easy.", sentenceSpanish: "El examen fue muy fácil." },
    { english: "Difficult", spanish: "Difícil", sentence: "It is a difficult question.", sentenceSpanish: "Es una pregunta difícil." },
    { english: "Fast", spanish: "Rápido", sentence: "The train is very fast.", sentenceSpanish: "El tren es muy rápido." },
    { english: "Slow", spanish: "Lento", sentence: "He drives too slow.", sentenceSpanish: "Él conduce demasiado lento." },
    { english: "Hot", spanish: "Caliente / Calor", sentence: "The coffee is too hot.", sentenceSpanish: "El café está demasiado caliente." },
    { english: "Cold", spanish: "Frío", sentence: "It is very cold outside.", sentenceSpanish: "Hace mucho frío afuera." },
    { english: "Right", spanish: "Correcto / Derecha", sentence: "Your answer is right.", sentenceSpanish: "Tu respuesta es correcta." },
    { english: "Wrong", spanish: "Incorrecto / Mal", sentence: "That answer is wrong.", sentenceSpanish: "Esa respuesta es incorrecta." },
    { english: "High", spanish: "Alto (nivel/altura)", sentence: "The mountain is very high.", sentenceSpanish: "La montaña es muy alta." },
    { english: "Low", spanish: "Bajo (nivel)", sentence: "The battery is low.", sentenceSpanish: "La batería está baja." },
    { english: "Free", spanish: "Libre / Gratis", sentence: "Is this chair free?", sentenceSpanish: "¿Está libre esta silla?" },
    { english: "Sure", spanish: "Seguro", sentence: "Are you sure about that?", sentenceSpanish: "¿Estás seguro de eso?" },

    // Preposiciones y Adverbios Comunes
    { english: "Always", spanish: "Siempre", sentence: "I always drink water.", sentenceSpanish: "Siempre bebo agua." },
    { english: "Never", spanish: "Nunca", sentence: "I never eat meat.", sentenceSpanish: "Nunca como carne." },
    { english: "Often", spanish: "A menudo", sentence: "We often go to the beach.", sentenceSpanish: "A menudo vamos a la playa." },
    { english: "Sometimes", spanish: "A veces", sentence: "Sometimes I watch TV.", sentenceSpanish: "A veces veo la televisión." },
    { english: "Here", spanish: "Aquí", sentence: "Please come here.", sentenceSpanish: "Por favor, ven aquí." },
    { english: "There", spanish: "Allí", sentence: "The book is over there.", sentenceSpanish: "El libro está por allí." },
    { english: "Before", spanish: "Antes de", sentence: "Wash your hands before eating.", sentenceSpanish: "Lávate las manos antes de comer." },
    { english: "After", spanish: "Después de", sentence: "I will call you after work.", sentenceSpanish: "Te llamaré después del trabajo." },
    { english: "Under", spanish: "Debajo de", sentence: "The cat is under the table.", sentenceSpanish: "El gato está debajo de la mesa." },
    { english: "Above", spanish: "Encima de / Arriba", sentence: "The light is above the bed.", sentenceSpanish: "La luz está encima de la cama." },
    { english: "Between", spanish: "Entre (dos)", sentence: "The park is between the two buildings.", sentenceSpanish: "El parque está entre los dos edificios." },
    { english: "Near", spanish: "Cerca de", sentence: "My house is near the school.", sentenceSpanish: "Mi casa está cerca de la escuela." },
    { english: "Far", spanish: "Lejos", sentence: "Is the store far from here?", sentenceSpanish: "¿Está la tienda lejos de aquí?" },
    { english: "Early", spanish: "Temprano", sentence: "I wake up early every day.", sentenceSpanish: "Me levanto temprano todos los días." },
    { english: "Late", spanish: "Tarde", sentence: "I was late for the appointment.", sentenceSpanish: "Llegué tarde a la cita." },
    { english: "Only", spanish: "Solo / Solamente", sentence: "I have only one sister.", sentenceSpanish: "Solo tengo una hermana." },
    { english: "Very", spanish: "Muy", sentence: "I am very tired.", sentenceSpanish: "Estoy muy cansado." },
    { english: "Too", spanish: "Demasiado / También", sentence: "The music is too loud.", sentenceSpanish: "La música está demasiado alta." },
    { english: "Then", spanish: "Entonces / Luego", sentence: "First, we eat, then we talk.", sentenceSpanish: "Primero comemos, luego hablamos." },
    { english: "Also", spanish: "También / Además", sentence: "She is a doctor and also a writer.", sentenceSpanish: "Ella es doctora y también escritora." },

    // Phrasal Verbs Básicos
    { english: "Get up", spanish: "Levantarse", sentence: "I get up at six every morning.", sentenceSpanish: "Me levanto a las seis todas las mañanas." },
    { english: "Go out", spanish: "Salir", sentence: "Let's go out tonight.", sentenceSpanish: "Salgamos esta noche." },
    { english: "Come in", spanish: "Entrar", sentence: "Please come in and sit down.", sentenceSpanish: "Por favor, entra y siéntate." },
    { english: "Turn on", spanish: "Encender", sentence: "Turn on the light, please.", sentenceSpanish: "Enciende la luz, por favor." },
    { english: "Turn off", spanish: "Apagar", sentence: "Turn off the TV before sleeping.", sentenceSpanish: "Apaga la televisión antes de dormir." },
    { english: "Take away", spanish: "Llevarse / Quitar", sentence: "Take away this dirty plate.", sentenceSpanish: "Llévate este plato sucio." },
    { english: "Give back", spanish: "Devolver", sentence: "Give back the book tomorrow.", sentenceSpanish: "Devuelve el libro mañana." },
    { english: "Put on", spanish: "Ponerse (ropa)", sentence: "Put on your jacket, it's cold.", sentenceSpanish: "Ponte la chaqueta, hace frío." },
    { english: "Take off", spanish: "Quitarse (ropa)", sentence: "Take off your shoes inside.", sentenceSpanish: "Quítate los zapatos dentro." },
    { english: "Look for", spanish: "Buscar", sentence: "What are you looking for?", sentenceSpanish: "¿Qué estás buscando?" }
];

const Nivel_Intermedio_B1 = [
    // --- Nivel 2: Intermedio (B1) - 100 Palabras ---
    // Verbos de Acción y Estado
    { english: "Suggest", spanish: "Sugerir", sentence: "I suggest we take a break now.", sentenceSpanish: "Sugiero que tomemos un descanso ahora." },
    { english: "Explain", spanish: "Explicar", sentence: "Can you explain the rules again?", sentenceSpanish: "¿Puedes explicar las reglas de nuevo?" },
    { english: "Require", spanish: "Requerir", sentence: "The job requires attention to detail.", sentenceSpanish: "El trabajo requiere atención al detalle." },
    { english: "Attend", spanish: "Asistir", sentence: "Will you attend the conference next week?", sentenceSpanish: "¿Asistirás a la conferencia la próxima semana?" },
    { english: "Compare", spanish: "Comparar", sentence: "We need to compare the two options.", sentenceSpanish: "Necesitamos comparar las dos opciones." },
    { english: "Publish", spanish: "Publicar", sentence: "The author will publish a new novel soon.", sentenceSpanish: "El autor publicará una nueva novela pronto." },
    { english: "Investigate", spanish: "Investigar", sentence: "The police are investigating the case.", sentenceSpanish: "La policía está investigando el caso." },
    { english: "Express", spanish: "Expresar", sentence: "It is important to express your feelings.", sentenceSpanish: "Es importante expresar tus sentimientos." },
    { english: "Supply", spanish: "Suministrar / Proveer", sentence: "The company supplies fresh water.", sentenceSpanish: "La compañía suministra agua fresca." },
    { english: "Prevent", spanish: "Prevenir / Evitar", sentence: "We must prevent the risk of fire.", sentenceSpanish: "Debemos prevenir el riesgo de incendio." },
    { english: "Distribute", spanish: "Distribuir", sentence: "They will distribute the flyers tomorrow.", sentenceSpanish: "Distribuirán los folletos mañana." },
    { english: "Reserve", spanish: "Reservar", sentence: "I want to reserve a table for two.", sentenceSpanish: "Quiero reservar una mesa para dos." },
    { english: "Acquire", spanish: "Adquirir", sentence: "They plan to acquire a new property.", sentenceSpanish: "Planean adquirir una nueva propiedad." },
    { english: "Respond", spanish: "Responder", sentence: "I need you to respond to my message.", sentenceSpanish: "Necesito que respondas a mi mensaje." },
    { english: "Transfer", spanish: "Transferir", sentence: "Can you transfer the money today?", sentenceSpanish: "¿Puedes transferir el dinero hoy?" },
    { english: "Strengthen", spanish: "Fortalecer", sentence: "Exercise helps strengthen your muscles.", sentenceSpanish: "El ejercicio ayuda a fortalecer tus músculos." },
    { english: "Permit", spanish: "Permitir", sentence: "The rules do not permit smoking.", sentenceSpanish: "Las reglas no permiten fumar." },
    { english: "Calculate", spanish: "Calcular", sentence: "Can you calculate the total cost?", sentenceSpanish: "¿Puedes calcular el costo total?" },
    { english: "Overcome", spanish: "Superar", sentence: "She overcame many obstacles.", sentenceSpanish: "Ella superó muchos obstáculos." },
    { english: "Propose", spanish: "Proponer", sentence: "They proposed a new peace treaty.", sentenceSpanish: "Ellos propusieron un nuevo tratado de paz." },

    // Sustantivos Abstractos y Profesionales
    { english: "Issue", spanish: "Problema / Asunto", sentence: "We need to discuss this important issue.", sentenceSpanish: "Necesitamos discutir este asunto importante." },
    { english: "Ability", spanish: "Habilidad / Capacidad", sentence: "He has a great ability to learn.", sentenceSpanish: "Él tiene una gran habilidad para aprender." },
    { english: "Concept", spanish: "Concepto", sentence: "I understand the basic concept.", sentenceSpanish: "Entiendo el concepto básico." },
    { english: "Evidence", spanish: "Evidencia / Prueba", sentence: "The police found new evidence.", sentenceSpanish: "La policía encontró nueva evidencia." },
    { english: "Feature", spanish: "Característica", sentence: "The main feature of this phone is the camera.", sentenceSpanish: "La principal característica de este teléfono es la cámara." },
    { english: "Resource", spanish: "Recurso", sentence: "Time is a valuable resource.", sentenceSpanish: "El tiempo es un recurso valioso." },
    { english: "Target", spanish: "Objetivo / Meta", sentence: "What is your target income?", sentenceSpanish: "¿Cuál es tu objetivo de ingresos?" },
    { english: "Conflict", spanish: "Conflicto", sentence: "There was a conflict between the neighbors.", sentenceSpanish: "Hubo un conflicto entre los vecinos." },
    { english: "Solution", spanish: "Solución", sentence: "We found a simple solution to the issue.", sentenceSpanish: "Encontramos una solución simple al problema." },
    { english: "Impact", spanish: "Impacto", sentence: "The crisis had a global impact.", sentenceSpanish: "La crisis tuvo un impacto global." },
    { english: "Demand", spanish: "Demanda / Exigencia", sentence: "There is high demand for this product.", sentenceSpanish: "Hay mucha demanda por este producto." },
    { english: "Policy", spanish: "Política / Normativa", sentence: "The company has a strict policy on safety.", sentenceSpanish: "La compañía tiene una política estricta sobre seguridad." },
    { english: "Region", spanish: "Región", sentence: "This region is famous for its wine.", sentenceSpanish: "Esta región es famosa por su vino." },
    { english: "Benefit", spanish: "Beneficio", sentence: "Exercise has many health benefits.", sentenceSpanish: "El ejercicio tiene muchos beneficios para la salud." },
    { english: "Customer", spanish: "Cliente", sentence: "Our customer was very satisfied.", sentenceSpanish: "Nuestro cliente quedó muy satisfecho." },
    { english: "Employee", spanish: "Empleado/a", sentence: "She is a dedicated employee.", sentenceSpanish: "Ella es una empleada dedicada." },
    { english: "Manager", spanish: "Gerente / Director/a", sentence: "The manager approved the budget.", sentenceSpanish: "El gerente aprobó el presupuesto." },
    { english: "Equipment", spanish: "Equipo / Material", sentence: "We need new office equipment.", sentenceSpanish: "Necesitamos nuevo equipo de oficina." },
    { english: "Quantity", spanish: "Cantidad", sentence: "We need a large quantity of material.", sentenceSpanish: "Necesitamos una gran cantidad de material." },
    { english: "Source", spanish: "Fuente / Origen", sentence: "Can you identify the source of the noise?", sentenceSpanish: "¿Puedes identificar la fuente del ruido?" },

    // Adjetivos Descriptivos
    { english: "Reliable", spanish: "Fiable / Confiable", sentence: "She is a reliable employee.", sentenceSpanish: "Ella es una empleada confiable." },
    { english: "Essential", spanish: "Esencial", sentence: "Water is essential for life.", sentenceSpanish: "El agua es esencial para la vida." },
    { english: "Accurate", spanish: "Preciso / Exacto", sentence: "The data must be accurate.", sentenceSpanish: "Los datos deben ser precisos." },
    { english: "Suitable", spanish: "Adecuado / Apto", sentence: "This color is suitable for the kitchen.", sentenceSpanish: "Este color es adecuado para la cocina." },
    { english: "Flexible", spanish: "Flexible", sentence: "Are your working hours flexible?", sentenceSpanish: "¿Son flexibles tus horas de trabajo?" },
    { english: "Curious", spanish: "Curioso", sentence: "I am curious about the results.", sentenceSpanish: "Tengo curiosidad por los resultados." },
    { english: "Eager", spanish: "Ansioso / Entusiasmado", sentence: "She is eager to start her new job.", sentenceSpanish: "Ella está ansiosa por empezar su nuevo trabajo." },
    { english: "Obvious", spanish: "Obvio", sentence: "The answer was quite obvious.", sentenceSpanish: "La respuesta era bastante obvia." },
    { english: "Intense", spanish: "Intenso", sentence: "The heat was intense today.", sentenceSpanish: "El calor fue intenso hoy." },
    { english: "Vulnerable", spanish: "Vulnerable", sentence: "The security system is vulnerable to attack.", sentenceSpanish: "El sistema de seguridad es vulnerable a un ataque." },
    { english: "Temporary", spanish: "Temporal", sentence: "This is only a temporary solution.", sentenceSpanish: "Esta es solo una solución temporal." },
    { english: "Severe", spanish: "Grave / Severo", sentence: "The storm caused severe damage.", sentenceSpanish: "La tormenta causó un daño severo." },
    { english: "Subtle", spanish: "Sutil", sentence: "I noticed a subtle change in his voice.", sentenceSpanish: "Noté un cambio sutil en su voz." },
    { english: "Sufficient", spanish: "Suficiente", sentence: "Do we have sufficient food?", sentenceSpanish: "¿Tenemos suficiente comida?" },
    { english: "Practical", spanish: "Práctico", sentence: "This tool is very practical.", sentenceSpanish: "Esta herramienta es muy práctica." },
    { english: "Definite", spanish: "Definitivo / Claro", sentence: "We need a definite answer by tomorrow.", sentenceSpanish: "Necesitamos una respuesta definitiva para mañana." },
    { english: "Prior", spanish: "Anterior / Previo", sentence: "You need to have prior experience.", sentenceSpanish: "Necesitas tener experiencia previa." },
    { english: "Distinct", spanish: "Distinto / Diferente", sentence: "They are two distinct colors.", sentenceSpanish: "Son dos colores distintos." },
    { english: "Crucial", spanish: "Crucial / Vital", sentence: "This decision is crucial.", sentenceSpanish: "Esta decisión es crucial." },
    { english: "Casual", spanish: "Casual / Informal", sentence: "We had a casual dinner.", sentenceSpanish: "Tuvimos una cena informal." },

    // Adverbios y Conectores
    { english: "However", spanish: "Sin embargo", sentence: "It was cold; however, we went out.", sentenceSpanish: "Hacía frío; sin embargo, salimos." },
    { english: "Therefore", spanish: "Por lo tanto", sentence: "He studied hard; therefore, he passed.", sentenceSpanish: "Estudió duro; por lo tanto, aprobó." },
    { english: "Although", spanish: "Aunque", sentence: "Although it was late, I stayed up.", sentenceSpanish: "Aunque era tarde, me quedé despierto." },
    { english: "Meanwhile", spanish: "Mientras tanto", sentence: "I will clean; meanwhile, you can cook.", sentenceSpanish: "Yo limpiaré; mientras tanto, tú puedes cocinar." },
    { english: "Eventually", spanish: "Finalmente / Tarde o temprano", sentence: "Eventually, the truth came out.", sentenceSpanish: "Finalmente, la verdad salió a la luz." },
    { english: "Rapidly", spanish: "Rápidamente", sentence: "Technology is advancing rapidly.", sentenceSpanish: "La tecnología está avanzando rápidamente." },
    { english: "Gradually", spanish: "Gradualmente", sentence: "The symptoms gradually disappeared.", sentenceSpanish: "Los síntomas desaparecieron gradualmente." },
    { english: "Completely", spanish: "Completamente", sentence: "I completely forgot about the meeting.", sentenceSpanish: "Me olvidé completamente de la reunión." },
    { english: "Slightly", spanish: "Ligeramente", sentence: "The door was only slightly open.", sentenceSpanish: "La puerta estaba solo ligeramente abierta." },
    { english: "Throughout", spanish: "A lo largo de", sentence: "It rained throughout the night.", sentenceSpanish: "Llovió a lo largo de toda la noche." },

    // Phrasal Verbs Medios
    { english: "Figure out", spanish: "Entender / Resolver", sentence: "I can't figure out this puzzle.", sentenceSpanish: "No puedo resolver este rompecabezas." },
    { english: "Get along", spanish: "Llevarse bien", sentence: "They don't get along very well.", sentenceSpanish: "Ellos no se llevan muy bien." },
    { english: "Look up", spanish: "Buscar (información)", sentence: "Look up the word in the dictionary.", sentenceSpanish: "Busca la palabra en el diccionario." },
    { english: "Make up", spanish: "Inventar / Hacer las paces", sentence: "She made up a story about a ghost.", sentenceSpanish: "Ella inventó una historia sobre un fantasma." },
    { english: "Put off", spanish: "Posponer", sentence: "Don't put off until tomorrow.", sentenceSpanish: "No pospongas hasta mañana." },
    { english: "Go over", spanish: "Revisar", sentence: "We need to go over the report.", sentenceSpanish: "Necesitamos revisar el informe." },
    { english: "Hold on", spanish: "Esperar (un momento)", sentence: "Hold on, I'm coming.", sentenceSpanish: "Espera, ya voy." },
    { english: "Run out of", spanish: "Quedarse sin", sentence: "We ran out of milk this morning.", sentenceSpanish: "Nos quedamos sin leche esta mañana." },
    { english: "Set up", spanish: "Establecer / Configurar", sentence: "We need to set up the new computer.", sentenceSpanish: "Necesitamos configurar la nueva computadora." },
    { english: "Come up with", spanish: "Ocurrirse / Idear", sentence: "Can you come up with a better idea?", sentenceSpanish: "¿Se te ocurre una idea mejor?" }
];

const Nivel_Avanzado_B2 = [
    // --- Nivel 3: Avanzado (B2) - 100 Palabras ---
    // Verbos Formales y Complejos
    { english: "Acknowledge", spanish: "Reconocer / Confirmar", sentence: "They acknowledge the receipt of the letter.", sentenceSpanish: "Ellos confirman la recepción de la carta." },
    { english: "Disrupt", spanish: "Interrumpir / Perturbar", sentence: "Noise can disrupt concentration.", sentenceSpanish: "El ruido puede interrumpir la concentración." },
    { english: "Embrace", spanish: "Abrazar / Adoptar", sentence: "We must embrace new technologies.", sentenceSpanish: "Debemos adoptar nuevas tecnologías." },
    { english: "Formulate", spanish: "Formular", sentence: "The team will formulate a new strategy.", sentenceSpanish: "El equipo formulará una nueva estrategia." },
    { english: "Justify", spanish: "Justificar", sentence: "Can you justify your spending?", sentenceSpanish: "¿Puedes justificar tus gastos?" },
    { english: "Perceive", spanish: "Percibir", sentence: "How do you perceive this change?", sentenceSpanish: "¿Cómo percibes este cambio?" },
    { english: "Scrutinize", spanish: "Escudriñar / Examinar a fondo", sentence: "The lawyer scrutinized the documents.", sentenceSpanish: "El abogado examinó a fondo los documentos." },
    { english: "Undergo", spanish: "Someterse a / Experimentar", sentence: "She must undergo surgery next week.", sentenceSpanish: "Ella debe someterse a cirugía la próxima semana." },
    { english: "Vary", spanish: "Variar", sentence: "The prices vary by location.", sentenceSpanish: "Los precios varían según la ubicación." },
    { english: "Yield", spanish: "Ceder / Rendimiento", sentence: "The sign means you must yield.", sentenceSpanish: "La señal significa que debes ceder el paso." },
    { english: "Constitute", spanish: "Constituir", sentence: "These points constitute the main argument.", sentenceSpanish: "Estos puntos constituyen el argumento principal." },
    { english: "Correlate", spanish: "Correlacionar", sentence: "We need to correlate the data from both studies.", sentenceSpanish: "Necesitamos correlacionar los datos de ambos estudios." },
    { english: "Differentiate", spanish: "Diferenciar", sentence: "It is hard to differentiate the fake from the real.", sentenceSpanish: "Es difícil diferenciar lo falso de lo real." },
    { english: "Entail", spanish: "Conllevar / Implicar", sentence: "The project will entail a lot of travel.", sentenceSpanish: "El proyecto conllevará muchos viajes." },
    { english: "Exemplify", spanish: "Ejemplificar", sentence: "This incident exemplifies the problem.", sentenceSpanish: "Este incidente ejemplifica el problema." },
    { english: "Hinder", spanish: "Obstaculizar", sentence: "Lack of funding can hinder progress.", sentenceSpanish: "La falta de financiación puede obstaculizar el progreso." },
    { english: "Pertain", spanish: "Pertenecer / Corresponder a", sentence: "The rules pertain only to employees.", sentenceSpanish: "Las reglas corresponden solo a los empleados." },
    { english: "Subsidize", spanish: "Subvencionar / Subsidiar", sentence: "The government subsidizes public transport.", sentenceSpanish: "El gobierno subvenciona el transporte público." },
    { english: "Synthesize", spanish: "Sintetizar", sentence: "The chemist managed to synthesize the compound.", sentenceSpanish: "El químico logró sintetizar el compuesto." },
    { english: "Tackle", spanish: "Abordar / Afrontar", sentence: "We must tackle the issue immediately.", sentenceSpanish: "Debemos abordar el problema inmediatamente." },

    // Sustantivos Complejos y Académicos
    { english: "Hypothesis", spanish: "Hipótesis", sentence: "The scientist tested his main hypothesis.", sentenceSpanish: "El científico probó su hipótesis principal." },
    { english: "Paradigm", spanish: "Paradigma", sentence: "The discovery caused a paradigm shift in physics.", sentenceSpanish: "El descubrimiento causó un cambio de paradigma en la física." },
    { english: "Consensus", spanish: "Consenso", sentence: "We reached a general consensus on the matter.", sentenceSpanish: "Llegamos a un consenso general sobre el asunto." },
    { english: "Predecessor", spanish: "Predecesor", sentence: "The new phone is faster than its predecessor.", sentenceSpanish: "El nuevo teléfono es más rápido que su predecesor." },
    { english: "Criterion", spanish: "Criterio", sentence: "What is the main criterion for selection?", sentenceSpanish: "¿Cuál es el principal criterio para la selección?" },
    { english: "Framework", spanish: "Marco (estructura)", sentence: "We operate within a legal framework.", sentenceSpanish: "Operamos dentro de un marco legal." },
    { english: "Integrity", spanish: "Integridad", sentence: "The company values honesty and integrity.", sentenceSpanish: "La compañía valora la honestidad y la integridad." },
    { english: "Methodology", spanish: "Metodología", sentence: "The methodology of the study was questioned.", sentenceSpanish: "La metodología del estudio fue cuestionada." },
    { english: "Scope", spanish: "Alcance", sentence: "The scope of the project is too broad.", sentenceSpanish: "El alcance del proyecto es demasiado amplio." },
    { english: "Threshold", spanish: "Umbral / Límite", sentence: "She has a low tolerance threshold for pain.", sentenceSpanish: "Ella tiene un bajo umbral de tolerancia al dolor." },
    { english: "Consequence", spanish: "Consecuencia", sentence: "The result was an unforeseen consequence.", sentenceSpanish: "El resultado fue una consecuencia imprevista." },
    { english: "Disclaimer", spanish: "Descargo de responsabilidad", sentence: "The document includes a legal disclaimer.", sentenceSpanish: "El documento incluye un descargo de responsabilidad legal." },
    { english: "Rationale", spanish: "Base lógica / Justificación", sentence: "What is the rationale behind this decision?", sentenceSpanish: "¿Cuál es la base lógica detrás de esta decisión?" },
    { english: "Stewardship", spanish: "Mayordomía / Administración", sentence: "The government has stewardship over public funds.", sentenceSpanish: "El gobierno tiene la administración de los fondos públicos." },
    { english: "Trajectory", spanish: "Trayectoria", sentence: "The rocket's trajectory was calculated precisely.", sentenceSpanish: "La trayectoria del cohete fue calculada con precisión." },
    { english: "Proximity", spanish: "Proximidad", sentence: "The proximity of the explosion was worrying.", sentenceSpanish: "La proximidad de la explosión era preocupante." },
    { english: "Substance", spanish: "Sustancia", sentence: "The liquid contained a toxic substance.", sentenceSpanish: "El líquido contenía una sustancia tóxica." },
    { english: "Vigilance", spanish: "Vigilancia", sentence: "Constant vigilance is necessary for security.", sentenceSpanish: "La vigilancia constante es necesaria para la seguridad." },
    { english: "Volatile", spanish: "Volátil", sentence: "The political situation is highly volatile.", sentenceSpanish: "La situación política es altamente volátil." },
    { english: "Welfare", spanish: "Bienestar", sentence: "The government ensures the welfare of its citizens.", sentenceSpanish: "El gobierno asegura el bienestar de sus ciudadanos." },

    // Adjetivos Avanzados
    { english: "Compelling", spanish: "Convincente / Fascinante", sentence: "The argument was compelling and persuasive.", sentenceSpanish: "El argumento fue convincente y persuasivo." },
    { english: "Inherent", spanish: "Inherente", sentence: "Risk is inherent in any business venture.", sentenceSpanish: "El riesgo es inherente a cualquier empresa comercial." },
    { english: "Plausible", spanish: "Plausible / Creíble", sentence: "His explanation sounds plausible.", sentenceSpanish: "Su explicación suena plausible." },
    { english: "Redundant", spanish: "Redundante", sentence: "The second paragraph is redundant.", sentenceSpanish: "El segundo párrafo es redundante." },
    { english: "Unequivocal", spanish: "Inequívoco / Rotundo", sentence: "The answer was an unequivocal 'no'.", sentenceSpanish: "La respuesta fue un 'no' rotundo." },
    { english: "Vast", spanish: "Vasto / Enorme", sentence: "The desert is a vast, empty space.", sentenceSpanish: "El desierto es un espacio vasto y vacío." },
    { english: "Feasible", spanish: "Factible / Viable", sentence: "The plan is technically feasible.", sentenceSpanish: "El plan es técnicamente factible." },
    { english: "Imminent", spanish: "Inminente", sentence: "The storm is imminent, seek shelter.", sentenceSpanish: "La tormenta es inminente, busca refugio." },
    { english: "Obligatory", spanish: "Obligatorio", sentence: "Wearing a seatbelt is obligatory.", sentenceSpanish: "Usar el cinturón de seguridad es obligatorio." },
    { english: "Precarious", spanish: "Precario", sentence: "He found himself in a precarious financial situation.", sentenceSpanish: "Se encontró en una precaria situación financiera." },
    { english: "Rampant", spanish: "Desenfrenado / Extendido", sentence: "Corruption was rampant in the city.", sentenceSpanish: "La corrupción estaba desenfrenada en la ciudad." },
    { english: "Stringent", spanish: "Estricto / Riguroso", sentence: "The regulations are very stringent.", sentenceSpanish: "Las regulaciones son muy rigurosas." },
    { english: "Trivial", spanish: "Trivial / Insignificante", sentence: "It was a trivial detail.", sentenceSpanish: "Era un detalle trivial." },
    { english: "Unprecedented", spanish: "Sin precedentes", sentence: "The event was completely unprecedented.", sentenceSpanish: "El evento no tuvo precedentes." },
    { english: "Viable", spanish: "Viable / Posible", sentence: "We need a viable solution.", sentenceSpanish: "Necesitamos una solución viable." },
    { english: "Adequate", spanish: "Adecuado", sentence: "Is the budget adequate for the trip?", sentenceSpanish: "¿Es el presupuesto adecuado para el viaje?" },
    { english: "Ambiguous", spanish: "Ambiguo", sentence: "The politician's statement was ambiguous.", sentenceSpanish: "La declaración del político fue ambigua." },
    { english: "Coherent", spanish: "Coherente", sentence: "His argument was logical and coherent.", sentenceSpanish: "Su argumento fue lógico y coherente." },
    { english: "Implicit", spanish: "Implícito", sentence: "There was an implicit understanding between them.", sentenceSpanish: "Había un entendimiento implícito entre ellos." },
    { english: "Explicit", spanish: "Explícito", sentence: "The instructions were explicit and clear.", sentenceSpanish: "Las instrucciones fueron explícitas y claras." },

    // Adverbios y Conectores de Alto Nivel
    { english: "Subsequently", spanish: "Posteriormente", sentence: "He resigned, and subsequently moved abroad.", sentenceSpanish: "Él renunció y posteriormente se mudó al extranjero." },
    { english: "Conversely", spanish: "Por el contrario", sentence: "I like tea; conversely, she prefers coffee.", sentenceSpanish: "A mí me gusta el té; por el contrario, ella prefiere el café." },
    { english: "Moreover", spanish: "Además / Es más", sentence: "It is cheap; moreover, it is efficient.", sentenceSpanish: "Es barato; es más, es eficiente." },
    { english: "Notwithstanding", spanish: "A pesar de", sentence: "Notwithstanding the rain, we continued.", sentenceSpanish: "A pesar de la lluvia, continuamos." },
    { english: "Hence", spanish: "De ahí / Por lo tanto", sentence: "The traffic was heavy, hence the delay.", sentenceSpanish: "El tráfico era pesado, de ahí el retraso." },
    { english: "Ultimately", spanish: "En última instancia / Finalmente", sentence: "Ultimately, the decision is yours.", sentenceSpanish: "En última instancia, la decisión es tuya." },
    { english: "Tandem", spanish: "En tándem / Juntos", sentence: "They worked in tandem to complete the task.", sentenceSpanish: "Trabajaron juntos para completar la tarea." },
    { english: "Inevitably", spanish: "Inevitablemente", sentence: "Errors will inevitably occur.", sentenceSpanish: "Inevitablemente ocurrirán errores." },
    { english: "Profoundly", spanish: "Profundamente", sentence: "The news profoundly affected him.", sentenceSpanish: "La noticia le afectó profundamente." },
    { english: "Duly", spanish: "Debidamente", sentence: "The application was duly processed.", sentenceSpanish: "La solicitud fue procesada debidamente." },

    // Phrasal Verbs Avanzados
    { english: "Call off", spanish: "Cancelar", sentence: "They had to call off the meeting.", sentenceSpanish: "Tuvieron que cancelar la reunión." },
    { english: "Keep up with", spanish: "Mantenerse al día con", sentence: "It's hard to keep up with the news.", sentenceSpanish: "Es difícil mantenerse al día con las noticias." },
    { english: "Put up with", spanish: "Tolerar / Soportar", sentence: "I cannot put up with this noise.", sentenceSpanish: "No puedo tolerar este ruido." },
    { english: "Run into", spanish: "Encontrarse con (por casualidad)", sentence: "I ran into an old friend today.", sentenceSpanish: "Me encontré con un viejo amigo hoy." },
    { english: "Get away with", spanish: "Salir impune de", sentence: "He got away with cheating on the exam.", sentenceSpanish: "Salió impune al hacer trampa en el examen." },
    { english: "Look down on", spanish: "Menospreciar", sentence: "Don't look down on people who are poor.", sentenceSpanish: "No menosprecies a la gente pobre." },
    { english: "Make up for", spanish: "Compensar", sentence: "I will make up for the lost time.", sentenceSpanish: "Compensaré el tiempo perdido." },
    { english: "Take after", spanish: "Parecerse a", sentence: "She takes after her mother.", sentenceSpanish: "Ella se parece a su madre." },
    { english: "Come across", spanish: "Encontrarse con / Toparse con", sentence: "I came across this old photo by chance.", sentenceSpanish: "Me topé con esta vieja foto por casualidad." },
    { english: "Account for", spanish: "Explicar / Justificar", sentence: "How do you account for the missing data?", sentenceSpanish: "¿Cómo explicas los datos que faltan?" }
];


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
