import UserElement from '../../simple/user-element/user-element';
import style from './user-card.module.css';
import MyButton from '../../ui/my-button/my-button';
import MyInput from '../../ui/my-input/my-input';

const UserCard = ({
  users,
  createUser,
  deleteUser,
  mainValueInput,
  setMainValueInput,
  error,
  updateUser,
}) => {
  return (
    <div className={style['user-card']}>
      <div className={style['user-add']}>
        <p className={style['user-title']}>Добавить нового пользователя</p>
        <MyInput
          value={mainValueInput}
          placeholder="email"
          onChange={(e) => setMainValueInput(e.target.value)}
          required
        />
        {error ? <p className={style['user-error']}>{error}</p> : null}
        <div className={style['user-add-button']}>
          <MyButton onClick={() => createUser(mainValueInput)}>
            Добавить
          </MyButton>
        </div>
      </div>
      {users.map((user) => (
        <UserElement
          key={user.email}
          updateUser={updateUser}
          email={user.email}
          createUser={createUser}
          deleteUser={deleteUser}
          id={user.id}
        />
      ))}
    </div>
  );
};

export default UserCard;
