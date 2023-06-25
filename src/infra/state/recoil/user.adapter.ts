import {atom, useRecoilState} from 'recoil';
import {UserProps, User} from '../../../domain/entities/user';
import {UserState} from '../../../domain/protocols/state/user.state';

const userStateAtom = atom<User | null>({
  key: 'UserState',
  default: null,
});

export function AdaptRecoilUserState(): UserState {
  const [userState, setUserState] = useRecoilState(userStateAtom);

  function setLoggedUser(user: UserProps): void {
    setUserState(User.create(user));
  }

  function getLoggedUser(): User {
    return userState;
  }

  return {
    setLoggedUser,
    getLoggedUser,
  };
}
