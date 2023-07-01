import {ScrollView, Text, View} from 'react-native';
import MostAccessedButton from './MostAccessedButton';
import {
  UserIcon,
  ClipboardDocumentListIcon,
  BanknotesIcon,
} from 'react-native-heroicons/solid';
import {useNavigation} from '@react-navigation/native';
import {STUDENT_SCREEN_NAME} from '../../pages/Student';

export default function MostAccessedPages() {
  const navigation = useNavigation();
  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{
        justifyContent: 'space-between',
      }}>
      <MostAccessedButton
        icon={<UserIcon size={28} color="white" />}
        text={<Text className="font-bold">Alunos</Text>}
        onPress={() => navigation.navigate(STUDENT_SCREEN_NAME as never)}
      />

      <MostAccessedButton
        icon={<ClipboardDocumentListIcon size={28} color="white" />}
        text={
          <View className="flex flex-col items-center">
            <Text className="font-bold">Fichas de</Text>
            <Text className="font-bold">Treino</Text>
          </View>
        }
      />

      <MostAccessedButton
        icon={<BanknotesIcon size={28} color="white" />}
        text={<Text className="font-bold -inset-5">Mensalidade</Text>}
      />

      <MostAccessedButton
        icon={<BanknotesIcon size={28} color="white" />}
        text={<Text className="font-bold">Treinos</Text>}
      />
    </ScrollView>
  );
}
