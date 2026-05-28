import { getStreak } from "@/src/utils/streaks";
import dayjs from "dayjs";
import { useRouter } from "expo-router";
import { Pressable, Text, View } from "react-native";
import { useDispatch } from "react-redux";
import { toggleHabit } from "../store/slices/habitSlice";
import { Entypo } from "@expo/vector-icons";

export default function HabitCard({ habit }) {
  const isDoneToday = habit.completedDates.includes(
    dayjs().format("YYYY-MM-DD"),
  );
  const streak = getStreak(habit.completedDates);
  const router = useRouter();
  const dispatch = useDispatch();
  return (
    <Pressable
      onPress={() => router.push(`/history/${habit.id}`)}
      className="flex-row items-center justify-between bg-app-surface rounded-2xl border border-card-border py-[18px] px-6 mb-3 active:opacity-90 active:scale-[0.98]"
    >
      {/* Left: Name + Streak */}
      <View className="flex-1 mr-4">
        <Text
          className="text-[17px] font-semibold text-txt-primary tracking-wide mb-1.5"
          numberOfLines={1}
        >
          {habit.name}
        </Text>

        <View className="flex-row items-center">
          {streak > 0 ? (
            <View className="flex-row items-center bg-streak-soft -ml-2 rounded-full px-2.5 py-[3px] border border-streak-border">
              <Text className="text-xs mr-1">🔥</Text>
              <Text className="text-xs font-semibold text-streak">
                {streak} day{streak !== 1 ? "s" : ""}
              </Text>
            </View>
          ) : (
            <View className="bg-gray-500/10 rounded-full px-2.5 py-[3px] -ml-2">
              <Text className="text-xs font-medium text-gray-500">
                No streak
              </Text>
            </View>
          )}
        </View>
      </View>

      {/* Right: Checkbox */}
      <Pressable
        onPress={(e) => {
          e.stopPropagation?.();
          dispatch(toggleHabit({ id: habit.id }));
        }}
        hitSlop={12}
        className={`w-8 h-8 rounded-lg border-2 items-center justify-center ${
          isDoneToday
            ? "bg-done border-done"
            : "bg-transparent border-txt-muted"
        }`}
      >
        {isDoneToday && (
            <Entypo name="check" className="text-base font-semibold" size={24} color="#0F0F14" />
        )}
      </Pressable>
    </Pressable>
  );
}
