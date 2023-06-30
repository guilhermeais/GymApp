/* eslint-disable react-hooks/rules-of-hooks */
import {atom, useRecoilState} from 'recoil';
import {UserProps, User} from '../../../domain/entities/user';
import {UserState} from '../../../domain/protocols/state/user.state';

export const userStateAtom = atom<User | null>({
  key: 'UserState',
  default: null,
});

export function AdaptRecoilUserState(): UserState {
  const [_, setUserState] = useRecoilState(userStateAtom);

  function setLoggedUser(user: UserProps): void {
    setUserState(User.create(user));
  }

  function getLoggedUser(): User {
    const [userState] = useRecoilState(userStateAtom);
    return userState;
  }

  function logoutUser(): void {
    setUserState(null);
  }

  return {
    setLoggedUser,
    getLoggedUser,
    logoutUser,
  };
}
