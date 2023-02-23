import { useState } from 'react';
import User from '../../../icons/user';
import style from './user-element.module.css';
import MyButton from '../../ui/my-button/my-button';
import MyInput from '../../ui/my-input/my-input';
import { updateUser } from '../../../http/userApi';

const UserElement = ({ email, deleteUser, id }) => {
  const [value, setValue] = useState('');
  const updateUserCard = async (idUser, monies) => {
    await updateUser(idUser, Number(monies));
    setValue('');
  };
  return (
    <div className={style['user-element']}>
      <div className={style['user-email']}>
        <p>Email: {email}</p>
        <User />
      </div>
      <div className={style['user-element-control']}>
        <div className={style['user-element-container']}>
          <p>Изменить баланс пользователю</p>
          <MyInput
            type="text"
            placeholder="monies"
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
          <MyButton onClick={() => updateUserCard(id, value)}>
            Изменить
          </MyButton>
          <MyButton onClick={() => deleteUser(id)}>
            Удалить пользователя
          </MyButton>
        </div>
      </div>
    </div>
  );
};

export default UserElement;
