/**
 * - STEP 3에서는 이 데이터로 UI와 흐름만 검증
 */

export type MockAnswer = {
  aiName: string;
  answer: string;
};

export const mockAnswers: MockAnswer[] = [
  {
    aiName: "GPT",
    answer: "React Native에서는 상태를 화면 단위로 관리하는 것이 좋습니다...",
  },
  {
    aiName: "Claude",
    answer: "비동기 요청이 많은 경우 전역 상태 관리보다...",
  },
  {
    aiName: "Gemini",
    answer: "AI 응답을 카드 단위로 관리하면...",
  },
  {
    aiName: "Perplexity",
    answer: "모바일 앱에서는 사용자 흐름이 단순해야 합니다...",
  },
];
