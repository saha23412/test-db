import { useState, useEffect } from 'react';
import UserCard from '../../components/ordinary/user-card/user-card';
import Loading from '../../components/simple/loading/loading';
import { getUsers, createUser, deleteUser } from '../../http/userApi';
import style from './wallet.module.css';

const Wallet = () => {
  const [data, setData] = useState(null);
  const [mainValueInput, setMainValueInput] = useState('');
  const [error, setError] = useState('');
  const getUsersCard = async () => {
    const users = await getUsers();
    setData(users);
  };
  const deleteUserCard = async (id) => {
    await deleteUser(id);
    setData(data.filter((user) => user.id !== id));
  };
  const createUserCard = async (email) => {
    if (/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email)) {
      await createUser(email);
      const newUser = {
        id: data[data.length - 1].id + 1,
        email,
      };
      setData([...data, newUser]);
      setMainValueInput('');
      setError('');
    } else {
      setError('Неверный формат email');
    }
  };
  useEffect(() => {
    getUsersCard();
  }, []);
  return (
    <div className={style.wallet}>
      {data ? (
        <UserCard
          error={error}
          mainValueInput={mainValueInput}
          setMainValueInput={setMainValueInput}
          createUser={createUserCard}
          deleteUser={deleteUserCard}
          users={data}
        />
      ) : (
        <Loading />
      )}
    </div>
  );
};

export default Wallet;
