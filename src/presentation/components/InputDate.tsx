import React, {useEffect, useState} from 'react';
import {View, Text, TextInput, Platform} from 'react-native';
import DateTimePicker, {
  DateTimePickerEvent,
} from '@react-native-community/datetimepicker';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {CalendarIcon} from 'react-native-heroicons/solid';
import {MaskedTextInput} from 'react-native-mask-text';

type Props = {
  label: string;
};

export default function InputDate({label}: Props) {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [textDate, setTextDate] = useState('');

  useEffect(() => {
    console.log('Selected Date Changed: ', selectedDate);
    setTextDate(formatDate(selectedDate));
  }, [selectedDate]);

  const openDatePicker = () => {
    setShowDatePicker(true);
  };

  const handleDateChange = (event: DateTimePickerEvent) => {
    if (!event.nativeEvent.timestamp) return;
    const date = new Date(event.nativeEvent.timestamp);
    setShowDatePicker(Platform.OS === 'ios');
    if (date) {
      setSelectedDate(date);
    }
  };

  const handleChangeText = (text: string) => {
    const parsedDate = parseDate(text);
    if (parsedDate) {
      setSelectedDate(parsedDate);
      return;
    }
    setTextDate(text);
  };

  const formatDate = (date: Date) => {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${day}/${month}/${year}`;
  };

  const parseDate = (text: string) => {
    const parts = text.split('/');
    if (parts.length === 3) {
      const day = parseInt(parts[0], 10);
      const month = parseInt(parts[1], 10) - 1;
      const year = parseInt(parts[2], 10);

      if (
        !isNaN(day) &&
        !isNaN(month) &&
        !isNaN(year) &&
        year.toString().length > 3
      ) {
        return new Date(year, month, day);
      }
    }
    return null;
  };

  const viewStyles = [
    'flex-row',
    'items-center',
    'border',
    'rounded-lg',
    'bg-gray-50',
    'border-gray-300',
    'text-gray-900',
    'text-sm',
    'focus:ring-green-500 ',
    'block',
    'w-full',
    'p-2',
    'focus:border-green-500',
    'dark:bg-gray-700',
    'dark:border-gray-600',
    'dark:placeholder-gray-400',
    'dark:text-white',
    'dark:focus:ring-green-500',
    'dark:focus:border-green-500',
  ].join(' ');

  const inputStyles = [
    'flex-1',
    'ml-2',
    'text-gray-900',
    'text-sm',
    'bg-transparent',
    'outline-none',
    'dark:text-white',
  ].join(' ');

  return (
    <View>
      <Text className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
        {label}
      </Text>

      <View className={viewStyles}>
        <TouchableOpacity onPress={openDatePicker} className="p-2">
          <CalendarIcon size={20} color="black" />
        </TouchableOpacity>
        <MaskedTextInput
          className={inputStyles}
          value={textDate}
          onChangeText={handleChangeText}
          mask="99/99/9999"
          placeholder="DD/MM/YYYY"
        />
      </View>

      {showDatePicker && (
        <DateTimePicker
          value={selectedDate}
          mode="date"
          display={Platform.OS === 'ios' ? 'spinner' : 'default'}
          onChange={event => handleDateChange(event)}
        />
      )}
    </View>
  );
}