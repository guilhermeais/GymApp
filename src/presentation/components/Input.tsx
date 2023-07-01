import {View, Text, TextInput} from 'react-native';
import React from 'react';

export type InputProps = TextInput['props'] & {
  label: string;
  hasError?: boolean;
  errorMessage?: string;
  ref?: any
};

export default function Input(props: InputProps) {
  const {label, hasError, errorMessage, ...rest} = props;

  return (
    <View>
      <Text className="block mb-2 text-sm font-medium text-gray-900 dar:text-white">
        {label}
      </Text>
      <TextInput
        {...rest}
        className={`bg-gray-50 border ${
          hasError
            ? 'border-red-500 focus:border-red-500 '
            : 'border-gray-300 focus:border-green-500'
        } text-gray-900 text-sm rounded-full focus:ring-green-500  block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500`}
      />
      {hasError && (
        <Text className="text-red-500 text-sm mt-1">{errorMessage}</Text>
      )}
    </View>
  );
}
