import { useEffect, useState } from "react";
import Account from "../models/Account";
import { getCurrentUser } from "../services/accountApi";

const Dashboard = () => {
  const [currentUser, setCurrentUser] = useState<Account | null>(null);

  useEffect(() => {
    const fetchCurrentUser = async () => {
      const user = await getCurrentUser();
      setCurrentUser(user);
    };

    fetchCurrentUser();
  }, []);

  if (!currentUser) {
    return <div>Loading user information...</div>;
  }

  return (
    <div>
      <h1>{JSON.stringify(currentUser)}</h1>
    </div>
  );
};

export default Dashboard;
