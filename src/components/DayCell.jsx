import Entypo from "@expo/vector-icons/Entypo";
import React from "react";
import { Text, View } from "react-native";
export default function DayCell({ day, isCompleted }) {
  return (
    <View className="items-center gap-1.5">
      {/* Day of week label */}
      <Text
        className={`text-[11px]  uppercase tracking-wider ${day.isToday ? "font-bold text-txt-primary" : "font-medium text-txt-muted"}`}
      >
        {day.isToday ? "Today" : day.dayOfWeek}
      </Text>

      {/* Circle indicator */}
      <View
        className={`w-10 h-10 rounded-full items-center justify-center border-2 ${
          isCompleted
            ? "bg-done-soft border-done"
            : "bg-gray-500/10 border-transparent"
        } ${day.isToday ? "border-[2.5px]" : ""}`}
      >
        {isCompleted ? (
          <Entypo
            name="check"
            className="text-base font-semibold"
            size={24}
            color="#34D399"
          />
        ) : (
          <Entypo
            name="cross"
            className="text-base font-semibold text-gray-500"
            size={24}
            color="red"
          />
        )}
      </View>

      {/* Date number */}
      <Text
        className={`text-xs font-medium ${
          day.isToday ? "text-txt-primary font-bold" : "text-txt-secondary"
        }`}
      >
        {day.label}
      </Text>
    </View>
  );
}
