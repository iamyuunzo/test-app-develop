import { Animated } from "react-native";
import { ReactNode } from "react";
import { useTheme } from "../context/ThemeContext";

interface ScreenWrapperProps {
  children: ReactNode;
}

export default function ScreenWrapper({ children }: ScreenWrapperProps) {
  const { theme } = useTheme();

  return (
    <Animated.View
      style={{
        flex: 1,
        backgroundColor: theme.background,
      }}
    >
      {children}
    </Animated.View>
  );
}
