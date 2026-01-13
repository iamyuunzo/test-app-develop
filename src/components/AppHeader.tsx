import { Pressable, Text, View } from "react-native";
import { useTheme } from "../context/ThemeContext";

/**
 * AppHeader
 * - 왼쪽: AIQ 로고 텍스트
 * - 오른쪽: 다크/라이트 토글 버튼
 * - 모든 화면에서 공통으로 사용
 */
type Props = {
  title?: string; // 필요하면 화면별 타이틀도 넣을 수 있게 옵션
};

export default function AppHeader({ title }: Props) {
  const { theme, mode, toggleTheme } = useTheme();

  return (
    <View
      style={{
        height: 56,
        paddingHorizontal: 20,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",

        // 헤더가 배경과 분리돼 보이게 살짝 밑줄 느낌
        borderBottomWidth: 1,
        borderBottomColor: theme.border,
      }}
    >
      {/* 왼쪽: AIQ 로고 */}
      <View style={{ flexDirection: "row", alignItems: "center", gap: 10 }}>
        <Text
          style={{
            fontSize: 22,
            fontWeight: "800",
            color: theme.text.primary,
            letterSpacing: 1,
          }}
        >
          AIQ
        </Text>

        {/* 화면별 타이틀이 필요하면 옆에 작게 표시 */}
        {title ? (
          <Text style={{ color: theme.text.secondary, fontSize: 13 }}>
            {title}
          </Text>
        ) : null}
      </View>

      {/* 오른쪽: 테마 토글 */}
      <Pressable
        onPress={toggleTheme}
        style={({ pressed, hovered }) => ({
          paddingHorizontal: 12,
          paddingVertical: 8,
          borderRadius: 999,
          borderWidth: 1,
          borderColor: theme.border,
          backgroundColor: theme.surface,
          opacity: pressed ? 0.8 : 1,
          transform: [{ scale: hovered ? 1.03 : 1 }],
        })}
      >
        <Text style={{ color: theme.text.secondary, fontWeight: "600" }}>
          {mode === "dark" ? "☀️ Light" : "🌙 Dark"}
        </Text>
      </Pressable>
    </View>
  );
}
