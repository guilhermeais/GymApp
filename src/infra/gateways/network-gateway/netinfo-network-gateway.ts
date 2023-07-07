import {UserHasNetworkGateway} from '../../../domain/protocols/gateways';
import NetInfo from '@react-native-community/netinfo';

export class NetInfoNetworkGateway implements UserHasNetworkGateway {
  async isConnected(): Promise<boolean> {
    const netInfo = await NetInfo.fetch();
    return netInfo.isConnected;
  }
}
