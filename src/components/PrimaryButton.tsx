import { Pressable, Text } from "react-native";

import { COLORS } from "../constants/colors";
import { OPACITY } from "../constants/opacity";
import { RADIUS } from "../constants/radius";
import { SHADOW } from "../constants/shadow";

/**
 * PrimaryButton
 *
 * - 공통 버튼 스타일 래퍼
 * - Button 자체는 RN 기본 사용
 * - 앱의 메인 CTA 버튼
 * - 다크모드 + 미래지향적 톤
 */
type Props = {
  title: string;
  onPress: () => void;
  disabled?: boolean;
};

export default function PrimaryButton({
  title,
  onPress,
  disabled = false,
}: Props) {
  return (
    <Pressable
      disabled={disabled}
      onPress={onPress}
      style={({ pressed }) => ({
        backgroundColor: disabled ? COLORS.disabled : COLORS.primary,

        borderRadius: RADIUS.md,
        paddingVertical: 14,
        paddingHorizontal: 16,
        marginVertical: 8,

        // 살짝 눌리는 효과
        opacity: pressed ? 0.85 : 1,

        // 버튼도 떠 있는 느낌
        ...SHADOW.glass,

        // 비활성화 처리
        ...(disabled && { opacity: OPACITY.disabled }),
      })}
    >
      <Text
        style={{
          color: COLORS.background,
          textAlign: "center",
          fontSize: 16,
          fontWeight: "600",
        }}
      >
        {title}
      </Text>
    </Pressable>
  );
}
