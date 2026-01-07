<!DOCTYPE html>
<html lang="bn">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>কাস্টম হিরাগানা কুইজ</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@400;700&family=Hind+Siliguri:wght@400;600&display=swap" rel="stylesheet">
    <style>
        body { font-family: 'Hind Siliguri', sans-serif; }
        .jp-font { font-family: 'Noto Sans JP', sans-serif; }
        
        /* Custom Checkbox Style */
        .custom-checkbox:checked + div {
            background-color: #4F46E5;
            border-color: #4F46E5;
        }
        .custom-checkbox:checked + div svg {
            display: block;
        }
    </style>
</head>
<body class="bg-slate-100 min-h-screen flex items-center justify-center p-2 sm:p-4">

    <div class="bg-white p-4 sm:p-6 rounded-xl shadow-xl w-full max-w-lg">
        <!-- Header -->
        <div class="text-center mb-4">
            <h1 class="text-2xl font-bold text-indigo-700">হিরাগানা প্র্যাকটিস</h1>
            <p class="text-gray-500 text-sm">আপনার পছন্দমতো ক্যাটাগরি যুক্ত করুন</p>
        </div>

        <!-- Settings / Categories -->
        <div class="bg-indigo-50 p-4 rounded-lg mb-4 border border-indigo-100">
            <div class="flex flex-wrap gap-3 justify-center text-sm font-semibold text-gray-700">
                
                <!-- Basic (Default) -->
                <label class="cursor-pointer flex items-center space-x-2 bg-white px-3 py-2 rounded-md shadow-sm border border-gray-200 hover:bg-gray-50">
                    <input type="checkbox" id="cb-basic" class="w-4 h-4 text-indigo-600 rounded focus:ring-indigo-500" checked onchange="updatePool()">
                    <span>বেসিক (Basic)</span>
                </label>

                <!-- Tenten & Maru -->
                <label class="cursor-pointer flex items-center space-x-2 bg-white px-3 py-2 rounded-md shadow-sm border border-gray-200 hover:bg-gray-50">
                    <input type="checkbox" id="cb-dakuten" class="w-4 h-4 text-indigo-600 rounded focus:ring-indigo-500" onchange="updatePool()">
                    <span>টেনটেন ও মারু (゛゜)</span>
                </label>

                <!-- Combo -->
                <label class="cursor-pointer flex items-center space-x-2 bg-white px-3 py-2 rounded-md shadow-sm border border-gray-200 hover:bg-gray-50">
                    <input type="checkbox" id="cb-combo" class="w-4 h-4 text-indigo-600 rounded focus:ring-indigo-500" onchange="updatePool()">
                    <span>যুক্তবর্ণ (Combo)</span>
                </label>
            </div>
        </div>

        <!-- Mode Toggle -->
        <div class="flex justify-center mb-6">
            <div class="bg-gray-200 p-1 rounded-lg flex text-sm font-semibold">
                <button id="mode-h-r" onclick="setMode('h-r')" class="px-4 py-2 rounded-md shadow bg-white text-indigo-700 transition-all">
                    あ ➔ A
                </button>
                <button id="mode-r-h" onclick="setMode('r-h')" class="px-4 py-2 rounded-md text-gray-500 hover:text-indigo-600 transition-all">
                    A ➔ あ
                </button>
            </div>
        </div>

        <!-- Score Board -->
        <div class="flex justify-between items-center bg-gray-50 p-3 rounded-lg mb-6 border border-gray-100">
            <div class="text-green-700 font-bold">সঠিক: <span id="score">0</span></div>
            <div class="text-red-600 font-bold">ভুল: <span id="wrong">0</span></div>
        </div>

        <!-- Quiz Container -->
        <div id="quiz-container" class="text-center">
            
            <!-- Character/Romaji Display -->
            <div class="relative mb-6 h-40 flex items-center justify-center bg-gradient-to-br from-indigo-600 to-purple-600 rounded-2xl text-white shadow-lg overflow-hidden">
                <span id="char-display" class="jp-font text-6xl sm:text-7xl font-bold drop-shadow-md">?</span>
            </div>

            <!-- Options Grid -->
            <div id="options-grid" class="grid grid-cols-2 gap-3 mb-4">
                <!-- Buttons injected by JS -->
            </div>

            <!-- Feedback Message -->
            <div id="feedback" class="min-h-[2rem] mb-2 font-semibold text-lg"></div>

            <!-- Error/Warning Message -->
            <p id="error-msg" class="text-red-500 text-sm hidden mt-2 font-bold">অনুগ্রহ করে অন্তত একটি ক্যাটাগরি সিলেক্ট করুন!</p>

            <!-- Next Button -->
            <button id="next-btn" onclick="nextQuestion()" class="w-full bg-gray-800 text-white py-3 rounded-lg font-bold hover:bg-gray-700 transition shadow-lg transform active:scale-95 hidden">
                পরের প্রশ্ন ➔
            </button>
        </div>
    </div>

    <script>
        // --- DATA SETS ---
        const dataBasic = [
            { char: 'あ', romaji: 'a' }, { char: 'い', romaji: 'i' }, { char: 'う', romaji: 'u' }, { char: 'え', romaji: 'e' }, { char: 'お', romaji: 'o' },
            { char: 'か', romaji: 'ka' }, { char: 'き', romaji: 'ki' }, { char: 'く', romaji: 'ku' }, { char: 'け', romaji: 'ke' }, { char: 'こ', romaji: 'ko' },
            { char: 'さ', romaji: 'sa' }, { char: 'し', romaji: 'shi' }, { char: 'す', romaji: 'su' }, { char: 'せ', romaji: 'se' }, { char: 'そ', romaji: 'so' },
            { char: 'た', romaji: 'ta' }, { char: 'ち', romaji: 'chi' }, { char: 'つ', romaji: 'tsu' }, { char: 'て', romaji: 'te' }, { char: 'と', romaji: 'to' },
            { char: 'な', romaji: 'na' }, { char: 'に', romaji: 'ni' }, { char: 'ぬ', romaji: 'nu' }, { char: 'ね', romaji: 'ne' }, { char: 'の', romaji: 'no' },
            { char: 'は', romaji: 'ha' }, { char: 'ひ', romaji: 'hi' }, { char: 'ふ', romaji: 'fu' }, { char: 'へ', romaji: 'he' }, { char: 'ほ', romaji: 'ho' },
            { char: 'ま', romaji: 'ma' }, { char: 'み', romaji: 'mi' }, { char: 'む', romaji: 'mu' }, { char: 'め', romaji: 'me' }, { char: 'も', romaji: 'mo' },
            { char: 'や', romaji: 'ya' }, { char: 'ゆ', romaji: 'yu' }, { char: 'よ', romaji: 'yo' },
            { char: 'ら', romaji: 'ra' }, { char: 'り', romaji: 'ri' }, { char: 'る', romaji: 'ru' }, { char: 'れ', romaji: 're' }, { char: 'ろ', romaji: 'ro' },
            { char: 'わ', romaji: 'wa' }, { char: 'を', romaji: 'wo' }, { char: 'ん', romaji: 'n' }
        ];

        // Combined Tenten (Dakuten) and Maru (Handakuten)
        const dataDakutenMaru = [
            // Dakuten
            { char: 'が', romaji: 'ga' }, { char: 'ぎ', romaji: 'gi' }, { char: 'ぐ', romaji: 'gu' }, { char: 'げ', romaji: 'ge' }, { char: 'ご', romaji: 'go' },
            { char: 'ざ', romaji: 'za' }, { char: 'じ', romaji: 'ji' }, { char: 'ず', romaji: 'zu' }, { char: 'ぜ', romaji: 'ze' }, { char: 'ぞ', romaji: 'zo' },
            { char: 'だ', romaji: 'da' }, { char: 'ぢ', romaji: 'ji (di)' }, { char: 'づ', romaji: 'zu (du)' }, { char: 'で', romaji: 'de' }, { char: 'ど', romaji: 'do' },
            { char: 'ば', romaji: 'ba' }, { char: 'び', romaji: 'bi' }, { char: 'ぶ', romaji: 'bu' }, { char: 'べ', romaji: 'be' }, { char: 'ぼ', romaji: 'bo' },
            // Handakuten
            { char: 'ぱ', romaji: 'pa' }, { char: 'ぴ', romaji: 'pi' }, { char: 'ぷ', romaji: 'pu' }, { char: 'ぺ', romaji: 'pe' }, { char: 'ぽ', romaji: 'po' }
        ];

        // Yoon (Combination)
        const dataCombo = [
            { char: 'きゃ', romaji: 'kya' }, { char: 'きゅ', romaji: 'kyu' }, { char: 'きょ', romaji: 'kyo' },
            { char: 'しゃ', romaji: 'sha' }, { char: 'しゅ', romaji: 'shu' }, { char: 'しょ', romaji: 'sho' },
            { char: 'ちゃ', romaji: 'cha' }, { char: 'ちゅ', romaji: 'chu' }, { char: 'ちょ', romaji: 'cho' },
            { char: 'にゃ', romaji: 'nya' }, { char: 'にゅ', romaji: 'nyu' }, { char: 'にょ', romaji: 'nyo' },
            { char: 'ひゃ', romaji: 'hya' }, { char: 'ひゅ', romaji: 'hyu' }, { char: 'ひょ', romaji: 'hyo' },
            { char: 'みゃ', romaji: 'mya' }, { char: 'みゅ', romaji: 'myu' }, { char: 'みょ', romaji: 'myo' },
            { char: 'りゃ', romaji: 'rya' }, { char: 'りゅ', romaji: 'ryu' }, { char: 'りょ', romaji: 'ryo' },
            { char: 'ぎゃ', romaji: 'gya' }, { char: 'ぎゅ', romaji: 'gyu' }, { char: 'ぎょ', romaji: 'gyo' },
            { char: 'じゃ', romaji: 'ja' }, { char: 'じゅ', romaji: 'ju' }, { char: 'じょ', romaji: 'jo' },
            { char: 'びゃ', romaji: 'bya' }, { char: 'びゅ', romaji: 'byu' }, { char: 'びょ', romaji: 'byo' },
            { char: 'ぴゃ', romaji: 'pya' }, { char: 'ぴゅ', romaji: 'pyu' }, { char: 'ぴょ', romaji: 'pyo' }
        ];

        // --- STATE & DOM ---
        let currentPool = [];
        let score = 0;
        let wrong = 0;
        let currentQuestion = null;
        let isAnswered = false;
        let currentMode = 'h-r'; // 'h-r' or 'r-h'

        // Checkboxes
        const cbBasic = document.getElementById('cb-basic');
        const cbDakuten = document.getElementById('cb-dakuten');
        const cbCombo = document.getElementById('cb-combo');

        const charDisplay = document.getElementById('char-display');
        const optionsGrid = document.getElementById('options-grid');
        const feedbackDisplay = document.getElementById('feedback');
        const nextBtn = document.getElementById('next-btn');
        const scoreEl = document.getElementById('score');
        const wrongEl = document.getElementById('wrong');
        const errorMsg = document.getElementById('error-msg');
        
        const btnHR = document.getElementById('mode-h-r');
        const btnRH = document.getElementById('mode-r-h');

        function updatePool() {
            currentPool = [];
            
            if (cbBasic.checked) currentPool = [...currentPool, ...dataBasic];
            if (cbDakuten.checked) currentPool = [...currentPool, ...dataDakutenMaru];
            if (cbCombo.checked) currentPool = [...currentPool, ...dataCombo];

            if (currentPool.length === 0) {
                // No category selected
                errorMsg.classList.remove('hidden');
                optionsGrid.innerHTML = '';
                charDisplay.innerText = '?';
                nextBtn.classList.add('hidden');
            } else {
                errorMsg.classList.add('hidden');
                generateQuestion(); // New pool, new question
            }
        }

        function setMode(mode) {
            currentMode = mode;
            // Update UI styles
            if (mode === 'h-r') {
                btnHR.className = "px-4 py-2 rounded-md shadow bg-white text-indigo-700 transition-all font-bold";
                btnRH.className = "px-4 py-2 rounded-md text-gray-500 hover:text-indigo-600 transition-all";
            } else {
                btnRH.className = "px-4 py-2 rounded-md shadow bg-white text-indigo-700 transition-all font-bold";
                btnHR.className = "px-4 py-2 rounded-md text-gray-500 hover:text-indigo-600 transition-all";
            }
            if(currentPool.length > 0) generateQuestion();
        }

        function generateQuestion() {
            if (currentPool.length === 0) return;

            isAnswered = false;
            feedbackDisplay.innerHTML = '';
            nextBtn.classList.add('hidden');
            optionsGrid.innerHTML = '';

            // 1. Pick Correct Answer
            const randomIndex = Math.floor(Math.random() * currentPool.length);
            currentQuestion = currentPool[randomIndex];

            // 2. Display Character based on mode
            if (currentMode === 'h-r') {
                // Show Hiragana
                charDisplay.innerText = currentQuestion.char;
                charDisplay.classList.remove('text-5xl');
                charDisplay.classList.add('text-6xl', 'sm:text-8xl', 'jp-font');
            } else {
                // Show Romaji
                charDisplay.innerText = currentQuestion.romaji;
                charDisplay.classList.remove('jp-font', 'text-6xl', 'sm:text-8xl');
                charDisplay.classList.add('text-5xl', 'sm:text-6xl', 'font-sans');
            }

            // 3. Generate Distractors (Wrong Answers)
            let options = [currentQuestion];
            while (options.length < 4) {
                const randomOption = currentPool[Math.floor(Math.random() * currentPool.length)];
                if (!options.some(opt => opt.romaji === randomOption.romaji)) {
                    options.push(randomOption);
                }
            }
            options.sort(() => Math.random() - 0.5);

            // 4. Create Buttons
            options.forEach(option => {
                const btn = document.createElement('button');
                btn.className = "bg-white border-2 border-indigo-100 text-indigo-800 font-bold py-4 rounded-xl hover:bg-indigo-50 hover:border-indigo-300 transition text-xl shadow-sm flex items-center justify-center";
                
                // Button text logic
                if (currentMode === 'h-r') {
                    // Options are Romaji
                    btn.innerText = option.romaji;
                    btn.classList.add('font-sans');
                } else {
                    // Options are Hiragana
                    btn.innerText = option.char;
                    btn.classList.add('jp-font', 'text-2xl');
                }

                btn.onclick = () => checkAnswer(option, btn);
                optionsGrid.appendChild(btn);
            });
        }

        function checkAnswer(selectedOption, btnElement) {
            if (isAnswered) return;
            isAnswered = true;

            const buttons = optionsGrid.querySelectorAll('button');
            const isCorrect = selectedOption.romaji === currentQuestion.romaji;
            
            if (isCorrect) {
                score++;
                scoreEl.innerText = score;
                animateButton(btnElement, 'correct');
                feedbackDisplay.innerHTML = `<span class="text-green-600">সঠিক! 🎉</span>`;
            } else {
                wrong++;
                wrongEl.innerText = wrong;
                animateButton(btnElement, 'wrong');
                
                // Find and highlight correct answer
                const correctText = currentMode === 'h-r' ? currentQuestion.romaji : currentQuestion.char;
                buttons.forEach(b => {
                    if (b.innerText === correctText) {
                        animateButton(b, 'correct');
                    }
                });
                
                const correctAnsShow = currentMode === 'h-r' ? currentQuestion.romaji : currentQuestion.char;
                feedbackDisplay.innerHTML = `<span class="text-red-500">ভুল! সঠিক উত্তর: <b>${correctAnsShow}</b></span>`;
            }

            nextBtn.classList.remove('hidden');
        }

        function animateButton(btn, type) {
            btn.classList.remove('bg-white', 'text-indigo-800', 'border-indigo-100', 'hover:bg-indigo-50');
            if (type === 'correct') {
                btn.classList.add('bg-green-500', 'text-white', 'border-green-600');
            } else {
                btn.classList.add('bg-red-500', 'text-white', 'border-red-600');
            }
        }

        function nextQuestion() {
            generateQuestion();
        }

        // Initialize: This runs updatePool which respects the HTML 'checked' attributes
        updatePool();

    </script>
</body>
</html>

              
