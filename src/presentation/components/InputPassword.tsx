import {View, Text, TextInput, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import {EyeIcon, EyeSlashIcon} from 'react-native-heroicons/solid';

export type InputPasswordProps = TextInput['props'] & {
  label: string;
  hasError?: boolean;
  errorMessage?: string;
};

export function InputPassword(props: InputPasswordProps) {
  const {label, hasError, errorMessage, ...inputProps} = props;
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <View>
      <Text className="block mb-2 text-sm font-medium text-gray-900 dar:text-white">
        {label}
      </Text>
      <View className="flex-row items-center border border-gray-300  rounded-full">
        <TextInput
          secureTextEntry={!showPassword}
          {...inputProps}
          className={`flex-1 bg-gray-50 text-gray-900 text-sm rounded-full focus:ring-green-500 focus:border-green-500 p-2.5 dark:bg-gray-700 dark:text-white dark:focus:ring-green-500 dark:focus:border-green-500`}
        />
        <TouchableOpacity onPress={togglePasswordVisibility} className="p-2">
          {showPassword ? (
            <EyeSlashIcon size={20} color="gray" />
          ) : (
            <EyeIcon size={20} color="black" />
          )}
        </TouchableOpacity>
      </View>
      {hasError && (
        <Text className="text-red-500 text-sm mt-1">{errorMessage}</Text>
      )}
    </View>
  );
}
