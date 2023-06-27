/* eslint-disable react-hooks/rules-of-hooks */
import {atom, useRecoilState} from 'recoil';
import {UserProps, User} from '../../../domain/entities/user';
import {UserState} from '../../../domain/protocols/state/user.state';

const userStateAtom = atom<User | null>({
  key: 'UserState',
  default: null,
});

export function AdaptRecoilUserState(): UserState {
  const [_, setUserState] = useRecoilState(userStateAtom);

  function setLoggedUser(user: UserProps): void {
    console.log('setting user: ', user);
    setUserState(User.create(user));
  }

  function getLoggedUser(): User {
    const [userState] = useRecoilState(userStateAtom);
    console.log('getting user: ', userState);
    return userState;
  }

  return {
    setLoggedUser,
    getLoggedUser,
  };
}
