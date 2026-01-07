
import { GoogleGenAI } from "@google/genai";
import { MISSION_POOL, PARTICIPANTS_DATA } from "./constants";

export async function generateManittoMessage(userName: string, partnerName: string): Promise<{message: string, mission: string}> {
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
  const model = 'gemini-3-flash-preview';

  const user = PARTICIPANTS_DATA[userName];
  const partner = PARTICIPANTS_DATA[partnerName];
  
  // 미션 풀을 무작위로 섞어 AI에게 전달하여 중복 선택을 최소화
  const shuffledMissions = [...MISSION_POOL].sort(() => Math.random() - 0.5);
  const missionListStr = shuffledMissions.map(m => `- ${m.title}: ${m.description}`).join('\n');

  const prompt = `
    당신은 하나님의 사랑을 전달하는 '천국의 사랑 메신저'입니다. 
    1+6팀의 목포 선교 대원 "${userName}"에게 그의 마니또인 하나님의 소중한 자녀 "${partnerName}"을 알려줍니다.

    [상대방 정보]
    - 이름: ${partnerName}
    - 역할: ${partner?.roles.join(', ') || '동역자'}
    - 도착: ${partner?.arrival}
    - 복귀: ${partner?.returnTrip}

    [메시지 작성 지침]
    1. 도입: "${partnerName} 형제/자매님은 ${partner?.arrival}부터 우리와 함께하고, ${partner?.returnTrip}에 복귀할 예정이란다."
    2. 특별 주의(하윤정): 상대방이 '하윤정' 자매라면, "하윤정 자매님은 토요일 오전에 먼저 복귀하시니, 금요일 밤까지는 준비한 모든 사랑의 미션을 기쁘게 완료해주길 바란다!"라고 다정하게 당부하세요.
    3. 핵심 권면: "너는 이번 선교 사역 중에 ${partnerName}의 마니또로 택함 받았단다. 주님이 이 영혼을 네게 맡기셨으니, 3박 4일 동안 그리스도의 사랑으로 세심히 돌보아주렴."
    4. 미션 선택: 아래 [미션 리스트]에서 가장 적절한 하나를 골라 제안하세요. 미션 제목과 핵심 실천 내용은 **볼드체**로 강조하여 눈에 띄게 하세요.
    5. 가독성: 문단 사이에는 반드시 줄바꿈(\\n\\n)을 두 번 사용하여 가독성을 최대로 높여주세요.

    [미션 리스트]
    ${missionListStr}

    톤: 성경적이고, 따뜻하며, 격려가 넘치는 말투 (신비주의나 우상숭배적 표현은 절대 금지)

    JSON 응답 형식:
    {
      "message": "메시지 본문 (줄바꿈 포함)",
      "mission": "미션 제목 (예: ✨ 찰나의 포착 ✨)"
    }
  `;

  try {
    const response = await ai.models.generateContent({
      model: model,
      contents: prompt,
      config: {
        temperature: 0.9, // 더 다양한 표현과 미션 선택을 위해 온도를 높임
        responseMimeType: "application/json"
      }
    });

    return JSON.parse(response.text);
  } catch (error) {
    console.error("Gemini API Error:", error);
    const randomFallbackMission = MISSION_POOL[Math.floor(Math.random() * MISSION_POOL.length)];
    return {
      message: `${partnerName}님은 하나님의 소중한 자녀입니다.\n\n이번 선교 기간 동안 주님의 마음으로 축복하며 섬겨주세요.\n\n**특별히 기도로 든든히 지원해주시길 바랍니다.**`,
      mission: randomFallbackMission.title
    };
  }
}
