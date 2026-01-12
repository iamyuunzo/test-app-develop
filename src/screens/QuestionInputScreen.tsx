import { useState } from "react";
import { Alert, Pressable, Text, TextInput, View } from "react-native";

import PrimaryButton from "../components/PrimaryButton";
import ScreenWrapper from "../components/ScreenWrapper";
import { useTheme } from "../context/ThemeContext";

/**
 * QuestionInputScreen
 *
 * 역할:
 * - 사용자가 질문을 입력하는 화면
 * - 입력된 질문을 부모(index.tsx)로 전달
 */
type Props = {
  onSubmit: (question: string) => void;
};

export default function QuestionInputScreen({ onSubmit }: Props) {
  /**
   * =========================
   * 1. 화면 내부 상태
   * =========================
   * - inputValue: TextInput에 입력된 값
   * - 아직은 이 화면 안에서만 사용
   */
  const [inputValue, setInputValue] = useState("");

  /**
   * =========================
   * 2. 제출 버튼 클릭 핸들러
   * =========================
   */
  const handleSubmit = () => {
    // 질문이 비어 있으면 넘어가지 않게 막는다
    if (inputValue.trim().length === 0) {
      Alert.alert("질문을 입력해주세요");
      return;
    }

    // 부모(App)에 질문 전달
    onSubmit(inputValue);
  };

  const { mode, toggleTheme } = useTheme();
  const { theme } = useTheme();

  return (
    <ScreenWrapper>
      <View
        style={{
          flex: 1,
          padding: 20,
          justifyContent: "center",
        }}
      >
        <Pressable onPress={toggleTheme}>
          <Text style={{ color: theme.text.secondary }}>
            {mode === "dark" ? "🌙 Dark mode" : "☀️ Light mode"}
          </Text>
        </Pressable>
        {/* 화면 제목 */}
        <Text
          style={{
            backgroundColor: theme.input.background,
            color: theme.input.text,
            borderColor: theme.input.border,
            fontSize: 20,
            fontWeight: "bold",
            marginBottom: 12,
          }}
        >
          질문을 입력하세요
        </Text>
        {/* 질문 입력창 */}
        <TextInput
          value={inputValue}
          onChangeText={setInputValue}
          style={{
            backgroundColor: theme.input.background,
            color: theme.input.text,
            borderColor: theme.input.border,
            borderWidth: 1,
            borderRadius: 12,
            padding: 16,
          }}
          placeholder="AI에게 물어볼 질문을 입력하세요"
          placeholderTextColor={theme.input.placeholder}
        />
        {/* 제출 버튼 */}
        <PrimaryButton
          title="질문 던지기"
          onPress={handleSubmit}
          disabled={false} // 🔥 강제로 false
        />
      </View>
    </ScreenWrapper>
  );
}
