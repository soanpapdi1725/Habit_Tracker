import DayCell from "@/src/components/DayCell";
import ScreenWrapper from "@/src/components/ScreenWrapper";
import { deleteHabit } from "@/src/store/slices/habitSlice";
import { getLast7Days, getStreak } from "@/src/utils/streaks";
import { FontAwesome6 } from "@expo/vector-icons";
import { useLocalSearchParams, useRouter } from "expo-router";
import { Alert, Pressable, Text, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";

export default function HistoryScreen() {
  const { id } = useLocalSearchParams();
  const dispatch = useDispatch();
  const router = useRouter();

  const habit = useSelector((state) =>
    state.habits.list.find((habit) => habit.id === id),
  );

  if (!habit) {
    return (
      <ScreenWrapper>
        <View className="flex-1 items-center justify-center">
          <Text className="text-base text-txt-secondary mb-4">
            Habit not found
          </Text>
          <Pressable onPress={() => router.back()}>
            <Text className="text-base font-semibold text-accent">Go back</Text>
          </Pressable>
        </View>
      </ScreenWrapper>
    );
  }

  const streak = getStreak(habit.completedDates);
  const days = getLast7Days();
  const totalDone = days.filter((day) => habit.completedDates.includes(day.date)).length;

  const handleDelete = () => {
    Alert.alert(
      "Delete Habit",
      `Are you sure you want to delete "${habit.name}"? This cannot be undone.`,
      [
        { text: "Cancel", style: "cancel" },
        {
          text: "Delete",
          style: "destructive",
          onPress: () => {
            dispatch(deleteHabit({ id: habit.id }));
            router.back();
          },
        },
      ],
    );
  };

  return (
    <ScreenWrapper>
      {/* Back */}
      <View className="pt-4 pb-2 ">
        <Pressable
          className="flex-row max-w-20"
          onPress={() => router.back()}
        >
          <FontAwesome6 name="arrow-left-long" size={24} color="#818CF8" />
        </Pressable>
      </View>

      {/* Habit Title */}
      <Text className="text-[28px] font-extrabold text-txt-primary tracking-tight mt-4 mb-6">
        {habit.name}
      </Text>

      {/* Streak Card */}
      <View className="bg-app-surface rounded-2xl border border-streak-border p-6 mb-4">
        <View className="flex-row items-center justify-between">
          <View className="flex-row items-center gap-4">
            <Text className="text-[48px] font-extrabold text-streak leading-[56px]">
              {streak}
            </Text>
            <View>
              <Text className="text-sm font-semibold text-txt-secondary">
                Current Streak
              </Text>
              <Text className="text-[13px] text-txt-muted mt-0.5">
                day{streak !== 1 ? "s" : ""}
              </Text>
            </View>
          </View>
          {streak > 0 && <Text className="text-4xl">🔥</Text>}
        </View>
      </View>

      {/* 7 Day Timeline */}
      <View className="bg-app-surface rounded-2xl border border-card-border p-6 mb-4">
        <View className="flex-row justify-between items-center mb-6">
          <Text className="text-base font-bold text-txt-primary">
            Last 7 Days
          </Text>
          <Text className="text-[13px] font-semibold text-txt-secondary">
            {totalDone}/7 completed
          </Text>
        </View>

        <View className="flex-row justify-between">
          {days.map((day) => (
            <DayCell
              key={day.date}
              day={day}
              isCompleted={habit.completedDates.includes(day.date)}
            />
          ))}
        </View>
      </View>

      {/* Streak Explanation */}
      <View className="flex-row items-start bg-accent-soft rounded-xl p-4 mb-6 gap-2.5">
        <Text className="text-base mt-0.5">💡</Text>
        <Text className="flex-1 text-[13px] text-txt-secondary leading-[19px]">
          Your streak counts consecutive days completed up to and including
          today. Missing a day resets it to zero.
        </Text>
      </View>

      {/* Delete */}
      <View className="mt-auto pb-8">
        <Pressable
          onPress={handleDelete}
          className="bg-danger-soft rounded-xl py-4 items-center active:opacity-70"
        >
          <Text className="text-danger text-base font-semibold">
            Delete Habit
          </Text>
        </Pressable>
      </View>
    </ScreenWrapper>
  );
}
