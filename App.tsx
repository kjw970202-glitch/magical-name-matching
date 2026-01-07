
import React, { useState } from 'react';
import { MANITTO_MAP, PARTICIPANTS_DATA } from './constants';
import { generateManittoMessage } from './geminiService';
import CrystalBall from './components/CrystalBall';

const App: React.FC = () => {
  const [searchName, setSearchName] = useState('');
  const [inviteCode, setInviteCode] = useState('');
  const [partner, setPartner] = useState<string | null>(null);
  const [isRevealing, setIsRevealing] = useState(false);
  const [resultData, setResultData] = useState<{message: string, mission: string}>({ message: '', mission: '' });
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault();
    const trimmedName = searchName.trim();
    const trimmedCode = inviteCode.trim();
    
    if (!trimmedName || !trimmedCode) {
      setError('성함과 초대코드를 모두 입력해주세요.');
      return;
    }

    const participant = PARTICIPANTS_DATA[trimmedName];
    
    if (!participant || participant.inviteCode !== trimmedCode) {
      setError('성함 또는 초대코드가 일치하지 않습니다. 다시 확인해주세요.');
      setPartner(null);
      return;
    }

    const matchedPartnerName = MANITTO_MAP[trimmedName];
    if (!matchedPartnerName) {
      setError('매칭 데이터에 오류가 있습니다. 관리자에게 문의하세요.');
      return;
    }

    setError(null);
    setIsLoading(true);
    setIsRevealing(false);

    try {
      const data = await generateManittoMessage(trimmedName, matchedPartnerName);
      setPartner(matchedPartnerName);
      setResultData(data);
      setTimeout(() => {
        setIsLoading(false);
        setIsRevealing(true);
      }, 2000);
    } catch (err) {
      setPartner(matchedPartnerName);
      setResultData({
        message: `${matchedPartnerName} 형제/자매님은 하나님이 귀히 여기시는 자녀입니다.\n\n주님의 사랑으로 돌보아주세요.`,
        mission: '✨ 중보기도로 축복하기 ✨'
      });
      setIsLoading(false);
      setIsRevealing(true);
    }
  };

  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center p-4 bg-gradient-to-b from-blue-50 to-white relative overflow-y-auto">
      {/* Heavenly Background Decorations */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
        <div className="absolute top-[-10%] left-[-10%] w-full h-full bg-[radial-gradient(circle_at_30%_20%,_rgba(251,191,36,0.05)_0%,_transparent_50%)]"></div>
        <div className="absolute bottom-[5%] right-[5%] w-64 h-64 bg-blue-100/20 blur-3xl rounded-full"></div>
      </div>

      <div className="z-10 w-full max-w-2xl flex flex-col items-center py-10 my-auto">
        {!isRevealing && !isLoading ? (
          <div className="w-full text-center space-y-12 animate-in fade-in zoom-in duration-1000">
            <header className="space-y-4">
              <div className="flex justify-center mb-4">
                <span className="text-5xl divine-float">🕊️</span>
              </div>
              <h1 className="cinzel text-3xl md:text-5xl font-bold tracking-[0.2em] text-slate-700 heavenly-glow">
                1+6 TEAM MANITTO
              </h1>
              <p className="text-slate-500 italic text-base md:text-lg font-light tracking-[0.1em]">
                "주님의 사랑 안에서 만나는 우리"
              </p>
            </header>

            <form onSubmit={handleSearch} className="w-full max-w-xs mx-auto space-y-6">
              <div className="space-y-4">
                <input
                  type="text"
                  value={searchName}
                  onChange={(e) => setSearchName(e.target.value)}
                  placeholder="그대의 이름을 입력하세요"
                  className="w-full bg-white/70 backdrop-blur-sm border border-slate-200 focus:border-amber-400 text-slate-800 py-3 px-4 text-lg text-center outline-none transition-all placeholder:text-slate-300 rounded-2xl shadow-sm"
                />
                <input
                  type="password"
                  inputMode="numeric"
                  value={inviteCode}
                  onChange={(e) => setInviteCode(e.target.value)}
                  placeholder="6자리 초대코드를 입력하세요"
                  className="w-full bg-white/70 backdrop-blur-sm border border-slate-200 focus:border-amber-400 text-slate-800 py-3 px-4 text-lg text-center outline-none transition-all placeholder:text-slate-300 rounded-2xl shadow-sm tracking-[0.2em]"
                />
              </div>
              
              <button
                type="submit"
                className="w-full bg-slate-800 hover:bg-slate-700 text-white font-bold py-4 rounded-full transition-all cinzel tracking-[0.3em] hover:scale-105 active:scale-95 shadow-md mt-4"
              >
                CONFIRM IDENTITY
              </button>
              
              {error && <p className="text-red-500 text-sm font-medium animate-pulse">{error}</p>}
              
              <p className="text-slate-400 text-[10px] uppercase tracking-[0.2em] pt-4">
                본인의 성함과 부여받은 초대코드를 입력해주세요
              </p>
            </form>
          </div>
        ) : (
          <div className="w-full flex flex-col items-center animate-in fade-in duration-1000">
            <CrystalBall isRevealing={isRevealing && !isLoading} partnerName={partner} />
            
            {isLoading && (
              <div className="mt-8 text-center space-y-4">
                <div className="flex justify-center space-x-1.5">
                  <div className="w-2 h-2 bg-amber-400 rounded-full animate-bounce [animation-delay:-0.3s]"></div>
                  <div className="w-2 h-2 bg-amber-400 rounded-full animate-bounce [animation-delay:-0.15s]"></div>
                  <div className="w-2 h-2 bg-amber-400 rounded-full animate-bounce"></div>
                </div>
                <p className="cinzel text-slate-400 tracking-[0.3em] text-sm font-bold">사랑의 메시지를 준비하는 중...</p>
              </div>
            )}

            {isRevealing && !isLoading && (
              <div className="mt-6 w-full max-w-lg animate-in zoom-in slide-in-from-bottom-8 duration-1000">
                <div className="bg-white/95 backdrop-blur-2xl border border-white p-8 md:p-12 rounded-[2.5rem] shadow-[0_20px_60px_rgba(0,0,0,0.08)] relative text-center">
                  <div className="space-y-10">
                    <div className="space-y-2">
                      <p className="text-slate-400 cinzel tracking-[0.5em] text-[10px] uppercase font-bold">주님이 맡기신 영혼</p>
                      <h2 className="text-5xl font-black text-slate-800 tracking-tight">
                        {partner}
                      </h2>
                    </div>

                    <div className="px-2">
                      <div className="text-base md:text-lg leading-[2] text-slate-600 font-medium whitespace-pre-wrap text-left bg-slate-50/80 p-6 rounded-3xl border border-slate-100 shadow-inner overflow-hidden">
                        {resultData.message.split('**').map((part, i) => i % 2 === 1 ? <strong key={i} className="text-amber-600 font-bold">{part}</strong> : part)}
                      </div>
                    </div>

                    <div className="pt-6 border-t border-slate-100">
                      <div className="bg-amber-50/70 p-6 rounded-2xl border border-amber-100">
                        <p className="text-amber-600/60 text-[10px] font-bold uppercase tracking-[0.4em] mb-3">그대에게 주어진 소명</p>
                        <p className="text-slate-800 text-xl md:text-2xl font-black tracking-tight leading-tight">
                          {resultData.mission}
                        </p>
                      </div>
                    </div>

                    <button
                      onClick={() => {
                        setIsRevealing(false);
                        setSearchName('');
                        setInviteCode('');
                        setPartner(null);
                        setResultData({ message: '', mission: '' });
                      }}
                      className="text-slate-400 hover:text-slate-600 transition-all cinzel tracking-[0.4em] text-[10px] uppercase underline underline-offset-4"
                    >
                      처음으로 돌아가기
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        )}
      </div>

      <footer className="mt-auto py-10 text-slate-300 text-[10px] tracking-[0.5em] uppercase font-bold text-center w-full z-10">
        In His Love • Mokpo 2026 • 1+6 Team
      </footer>
    </div>
  );
};

export default App;
