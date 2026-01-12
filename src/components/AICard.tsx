import { Pressable, Text } from "react-native";

import { COLORS } from "../constants/colors";
import { OPACITY } from "../constants/opacity";
import { RADIUS } from "../constants/radius";
import { SHADOW } from "../constants/shadow";
import { useTheme } from "../context/ThemeContext";

/**
 * AICard
 *
 * 역할:
 * - AI 이름 표시
 * - AI 응답 텍스트 표시
 * - (선택) 선택 버튼
 * - 다크모드 기준 글라스 느낌 카드
 * - AI 응답 비교 / 선택에 공통 사용
 *
 * Compare / Select 화면에서 공통으로 사용
 */
type Props = {
  aiName: string;
  answer: string;
  selectable?: boolean;
  selected?: boolean;
  disabled?: boolean;
  onSelect?: () => void;
};

export default function AICard({
  aiName,
  answer,
  selectable = false,
  selected = false,
  disabled = false,
  onSelect,
}: Props) {
  const { theme } = useTheme();

  return (
    <Pressable
      disabled={disabled}
      onPress={onSelect}
      style={{
        backgroundColor: theme.input.background,
        borderRadius: RADIUS.md,
        padding: 16,
        marginBottom: 16,

        // 선택 상태 강조
        borderWidth: selected ? 1.5 : 1,
        borderColor: selected ? COLORS.primary : COLORS.border,

        // 글라스 카드 느낌
        ...SHADOW.glass,

        // 비활성화 시 흐리게
        opacity: disabled ? OPACITY.disabled : 1,
      }}
    >
      {/* AI 이름 */}
      <Text
        style={{
          backgroundColor: theme.input.background,
          color: theme.input.text,
          borderColor: theme.input.border,
        }}
      >
        {aiName}
      </Text>

      {/* AI 응답 텍스트 */}
      <Text
        style={{
          backgroundColor: theme.input.background,
          color: theme.input.text,
          borderColor: theme.input.border,
          lineHeight: 20,
        }}
      >
        {answer}
      </Text>

      {/* 선택 상태 표시 */}
      {selected && (
        <Text
          style={{
            marginTop: 12,
            backgroundColor: theme.input.background,
            color: theme.input.text,
            borderColor: theme.input.border,
            fontSize: 12,
            fontWeight: "500",
          }}
        >
          선택됨
        </Text>
      )}
    </Pressable>
  );
}
