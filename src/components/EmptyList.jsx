import dayjs from "dayjs";
import { Text, View } from "react-native";

export default function EmptyList() {
  return (
    <View className="flex-1 items-center justify-center px-8 pt-20">
      <Text className="text-[56px] mb-4 text-white">
        {(Number(dayjs().subtract(1, "day").date()) % 2 === 0 / 2) === 0
          ? "🪴"
          : (Number(dayjs().subtract(1, "day").date()) % 3 === 0 / 2) === 0
            ? "⛹🏼"
            : (Number(dayjs().subtract(1, "day").date()) % 5 === 0 / 2) === 0
              ? "⚡"
              : "🚰"}
      </Text>
      <Text className="text-[22px] font-bold text-txt-primary mb-2">
        No habits yet
      </Text>
      <Text className="text-[15px] text-txt-secondary text-center leading-6">
        Tap the + button below to create your first daily habit
      </Text>
    </View>
  );
}
