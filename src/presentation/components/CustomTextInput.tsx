import {View, Text, TextInput} from 'react-native';
import React from 'react';
import {MaskedTextInput, MaskedTextInputProps} from 'react-native-mask-text';

export type InputProps = Partial<MaskedTextInputProps> & {
  label: string;
  hasError?: boolean;
  errorMessage?: string;
};

export default function CustomTextInput(props: InputProps) {
  const {label, hasError, errorMessage, ...rest} = props;
  const TextComponent = props.mask ? MaskedTextInput : TextInput;
  return (
    <View>
      <Text className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
        {label}
      </Text>
      <TextComponent
        onChangeText={(() => {}) as any}
        onTextInput={() => {}}
        {...rest}
        className={`bg-gray-50 border ${
          hasError
            ? 'border-red-500 focus:border-red-500 '
            : 'border-gray-300 focus:border-green-500'
        } text-gray-900 text-sm rounded-full focus:ring-green-500  block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-500 dark:focus:border-green-500`}
      />
      {hasError && (
        <Text className="text-red-500 text-sm mt-1">{errorMessage}</Text>
      )}
    </View>
  );
}
