import { useState } from "react";
import { View } from "react-native";
import { DarkTheme } from "../../src/theme/dark";
import { LightTheme } from "../../src/theme/light";

import CompareAnswersScreen from "../../src/screens/CompareAnswersScreen";
import QuestionInputScreen from "../../src/screens/QuestionInputScreen";
import SelectAIScreen from "../../src/screens/SelectAIScreen";
import { ThemeContext } from "@/src/context/ThemeContext";

type Step = "INPUT" | "COMPARE" | "SELECT";

export default function Index() {
  /**
   * =========================
   * 1. 앱 전체 상태 정의
   * =========================
   */

  // 현재 테마 모드
  const [mode, setMode] = useState<"dark" | "light">("dark");

  const theme = mode === "dark" ? DarkTheme : LightTheme;

  const toggleTheme = () => {
    setMode((prev) => (prev === "dark" ? "light" : "dark"));
  };

  // 현재 화면 단계
  const [step, setStep] = useState<Step>("INPUT");

  // 사용자가 입력한 질문
  const [question, setQuestion] = useState("");

  // 남은 질문 횟수 (최대 5번)
  const [remainingCount, setRemainingCount] = useState(5);

  // 선택한 AI 이름
  const [selectedAI, setSelectedAI] = useState<string | null>(null);

  /**
   * =========================
   * 2. 화면 분기 렌더링
   * =========================
   */

  return (
    <ThemeContext.Provider value={{ theme, mode, toggleTheme }}>
      <View
        style={{
          flex: 1,
        }}
      >
        {step === "INPUT" && (
          <QuestionInputScreen
            onSubmit={(inputQuestion: string) => {
              setQuestion(inputQuestion);
              setStep("COMPARE");
            }}
          />
        )}

        {step === "COMPARE" && (
          <CompareAnswersScreen
            question={question}
            remainingCount={remainingCount}
            onAskAgain={() => {
              setRemainingCount((prev) => prev - 1);
              if (remainingCount - 1 <= 0) {
                setStep("SELECT");
              }
            }}
            onFinishCompare={() => {
              setStep("SELECT");
            }}
          />
        )}

        {step === "SELECT" && (
          <SelectAIScreen
            selectedAI={selectedAI}
            onSelectAI={(aiName: string) => {
              setSelectedAI(aiName);
            }}
            onRestart={() => {
              setQuestion("");
              setRemainingCount(5);
              setSelectedAI(null);
              setStep("INPUT");
            }}
          />
        )}
      </View>
    </ThemeContext.Provider>
  );
}
