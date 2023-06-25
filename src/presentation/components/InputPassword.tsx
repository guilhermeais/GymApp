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
  const [isFocused, setIsFocused] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };

  const inputStyles = [
    'flex-1',
    'bg-gray-50',
    'text-gray-900',
    'text-sm',
    'rounded-full',
    'p-2.5',
    'dark:bg-gray-700',
    'dark:text-white',
    hasError ? 'border-red-500' : 'border-gray-300',
    isFocused ? 'ring-green-500' : 'border-gray-300',
    hasError && isFocused ? 'ring-red-500' : '',
  ].join(' ');

  const viewStyles = [
    'flex-row',
    'items-center',
    'border',
    'rounded-full',
    hasError ? 'border-red-600' : 'border-gray-300',
    isFocused ? 'ring-green-500' : 'border-gray-300',
    hasError ? 'border-red-600' : '',
  ].join(' ');

  return (
    <View>
      <Text className="block mb-2 text-sm font-medium text-gray-900 dar:text-white">
        {label}
      </Text>
      <View className={viewStyles}>
        <TextInput
          secureTextEntry={!showPassword}
          {...inputProps}
          className={inputStyles}
          onFocus={handleFocus}
          onBlur={handleBlur}
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
