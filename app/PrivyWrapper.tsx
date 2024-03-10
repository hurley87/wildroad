'use client';
import { PrivyProvider, addRpcUrlOverrideToChain } from '@privy-io/react-auth';
import { chain } from '@/constants/chain';
import { rpc } from '@/constants/rpc';

function PrivyWrapper({ children }: { children: React.ReactNode }) {
  const appId = process.env.NEXT_PUBLIC_PRIVY_APP_ID as string;
  const chainOverride = addRpcUrlOverrideToChain(chain, rpc);

  return (
    <PrivyProvider
      appId={appId}
      config={{
        loginMethods: ['farcaster'],
        appearance: {
          theme: 'light',
          accentColor: '#676FFF',
        },
        supportedChains: [chainOverride],
      }}
    >
      {children}
    </PrivyProvider>
  );
}

export default PrivyWrapper;
