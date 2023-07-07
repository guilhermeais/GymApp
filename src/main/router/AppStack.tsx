import {useContext} from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {makeHomePage} from '../factories/pages';
import {Header} from '../../presentation/components/Header/Header';
import StudentPage, {
  STUDENT_SCREEN_NAME,
} from '../../presentation/pages/Student';
import DrawerMenu from '../../presentation/components/Header/DrawerMenu';
import {UserIcon, HomeIcon} from 'react-native-heroicons/solid';
import {HOME_SCREEN_NAME} from '../../presentation/pages/Home';
import {DependenciesContext} from '../context/DependenciesContext';

const Drawer = createDrawerNavigator();
export type MenuItem = {
  name: string;
  label?: string;
  icon?: (props: {color?: string}) => JSX.Element;
  screen: () => JSX.Element;
};

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
    screen: StudentPage,
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
      {menuItems.map(item => {
        return (
          <Drawer.Screen
            key={item.name}
            name={item.name}
            component={item.screen}
            options={{
              drawerLabel: item.label || item.name,
              drawerIcon: ({color}) => <item.icon color={color} />,
            }}
          />
        );
      })}
    </Drawer.Navigator>
  );
}
