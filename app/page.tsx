'use client';
import { usePrivy } from '@privy-io/react-auth';
export default function Home() {
  const { user, ready, login, logout } = usePrivy();

  if (!ready) {
    return <div>Loading...</div>;
  }

  console.log('user', user);

  const profile = user?.farcaster;

  return (
    <div>
      <h1>Wild Road</h1>
      {!user && <button onClick={login}>Connect Your Farcaster </button>}
      {profile && (
        <div>
          <p>
            Connected as {profile.displayName} ({profile.username})
          </p>

          <button onClick={logout}>Disconnect</button>
        </div>
      )}
    </div>
  );
}
