import {useContext} from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {makeHomePage} from '../factories/pages';
import {Header} from '../../presentation/components/Header/Header';
import StudentPage, {
  LIST_STUDENT_SCREEN_NAME,
  STUDENT_SCREEN_NAME,
} from '../../presentation/pages/Student';
import DrawerMenu from '../../presentation/components/Header/DrawerMenu';
import {UserIcon, HomeIcon} from 'react-native-heroicons/solid';
import {HOME_SCREEN_NAME} from '../../presentation/pages/Home';
import {DependenciesContext} from '../context/DependenciesContext';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import CreateStudent, {
  CREATE_STUDENT_SCREEN_NAME,
} from '../../presentation/pages/Student/CreateStudent';

const Drawer = createDrawerNavigator();
const Stack = createNativeStackNavigator();
export type MenuItem = {
  name: string;
  label?: string;
  icon?: (props: {color?: string}) => JSX.Element;
  screen: () => JSX.Element;
  headerShown?: boolean;
};

function StudentStack() {
  return (
    <Stack.Navigator screenOptions={{header: props => Header(props as any)}}>
      <Stack.Screen name={LIST_STUDENT_SCREEN_NAME} component={StudentPage} />
      <Stack.Group screenOptions={{headerShown: false}}>
        <Stack.Screen
          name={CREATE_STUDENT_SCREEN_NAME}
          component={CreateStudent}
        />
      </Stack.Group>
    </Stack.Navigator>
  );
}

const menuItems: MenuItem[] = [
  {
    name: HOME_SCREEN_NAME,
    label: 'Página Inicial',
    screen: makeHomePage(),
    icon: HomeIcon,
  },
  {
    name: STUDENT_SCREEN_NAME,
    label: 'Alunos',
    screen: StudentStack,
    headerShown: false,
    icon: UserIcon,
  },
];

export default function AppStack() {
  const {useCaseFactory} = useContext(DependenciesContext);

  return (
    <Drawer.Navigator
      drawerContent={props => DrawerMenu({...props, useCaseFactory})}
      screenOptions={{
        header: props => Header(props),
        drawerActiveTintColor: '#fff',
        drawerInactiveTintColor: '#333',
        drawerActiveBackgroundColor: 'rgb(34 197 94)',
        drawerLabelStyle: {
          marginLeft: -25,
          fontSize: 15,
        },
      }}
      initialRouteName={HOME_SCREEN_NAME}>
      <Drawer.Group>
        {menuItems.map(item => {
          return (
            <Drawer.Screen
              key={item.name}
              name={item.name}
              component={item.screen}
              options={{
                drawerLabel: item.label || item.name,
                drawerIcon: ({color}) => <item.icon color={color} />,
                headerShown:
                  typeof item.headerShown === 'undefined'
                    ? true
                    : item.headerShown,
              }}
            />
          );
        })}
      </Drawer.Group>
    </Drawer.Navigator>
  );
}
