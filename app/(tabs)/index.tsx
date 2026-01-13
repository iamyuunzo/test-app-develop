import { useState } from "react";
import { DarkTheme } from "../../src/theme/dark";
import { LightTheme } from "../../src/theme/light";

import { ThemeContext } from "@/src/context/ThemeContext";
import SplashScreen from "@/src/screens/SplashScreen";
import CompareAnswersScreen from "../../src/screens/CompareAnswersScreen";
import QuestionInputScreen from "../../src/screens/QuestionInputScreen";
import SelectAIScreen from "../../src/screens/SelectAIScreen";

type Step = "INPUT" | "COMPARE" | "SELECT";

export default function Index() {
  const [mode, setMode] = useState<"dark" | "light">("dark");
  const theme = mode === "dark" ? DarkTheme : LightTheme;

  const toggleTheme = () => {
    setMode((prev) => (prev === "dark" ? "light" : "dark"));
  };

  const [isSplashDone, setIsSplashDone] = useState(false);

  const [step, setStep] = useState<"INPUT" | "COMPARE" | "SELECT">("INPUT");
  const [question, setQuestion] = useState("");
  const [remainingCount, setRemainingCount] = useState(5);
  const [selectedAI, setSelectedAI] = useState<string | null>(null);

  /** ✅ 1. Splash 단계 */
  if (!isSplashDone) {
    return (
      <ThemeContext.Provider value={{ theme, mode, toggleTheme }}>
        <SplashScreen onFinish={() => setIsSplashDone(true)} />
      </ThemeContext.Provider>
    );
  }

  /** ✅ 2. 메인 앱 단계 */
  return (
    <ThemeContext.Provider value={{ theme, mode, toggleTheme }}>
      {step === "INPUT" && (
        <QuestionInputScreen
          onSubmit={(inputQuestion) => {
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
          onFinishCompare={() => setStep("SELECT")}
        />
      )}

      {step === "SELECT" && (
        <SelectAIScreen
          selectedAI={selectedAI}
          onSelectAI={setSelectedAI}
          onRestart={() => {
            setQuestion("");
            setRemainingCount(5);
            setSelectedAI(null);
            setStep("INPUT");
          }}
        />
      )}
    </ThemeContext.Provider>
  );
}
