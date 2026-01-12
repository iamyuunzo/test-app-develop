import { ScrollView, Text } from "react-native";

import AICard from "../components/AICard";
import PrimaryButton from "../components/PrimaryButton";
import ScreenWrapper from "../components/ScreenWrapper";

import { useTheme } from "../context/ThemeContext";
import { mockAnswers } from "../data/mockAnswers";

/**
 * CompareAnswersScreen
 *
 * 역할:
 * - 질문 표시
 * - 4개 AI 응답을 비교해서 보여줌
 * - 질문 횟수 감소 처리
 */
type Props = {
  question: string;
  remainingCount: number;
  onAskAgain: () => void;
  onFinishCompare: () => void;
};

export default function CompareAnswersScreen({
  question,
  remainingCount,
  onAskAgain,
  onFinishCompare,
}: Props) {
  const { theme } = useTheme();
  return (
    <ScreenWrapper>
      <ScrollView contentContainerStyle={{ padding: 20 }}>
        <Text
          style={{
            backgroundColor: theme.input.background,
            color: theme.input.text,
            borderColor: theme.input.border,
            fontSize: 18,
            fontWeight: "bold",
            marginBottom: 12,
          }}
        >
          질문
        </Text>

        <Text
          style={{
            backgroundColor: theme.input.background,
            color: theme.input.text,
            borderColor: theme.input.border,
            marginBottom: 20,
          }}
        >
          {question}
        </Text>

        <Text
          style={{
            backgroundColor: theme.input.background,
            color: theme.input.text,
            borderColor: theme.input.border,
            marginBottom: 16,
          }}
        >
          남은 질문 횟수: {remainingCount}
        </Text>

        {/* AI 응답 카드 */}
        {mockAnswers.map((item) => (
          <AICard key={item.aiName} aiName={item.aiName} answer={item.answer} />
        ))}

        <PrimaryButton title="질문 한 번 더" onPress={onAskAgain} />

        <PrimaryButton title="비교 끝내기" onPress={onFinishCompare} />
      </ScrollView>
    </ScreenWrapper>
  );
}
