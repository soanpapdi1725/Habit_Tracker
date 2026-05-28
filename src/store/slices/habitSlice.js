import { createSlice } from "@reduxjs/toolkit";
import dayjs from "dayjs";

const habitSlice = createSlice({
  name: "habits",
  initialState: {
    list: [],
  },
  reducers: {
    addHabit: (state, action) => {
      const { name } = action.payload;
      const newHabit = {
        id: `habit_${Date.now()}_${Math.random().toString(36).substring(2, 9)}`,
        name: name.trim(),
        createdAt: dayjs().format("YYYY-MM-DD"),
        completedDates: [],
      };
      state.list.unshift(newHabit);
    },

    toggleHabit: (state, action) => {
      const { id } = action.payload;
      const today = dayjs().format("YYYY-MM-DD");
      const habit = state.list.find((habit) => habit.id === id);
      if (!habit) return habit;
      const index = habit.completedDates.indexOf(today);
      if (index >= 0) {
        habit.completedDates.splice(index, 1);
      } else {
        habit.completedDates.push(today);
      }
    },

    deleteHabit: (state, action) => {
      const { id } = action.payload;
      state.list = state.list.filter((habit) => habit.id !== id);
    },
  },
});

export const { addHabit, toggleHabit, deleteHabit } = habitSlice.actions;
export default habitSlice.reducer;
