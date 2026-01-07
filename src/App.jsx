import React, { useState, useEffect, useCallback } from 'react';
import { Settings, RefreshCw, Check, X, Trophy, ArrowRight, Home, ChevronLeft, BookOpen } from 'lucide-react';

// --- DATA SOURCES ---

const hiraganaData = [
  // Basic
  { char: 'あ', romaji: 'a', type: 'basic' }, { char: 'い', romaji: 'i', type: 'basic' }, { char: 'う', romaji: 'u', type: 'basic' }, { char: 'え', romaji: 'e', type: 'basic' }, { char: 'お', romaji: 'o', type: 'basic' },
  { char: 'か', romaji: 'ka', type: 'basic' }, { char: 'き', romaji: 'ki', type: 'basic' }, { char: 'く', romaji: 'ku', type: 'basic' }, { char: 'け', romaji: 'ke', type: 'basic' }, { char: 'こ', romaji: 'ko', type: 'basic' },
  { char: 'さ', romaji: 'sa', type: 'basic' }, { char: 'し', romaji: 'shi', type: 'basic' }, { char: 'す', romaji: 'su', type: 'basic' }, { char: 'せ', romaji: 'se', type: 'basic' }, { char: 'そ', romaji: 'so', type: 'basic' },
  { char: 'た', romaji: 'ta', type: 'basic' }, { char: 'ち', romaji: 'chi', type: 'basic' }, { char: 'つ', romaji: 'tsu', type: 'basic' }, { char: 'て', romaji: 'te', type: 'basic' }, { char: 'と', romaji: 'to', type: 'basic' },
  { char: 'な', romaji: 'na', type: 'basic' }, { char: 'に', romaji: 'ni', type: 'basic' }, { char: 'ぬ', romaji: 'nu', type: 'basic' }, { char: 'ね', romaji: 'ne', type: 'basic' }, { char: 'の', romaji: 'no', type: 'basic' },
  { char: 'は', romaji: 'ha', type: 'basic' }, { char: 'ひ', romaji: 'hi', type: 'basic' }, { char: 'ふ', romaji: 'fu', type: 'basic' }, { char: 'へ', romaji: 'he', type: 'basic' }, { char: 'ほ', romaji: 'ho', type: 'basic' },
  { char: 'ま', romaji: 'ma', type: 'basic' }, { char: 'み', romaji: 'mi', type: 'basic' }, { char: 'む', romaji: 'mu', type: 'basic' }, { char: 'め', romaji: 'me', type: 'basic' }, { char: 'も', romaji: 'mo', type: 'basic' },
  { char: 'や', romaji: 'ya', type: 'basic' }, { char: 'ゆ', romaji: 'yu', type: 'basic' }, { char: 'よ', romaji: 'yo', type: 'basic' },
  { char: 'ら', romaji: 'ra', type: 'basic' }, { char: 'り', romaji: 'ri', type: 'basic' }, { char: 'る', romaji: 'ru', type: 'basic' }, { char: 'れ', romaji: 're', type: 'basic' }, { char: 'ろ', romaji: 'ro', type: 'basic' },
  { char: 'わ', romaji: 'wa', type: 'basic' }, { char: 'を', romaji: 'wo', type: 'basic' }, { char: 'ん', romaji: 'n', type: 'basic' },
  // Dakuten
  { char: 'が', romaji: 'ga', type: 'dakuten' }, { char: 'ぎ', romaji: 'gi', type: 'dakuten' }, { char: 'ぐ', romaji: 'gu', type: 'dakuten' }, { char: 'げ', romaji: 'ge', type: 'dakuten' }, { char: 'ご', romaji: 'go', type: 'dakuten' },
  { char: 'ざ', romaji: 'za', type: 'dakuten' }, { char: 'じ', romaji: 'ji', type: 'dakuten' }, { char: 'ず', romaji: 'zu', type: 'dakuten' }, { char: 'ぜ', romaji: 'ze', type: 'dakuten' }, { char: 'ぞ', romaji: 'zo', type: 'dakuten' },
  { char: 'だ', romaji: 'da', type: 'dakuten' }, { char: 'ぢ', romaji: 'ji (di)', type: 'dakuten' }, { char: 'づ', romaji: 'zu (du)', type: 'dakuten' }, { char: 'で', romaji: 'de', type: 'dakuten' }, { char: 'ど', romaji: 'do', type: 'dakuten' },
  { char: 'ば', romaji: 'ba', type: 'dakuten' }, { char: 'び', romaji: 'bi', type: 'dakuten' }, { char: 'ぶ', romaji: 'bu', type: 'dakuten' }, { char: 'べ', romaji: 'be', type: 'dakuten' }, { char: 'ぼ', romaji: 'bo', type: 'dakuten' },
  { char: 'ぱ', romaji: 'pa', type: 'dakuten' }, { char: 'ぴ', romaji: 'pi', type: 'dakuten' }, { char: 'ぷ', romaji: 'pu', type: 'dakuten' }, { char: 'ぺ', romaji: 'pe', type: 'dakuten' }, { char: 'ぽ', romaji: 'po', type: 'dakuten' },
  // Combo
  { char: 'きゃ', romaji: 'kya', type: 'combo' }, { char: 'きゅ', romaji: 'kyu', type: 'combo' }, { char: 'きょ', romaji: 'kyo', type: 'combo' },
  { char: 'しゃ', romaji: 'sha', type: 'combo' }, { char: 'しゅ', romaji: 'shu', type: 'combo' }, { char: 'しょ', romaji: 'sho', type: 'combo' },
  { char: 'ちゃ', romaji: 'cha', type: 'combo' }, { char: 'ちゅ', romaji: 'chu', type: 'combo' }, { char: 'ちょ', romaji: 'cho', type: 'combo' },
  { char: 'にゃ', romaji: 'nya', type: 'combo' }, { char: 'にゅ', romaji: 'nyu', type: 'combo' }, { char: 'にょ', romaji: 'nyo', type: 'combo' },
  { char: 'ひゃ', romaji: 'hya', type: 'combo' }, { char: 'ひゅ', romaji: 'hyu', type: 'combo' }, { char: 'ひょ', romaji: 'hyo', type: 'combo' },
  { char: 'みゃ', romaji: 'mya', type: 'combo' }, { char: 'みゅ', romaji: 'myu', type: 'combo' }, { char: 'みょ', romaji: 'myo', type: 'combo' },
  { char: 'りゃ', romaji: 'rya', type: 'combo' }, { char: 'りゅ', romaji: 'ryu', type: 'combo' }, { char: 'りょ', romaji: 'ryo', type: 'combo' },
  { char: 'ぎゃ', romaji: 'gya', type: 'combo' }, { char: 'ぎゅ', romaji: 'gyu', type: 'combo' }, { char: 'ぎょ', romaji: 'gyo', type: 'combo' },
  { char: 'じゃ', romaji: 'ja', type: 'combo' }, { char: 'じゅ', romaji: 'ju', type: 'combo' }, { char: 'じょ', romaji: 'jo', type: 'combo' },
  { char: 'びゃ', romaji: 'bya', type: 'combo' }, { char: 'びゅ', romaji: 'byu', type: 'combo' }, { char: 'びょ', romaji: 'byo', type: 'combo' },
  { char: 'ぴゃ', romaji: 'pya', type: 'combo' }, { char: 'ぴゅ', romaji: 'pyu', type: 'combo' }, { char: 'ぴょ', romaji: 'pyo', type: 'combo' },
];

const katakanaData = [
  // Basic
  { char: 'ア', romaji: 'a', type: 'basic' }, { char: 'イ', romaji: 'i', type: 'basic' }, { char: 'ウ', romaji: 'u', type: 'basic' }, { char: 'エ', romaji: 'e', type: 'basic' }, { char: 'オ', romaji: 'o', type: 'basic' },
  { char: 'カ', romaji: 'ka', type: 'basic' }, { char: 'キ', romaji: 'ki', type: 'basic' }, { char: 'ク', romaji: 'ku', type: 'basic' }, { char: 'ケ', romaji: 'ke', type: 'basic' }, { char: 'コ', romaji: 'ko', type: 'basic' },
  { char: 'サ', romaji: 'sa', type: 'basic' }, { char: 'シ', romaji: 'shi', type: 'basic' }, { char: 'ス', romaji: 'su', type: 'basic' }, { char: 'セ', romaji: 'se', type: 'basic' }, { char: 'ソ', romaji: 'so', type: 'basic' },
  { char: 'タ', romaji: 'ta', type: 'basic' }, { char: 'チ', romaji: 'chi', type: 'basic' }, { char: 'ツ', romaji: 'tsu', type: 'basic' }, { char: 'テ', romaji: 'te', type: 'basic' }, { char: 'ト', romaji: 'to', type: 'basic' },
  { char: 'ナ', romaji: 'na', type: 'basic' }, { char: 'ニ', romaji: 'ni', type: 'basic' }, { char: 'ヌ', romaji: 'nu', type: 'basic' }, { char: 'ネ', romaji: 'ne', type: 'basic' }, { char: 'ノ', romaji: 'no', type: 'basic' },
  { char: 'ハ', romaji: 'ha', type: 'basic' }, { char: 'ヒ', romaji: 'hi', type: 'basic' }, { char: 'フ', romaji: 'fu', type: 'basic' }, { char: 'ヘ', romaji: 'he', type: 'basic' }, { char: 'ホ', romaji: 'ho', type: 'basic' },
  { char: 'マ', romaji: 'ma', type: 'basic' }, { char: 'ミ', romaji: 'mi', type: 'basic' }, { char: 'ム', romaji: 'mu', type: 'basic' }, { char: 'メ', romaji: 'me', type: 'basic' }, { char: 'モ', romaji: 'mo', type: 'basic' },
  { char: 'ヤ', romaji: 'ya', type: 'basic' }, { char: 'ユ', romaji: 'yu', type: 'basic' }, { char: 'ヨ', romaji: 'yo', type: 'basic' },
  { char: 'ラ', romaji: 'ra', type: 'basic' }, { char: 'リ', romaji: 'ri', type: 'basic' }, { char: 'ル', romaji: 'ru', type: 'basic' }, { char: 'レ', romaji: 're', type: 'basic' }, { char: 'ロ', romaji: 'ro', type: 'basic' },
  { char: 'ワ', romaji: 'wa', type: 'basic' }, { char: 'ヲ', romaji: 'wo', type: 'basic' }, { char: 'ン', romaji: 'n', type: 'basic' },
  // Dakuten
  { char: 'ガ', romaji: 'ga', type: 'dakuten' }, { char: 'ギ', romaji: 'gi', type: 'dakuten' }, { char: 'グ', romaji: 'gu', type: 'dakuten' }, { char: 'ゲ', romaji: 'ge', type: 'dakuten' }, { char: 'ゴ', romaji: 'go', type: 'dakuten' },
  { char: 'ザ', romaji: 'za', type: 'dakuten' }, { char: 'ジ', romaji: 'ji', type: 'dakuten' }, { char: 'ズ', romaji: 'zu', type: 'dakuten' }, { char: 'ゼ', romaji: 'ze', type: 'dakuten' }, { char: 'ゾ', romaji: 'zo', type: 'dakuten' },
  { char: 'ダ', romaji: 'da', type: 'dakuten' }, { char: 'ヂ', romaji: 'ji (di)', type: 'dakuten' }, { char: 'ヅ', romaji: 'zu (du)', type: 'dakuten' }, { char: 'デ', romaji: 'de', type: 'dakuten' }, { char: 'ド', romaji: 'do', type: 'dakuten' },
  { char: 'バ', romaji: 'ba', type: 'dakuten' }, { char: 'ビ', romaji: 'bi', type: 'dakuten' }, { char: 'ブ', romaji: 'bu', type: 'dakuten' }, { char: 'ベ', romaji: 'be', type: 'dakuten' }, { char: 'ボ', romaji: 'bo', type: 'dakuten' },
  { char: 'パ', romaji: 'pa', type: 'dakuten' }, { char: 'ピ', romaji: 'pi', type: 'dakuten' }, { char: 'プ', romaji: 'pu', type: 'dakuten' }, { char: 'ペ', romaji: 'pe', type: 'dakuten' }, { char: 'ポ', romaji: 'po', type: 'dakuten' },
  // Combo
  { char: 'キャ', romaji: 'kya', type: 'combo' }, { char: 'キュ', romaji: 'kyu', type: 'combo' }, { char: 'キョ', romaji: 'kyo', type: 'combo' },
  { char: 'シャ', romaji: 'sha', type: 'combo' }, { char: 'シュ', romaji: 'shu', type: 'combo' }, { char: 'ショ', romaji: 'sho', type: 'combo' },
  { char: 'チャ', romaji: 'cha', type: 'combo' }, { char: 'チュ', romaji: 'chu', type: 'combo' }, { char: 'チョ', romaji: 'cho', type: 'combo' },
  { char: 'ニャ', romaji: 'nya', type: 'combo' }, { char: 'ニュ', romaji: 'nyu', type: 'combo' }, { char: 'ニョ', romaji: 'nyo', type: 'combo' },
  { char: 'ヒャ', romaji: 'hya', type: 'combo' }, { char: 'ヒュ', romaji: 'hyu', type: 'combo' }, { char: 'ヒョ', romaji: 'hyo', type: 'combo' },
  { char: 'ミャ', romaji: 'mya', type: 'combo' }, { char: 'ミュ', romaji: 'myu', type: 'combo' }, { char: 'ミョ', romaji: 'myo', type: 'combo' },
  { char: 'リャ', romaji: 'rya', type: 'combo' }, { char: 'リュ', romaji: 'ryu', type: 'combo' }, { char: 'リョ', romaji: 'ryo', type: 'combo' },
  { char: 'ギャ', romaji: 'gya', type: 'combo' }, { char: 'ギュ', romaji: 'gyu', type: 'combo' }, { char: 'ギョ', romaji: 'gyo', type: 'combo' },
  { char: 'ジャ', romaji: 'ja', type: 'combo' }, { char: 'ジュ', romaji: 'ju', type: 'combo' }, { char: 'ジョ', romaji: 'jo', type: 'combo' },
  { char: 'ビャ', romaji: 'bya', type: 'combo' }, { char: 'ビュ', romaji: 'byu', type: 'combo' }, { char: 'ビョ', romaji: 'byo', type: 'combo' },
  { char: 'ピャ', romaji: 'pya', type: 'combo' }, { char: 'ピュ', romaji: 'pyu', type: 'combo' }, { char: 'ピョ', romaji: 'pyo', type: 'combo' },
];

// --- MAIN APP COMPONENT ---
export default function App() {
  const [currentView, setCurrentView] = useState('home'); // 'home', 'hiragana', 'katakana'

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-100 to-indigo-50 font-sans">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@400;700&family=Hind+Siliguri:wght@400;600;700&display=swap');
        .jp-font { font-family: 'Noto Sans JP', sans-serif; }
        .bn-font { font-family: 'Hind Siliguri', sans-serif; }
      `}</style>

      {currentView === 'home' && (
        <HomePage onSelect={setCurrentView} />
      )}

      {currentView === 'hiragana' && (
        <QuizPage 
          type="hiragana" 
          data={hiraganaData} 
          title="হিরাগানা" 
          colorClass="indigo"
          onBack={() => setCurrentView('home')} 
        />
      )}

      {currentView === 'katakana' && (
        <QuizPage 
          type="katakana" 
          data={katakanaData} 
          title="কাতাকানা" 
          colorClass="pink" // Different color theme for Katakana
          onBack={() => setCurrentView('home')} 
        />
      )}
    </div>
  );
}

// --- HOME PAGE COMPONENT ---
const HomePage = ({ onSelect }) => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-6 bn-font">
      <div className="text-center mb-10 animate-in slide-in-from-top-4 duration-500">
        <h1 className="text-4xl md:text-5xl font-bold text-slate-800 mb-2">জাপানি ভাষা শিখুন</h1>
        <p className="text-slate-500">আপনার শেখার যাত্রা শুরু করতে একটি কুইজ বেছে নিন</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-2xl">
        {/* Hiragana Card */}
        <button 
          onClick={() => onSelect('hiragana')}
          className="group relative bg-white p-8 rounded-3xl shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 border border-white/50 overflow-hidden"
        >
          <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
            <span className="text-9xl font-bold">あ</span>
          </div>
          <div className="relative z-10 flex flex-col items-center text-center">
            <div className="w-16 h-16 bg-indigo-100 text-indigo-600 rounded-2xl flex items-center justify-center mb-4 group-hover:bg-indigo-600 group-hover:text-white transition-colors">
              <span className="jp-font text-3xl font-bold">あ</span>
            </div>
            <h2 className="text-2xl font-bold text-slate-800 mb-2">হিরাগানা কুইজ</h2>
            <p className="text-sm text-slate-500 mb-4">বেসিক, দাকুতেন এবং যুক্তবর্ণ শিখুন</p>
            <span className="flex items-center text-indigo-600 font-bold group-hover:gap-2 transition-all">
              শুরু করুন <ArrowRight size={18} className="ml-1" />
            </span>
          </div>
        </button>

        {/* Katakana Card */}
        <button 
          onClick={() => onSelect('katakana')}
          className="group relative bg-white p-8 rounded-3xl shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 border border-white/50 overflow-hidden"
        >
          <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
            <span className="text-9xl font-bold">ア</span>
          </div>
          <div className="relative z-10 flex flex-col items-center text-center">
            <div className="w-16 h-16 bg-pink-100 text-pink-600 rounded-2xl flex items-center justify-center mb-4 group-hover:bg-pink-500 group-hover:text-white transition-colors">
              <span className="jp-font text-3xl font-bold">ア</span>
            </div>
            <h2 className="text-2xl font-bold text-slate-800 mb-2">কাতাকানা কুইজ</h2>
            <p className="text-sm text-slate-500 mb-4">বিদেশি শব্দ এবং নামের জন্য</p>
            <span className="flex items-center text-pink-600 font-bold group-hover:gap-2 transition-all">
              শুরু করুন <ArrowRight size={18} className="ml-1" />
            </span>
          </div>
        </button>
      </div>
      
      <footer className="mt-12 text-slate-400 text-sm">
        © 2024 Japanese Learning App
      </footer>
    </div>
  );
};

// --- QUIZ COMPONENT (Reusable) ---
const QuizPage = ({ type, data, title, colorClass, onBack }) => {
  const [categories, setCategories] = useState({
    basic: true,
    dakuten: false,
    combo: false
  });
  
  const [mode, setMode] = useState('j-r'); // 'j-r' (Japanese -> Romaji) or 'r-j' (Romaji -> Japanese)
  const [score, setScore] = useState(0);
  const [wrong, setWrong] = useState(0);
  
  const [currentQuestion, setCurrentQuestion] = useState(null);
  const [options, setOptions] = useState([]);
  const [selectedOption, setSelectedOption] = useState(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [showSettings, setShowSettings] = useState(false);

  // Dynamic Styles based on color theme
  const theme = {
    bg: colorClass === 'pink' ? 'bg-pink-500' : 'bg-indigo-600',
    bgLight: colorClass === 'pink' ? 'bg-pink-100' : 'bg-indigo-100',
    text: colorClass === 'pink' ? 'text-pink-600' : 'text-indigo-600',
    textDark: colorClass === 'pink' ? 'text-pink-900' : 'text-indigo-900',
    border: colorClass === 'pink' ? 'border-pink-200' : 'border-indigo-200',
    btn: colorClass === 'pink' ? 'bg-pink-500 hover:bg-pink-600' : 'bg-indigo-600 hover:bg-indigo-700',
    toggleActive: colorClass === 'pink' ? 'bg-pink-500 border-pink-500' : 'bg-indigo-600 border-indigo-600',
    iconBg: colorClass === 'pink' ? 'bg-pink-800/50' : 'bg-indigo-800/50',
  };

  const generateQuestion = useCallback(() => {
    let pool = [];
    if (categories.basic) pool = [...pool, ...data.filter(d => d.type === 'basic')];
    if (categories.dakuten) pool = [...pool, ...data.filter(d => d.type === 'dakuten')];
    if (categories.combo) pool = [...pool, ...data.filter(d => d.type === 'combo')];

    if (pool.length === 0) {
      setCurrentQuestion(null);
      return;
    }

    const question = pool[Math.floor(Math.random() * pool.length)];

    // Generate Distractors
    let newOptions = [question];
    while (newOptions.length < 4) {
      const randomOpt = pool[Math.floor(Math.random() * pool.length)];
      if (!newOptions.find(o => o.romaji === randomOpt.romaji)) {
        newOptions.push(randomOpt);
      }
    }
    newOptions.sort(() => Math.random() - 0.5);

    setCurrentQuestion(question);
    setOptions(newOptions);
    setIsAnswered(false);
    setSelectedOption(null);
  }, [categories, data]);

  useEffect(() => {
    generateQuestion();
  }, [generateQuestion]);

  const handleAnswer = (option) => {
    if (isAnswered) return;
    setIsAnswered(true);
    setSelectedOption(option);

    if (option.romaji === currentQuestion.romaji) {
      setScore(s => s + 1);
    } else {
      setWrong(w => w + 1);
    }
  };

  const handleCategoryChange = (key) => {
    setCategories(prev => {
      const newState = { ...prev, [key]: !prev[key] };
      if (!newState.basic && !newState.dakuten && !newState.combo) return prev;
      return newState;
    });
  };

  const getButtonClass = (option) => {
    const baseClass = "relative w-full p-4 sm:p-5 rounded-xl text-xl font-bold transition-all duration-200 transform hover:-translate-y-1 shadow-md border-2";
    
    if (!isAnswered) {
      return `${baseClass} bg-white ${theme.border} ${theme.textDark} hover:shadow-lg`;
    }

    const isCorrect = option.romaji === currentQuestion.romaji;
    const isSelected = selectedOption === option;

    if (isCorrect) return `${baseClass} bg-green-500 border-green-600 text-white shadow-green-200`;
    if (isSelected && !isCorrect) return `${baseClass} bg-red-500 border-red-600 text-white shadow-red-200`;
    
    return `${baseClass} bg-gray-50 border-gray-200 text-gray-400 opacity-60`;
  };

  return (
    <div className="flex items-center justify-center p-4 bn-font pt-10">
      <div className="w-full max-w-lg bg-white rounded-3xl shadow-2xl overflow-hidden border border-white/50">
        
        {/* HEADER */}
        <div className={`${theme.bg} p-6 text-white relative overflow-hidden transition-colors duration-500`}>
          {/* Back Button */}
          <button onClick={onBack} className="absolute top-6 left-6 p-2 bg-white/20 rounded-lg hover:bg-white/30 transition backdrop-blur-sm z-20">
            <ChevronLeft size={20} />
          </button>

          <div className="absolute top-0 right-0 p-4 opacity-10">
            <RefreshCw size={100} />
          </div>
          
          <div className="relative z-10 flex flex-col items-center mt-2">
            <h1 className="text-2xl font-bold tracking-tight">{title} মাস্টারি</h1>
            <p className="opacity-80 text-sm mt-1">সঠিক উত্তর নির্বাচন করুন</p>
          </div>

          <div className="absolute top-6 right-6 z-20">
             <button onClick={() => setShowSettings(!showSettings)} className="p-2 bg-white/20 rounded-lg hover:bg-white/30 transition backdrop-blur-sm">
              <Settings size={20} />
            </button>
          </div>

          {/* Stats */}
          <div className="flex justify-center gap-4 mt-6">
            <div className={`flex items-center gap-2 ${theme.iconBg} px-3 py-1.5 rounded-lg backdrop-blur-sm`}>
              <Trophy size={16} className="text-yellow-400" />
              <span className="font-mono font-bold">{score}</span>
            </div>
            <div className={`flex items-center gap-2 ${theme.iconBg} px-3 py-1.5 rounded-lg backdrop-blur-sm`}>
              <X size={16} className="text-red-300" />
              <span className="font-mono font-bold">{wrong}</span>
            </div>
          </div>
        </div>

        {/* SETTINGS */}
        {showSettings && (
          <div className="bg-slate-50 border-b border-slate-200 p-4 animate-in slide-in-from-top-2 duration-300">
            <div className="space-y-4">
              <div>
                <h3 className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">ক্যাটাগরি</h3>
                <div className="flex flex-wrap gap-2">
                  <CategoryToggle label="বেসিক" active={categories.basic} onClick={() => handleCategoryChange('basic')} theme={theme} />
                  <CategoryToggle label="টেনটেন ও মারু" active={categories.dakuten} onClick={() => handleCategoryChange('dakuten')} theme={theme} />
                  <CategoryToggle label="যুক্তবর্ণ" active={categories.combo} onClick={() => handleCategoryChange('combo')} theme={theme} />
                </div>
              </div>
              <div>
                <h3 className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">কুইজ মোড</h3>
                <div className="flex bg-white rounded-lg p-1 border shadow-sm w-fit">
                  <button onClick={() => setMode('j-r')} className={`px-4 py-1.5 rounded-md text-sm font-bold transition-all ${mode === 'j-r' ? `${theme.bgLight} ${theme.text} shadow-sm` : 'text-slate-500 hover:bg-slate-50'}`}>
                    JP <ArrowRight size={14} className="inline mx-1" /> EN
                  </button>
                  <button onClick={() => setMode('r-j')} className={`px-4 py-1.5 rounded-md text-sm font-bold transition-all ${mode === 'r-j' ? `${theme.bgLight} ${theme.text} shadow-sm` : 'text-slate-500 hover:bg-slate-50'}`}>
                    EN <ArrowRight size={14} className="inline mx-1" /> JP
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* QUIZ AREA */}
        <div className="p-6">
          {!currentQuestion ? (
            <div className="text-center py-10 text-slate-500">
              <p>কোনো প্রশ্ন পাওয়া যায়নি। ক্যাটাগরি চেক করুন।</p>
            </div>
          ) : (
            <>
              <div className="flex justify-center mb-8">
                <div className="relative group">
                  <div className={`w-40 h-40 sm:w-48 sm:h-48 bg-white rounded-[2rem] shadow-xl border-4 ${theme.border} flex items-center justify-center relative overflow-hidden`}>
                    {mode === 'j-r' ? (
                      <span className={`jp-font text-8xl sm:text-9xl font-bold ${theme.textDark} leading-none pb-2`}>{currentQuestion.char}</span>
                    ) : (
                      <span className={`text-6xl sm:text-7xl font-bold ${theme.textDark} font-sans`}>{currentQuestion.romaji}</span>
                    )}
                  </div>
                  <div className={`absolute -bottom-3 left-1/2 transform -translate-x-1/2 ${theme.bgLight} ${theme.text} text-xs font-bold px-3 py-1 rounded-full shadow-sm border ${theme.border}`}>
                    {currentQuestion.type === 'basic' ? 'Basic' : currentQuestion.type === 'dakuten' ? 'Dakuten' : 'Combo'}
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3 sm:gap-4 mb-6">
                {options.map((opt, idx) => (
                  <button key={idx} onClick={() => handleAnswer(opt)} className={getButtonClass(opt)} disabled={isAnswered}>
                    {mode === 'j-r' ? (
                      <span className="font-sans">{opt.romaji}</span>
                    ) : (
                      <span className="jp-font text-3xl">{opt.char}</span>
                    )}
                    {isAnswered && opt.romaji === currentQuestion.romaji && (
                      <div className="absolute top-2 right-2 text-white/90"><Check size={20} /></div>
                    )}
                  </button>
                ))}
              </div>

              <div className="h-16 flex items-center justify-center">
                {isAnswered ? (
                  <button onClick={generateQuestion} className={`flex items-center gap-2 ${theme.btn} text-white px-8 py-3 rounded-full font-bold shadow-lg hover:-translate-y-0.5 transition-all animate-in zoom-in duration-200`}>
                    পরের প্রশ্ন <ArrowRight size={18} />
                  </button>
                ) : (
                  <p className="text-slate-400 text-sm font-medium animate-pulse">সঠিক উত্তরটি বেছে নিন...</p>
                )}
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

// Sub-component
const CategoryToggle = ({ label, active, onClick, theme }) => (
  <button onClick={onClick} className={`flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-semibold border transition-all ${active ? `${theme.toggleActive} text-white shadow-sm` : 'bg-white text-slate-600 border-slate-200 hover:bg-slate-50'}`}>
    {active && <Check size={14} strokeWidth={3} />}
    {label}
  </button>
);
