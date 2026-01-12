import { Text, View } from "react-native";

import AICard from "../components/AICard";
import PrimaryButton from "../components/PrimaryButton";
import ScreenWrapper from "../components/ScreenWrapper";

import { useTheme } from "../context/ThemeContext";
import { mockAnswers } from "../data/mockAnswers";

/**
 * SelectAIScreen
 *
 * - AI 하나 선택
 * - 요약 프롬프트 제공
 */
type Props = {
  selectedAI: string | null;
  onSelectAI: (aiName: string) => void;
  onRestart: () => void;
};

export default function SelectAIScreen({
  selectedAI,
  onSelectAI,
  onRestart,
}: Props) {
  const { theme } = useTheme();

  return (
    <ScreenWrapper>
      <View style={{ flex: 1, padding: 20 }}>
        <Text
          style={{
            backgroundColor: theme.input.background,
            color: theme.input.text,
            borderColor: theme.input.border,
            fontSize: 20,
            fontWeight: "bold",
            marginBottom: 16,
          }}
        >
          AI를 선택하세요
        </Text>

        {/* AI 선택 카드 */}
        {mockAnswers.map((item) => {
          const isSelected = selectedAI === item.aiName;

          return (
            <AICard
              key={item.aiName}
              aiName={item.aiName}
              answer={item.answer}
              selectable
              selected={isSelected}
              disabled={selectedAI !== null && !isSelected}
              onSelect={() => onSelectAI(item.aiName)}
            />
          );
        })}

        {/* 요약 프롬프트 */}
        {selectedAI && (
          <View style={{ marginTop: 24 }}>
            <Text
              style={{
                backgroundColor: theme.input.background,
                color: theme.input.text,
                borderColor: theme.input.border,
                fontWeight: "bold",
                marginBottom: 8,
              }}
            >
              요약된 프롬프트
            </Text>

            <Text
              style={{
                backgroundColor: theme.input.background,
                color: theme.input.text,
                borderColor: theme.input.border,
                borderWidth: 1,
                borderColor: "#ddd",
                borderRadius: 8,
                padding: 12,
              }}
            >
              위 대화를 요약해, {selectedAI} 기준으로 핵심만 정리해줘.
            </Text>
          </View>
        )}

        <PrimaryButton title="새 질문 시작하기" onPress={onRestart} />
      </View>
    </ScreenWrapper>
  );
}
