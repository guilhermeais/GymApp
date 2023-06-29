import {ScrollView, Text, View} from 'react-native';
import MostAccessedButton from './MostAccessedButton';
import {
  UserIcon,
  ClipboardDocumentListIcon,
  BanknotesIcon,
} from 'react-native-heroicons/solid';

export default function MoreAccessedPages() {
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
