import { useEffect } from "react";
import { Dimensions, Image, Text, View } from "react-native";
import { useTheme } from "../context/ThemeContext";

type Props = {
  onFinish: () => void;
};

const { height } = Dimensions.get("window");

export default function SplashScreen({ onFinish }: Props) {
  const { theme } = useTheme();

  useEffect(() => {
    const timer = setTimeout(() => {
      onFinish();
    }, 1200); // 1.2초

    return () => clearTimeout(timer);
  }, []);

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "#020304", // 브랜드 다크
        alignItems: "center",
      }}
    >
      {/* 중앙 로고 영역 */}
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {/* 로고 아이콘 */}
        <Image
          source={require("../../assets/images/splash-icon.png")}
          style={{
            width: 120,
            height: 120,
            marginBottom: 12,
          }}
          resizeMode="contain"
        />

        {/* AIQ 텍스트 */}
        <Text
          style={{
            fontSize: 32,
            fontWeight: "900",
            letterSpacing: 3,
            color: "#FFFFFF",
          }}
        >
          AIQ
        </Text>
      </View>

      {/* 하단 캐릭터 */}
      <Image
        source={require("../../assets/images/aiq-character.png")}
        style={{
          position: "absolute",
          bottom: -20, // 살짝 잘리게
          width: 260,
          height: 260,
        }}
        resizeMode="contain"
      />
    </View>
  );
}
