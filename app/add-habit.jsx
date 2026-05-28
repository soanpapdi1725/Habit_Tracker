import React from "react";
import {
  View,
  Text,
  TextInput,
  Pressable,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import { useDispatch } from "react-redux";
import { useRouter } from "expo-router";
import { Formik } from "formik";
import * as Yup from "yup";
import { addHabit } from "@/src/store/slices/habitSlice";
import ScreenWrapper from "@/src/components/ScreenWrapper";
import { FontAwesome6 } from "@expo/vector-icons";

const habitSchema = Yup.object().shape({
  name: Yup.string()
    .trim()
    .min(2, "Name must be at least 2 characters")
    .max(40, "Name must be 40 characters or less")
    .required("Please enter a habit name"),
});

export default function AddHabitScreen() {
  const dispatch = useDispatch();
  const router = useRouter();

  const handleSubmit = (values) => {
    dispatch(addHabit({ name: values.name.trim() }));
    router.back();
  };

  return (
    <ScreenWrapper>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        className="flex-1"
      >
        {/* Header */}
        <View className="pt-4 pb-2">
          <Pressable onPress={() => router.back()} hitSlop={12}>
                      <FontAwesome6 name="arrow-left-long" size={24} color="#818CF8" />

            
          </Pressable>
        </View>

        {/* Form */}
        <View className="flex-1 pt-12">
          <Text className="text-[32px] font-extrabold text-txt-primary tracking-tight mb-2">
            New Habit
          </Text>
          <Text className="text-base text-txt-secondary mb-8 leading-[22px]">
            What would you like to do every day?
          </Text>

          <Formik
            initialValues={{ name: "" }}
            validationSchema={habitSchema}
            onSubmit={handleSubmit}
          >
            {({ handleChange, handleBlur, handleSubmit, values, errors, touched }) => (
              <View>
                {/* Input */}
                <View className="mb-8">
                  <TextInput
                    className={`bg-app-surface rounded-xl border-[1.5px] text-txt-primary text-[17px] font-medium px-6 py-[18px] ${
                      errors.name && touched.name
                        ? "border-danger"
                        : "border-card-border"
                    }`}
                    placeholder="e.g. Read for 20 minutes"
                    placeholderTextColor="#5A5A6E"
                    value={values.name}
                    onChangeText={handleChange("name")}
                    onBlur={handleBlur("name")}
                    autoFocus
                    maxLength={40}
                    onSubmitEditing={handleSubmit}
                  />

                  {errors.name && touched.name ? (
                    <Text className="text-danger text-[13px] font-medium mt-2 ml-1">
                      {errors.name}
                    </Text>
                  ) : null}

                  <Text className="text-xs text-txt-muted text-right mt-1">
                    {values.name.length}/40
                  </Text>
                </View>

                {/* Submit */}
                <Pressable
                  onPress={handleSubmit}
                  className={`bg-accent rounded-xl py-[18px] items-center justify-center active:opacity-85 active:scale-[0.98] 
                  `}
                >
                  <Text className="text-white text-[17px] font-bold tracking-wide">
                    Create Habit
                  </Text>
                </Pressable>
              </View>
            )}
          </Formik>
        </View>
      </KeyboardAvoidingView>
    </ScreenWrapper>
  );
}
