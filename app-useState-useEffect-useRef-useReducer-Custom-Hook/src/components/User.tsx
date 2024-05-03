import { useState } from 'react';

interface UserData {
  uid: string;
  name: string;
}

const User = () => {
  const [user, setUser] = useState<UserData>({
    uid: crypto.randomUUID(),
    name: '',
  });

  const login = () => {
    setUser({
      uid: 'ABC123',
      name: 'Arthur',
    });
  };

  return (
    <div className="mt-5">
      <span>User:</span>

      <br />

      <button className="btn btn-primary" onClick={login}>
        Login
      </button>

      <pre>{JSON.stringify(user)}</pre>
    </div>
  );
};

export default User;
