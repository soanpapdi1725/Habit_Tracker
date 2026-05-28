import EmptyList from "@/src/components/EmptyList";
import HabitCard from "@/src/components/HabitCard";
import ScreenWrapper from "@/src/components/ScreenWrapper";
import dayjs from "dayjs";
import { useRouter } from "expo-router";
import { FlatList, Text, TouchableOpacity, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useDispatch, useSelector } from "react-redux";

export default function HabitListScreen() {
  const insets = useSafeAreaInsets();
  const habits = useSelector((state) => state.habits.list);
  const dispatch = useDispatch();
  const router = useRouter();

  const today = dayjs();
  const completedCount = habits.filter((h) =>
    h.completedDates.includes(today.format("YYYY-MM-DD")),
  ).length;

  return (
    <ScreenWrapper>
      {/* Header */}
      <View className="flex-row justify-between items-center pt-4 pb-6">
        <View>
          <Text className="text-[28px] font-extrabold text-txt-primary tracking-tight">
            Today
          </Text>
          <Text className="text-[15px] font-medium text-txt-secondary mt-0.5">
            {today.format("dddd, MMM, DD")}
          </Text>
        </View>

        {habits.length > 0 && (
          <View className="bg-accent-soft rounded-full px-4 py-2 border border-accent-border">
            <Text className="text-base font-bold text-accent">
              {completedCount}/{habits.length}
            </Text>
          </View>
        )}
      </View>

      {/* Habit List */}
      <FlatList
        data={habits}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <HabitCard habit={item} />}
        ListEmptyComponent={EmptyList}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 100, flexGrow: 1 }}
      />

      {/* FAB */}
      <TouchableOpacity
        style={{
          marginBottom: insets.bottom + 4,
          marginRight: insets.right + "10%",
        }}
        onPress={() => router.push("/add-habit")}
        className="absolute bottom-8 right-0 w-[60px] h-[60px] rounded-full bg-accent items-center justify-center shadow-xl shadow-accent/35 active:opacity-85 active:scale-95"
      >
        <Text className="text-[30px] font-light text-white leading-[34px]">
          +
        </Text>
      </TouchableOpacity>
    </ScreenWrapper>
  );
}
