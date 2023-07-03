export interface UserHasNetworkGateway {
  isConnected(): Promise<boolean>;
}
