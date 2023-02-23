import style from './my-button.module.css';

const MyButton = ({ children, ...props }) => {
  return (
    <button {...props} type="button" className={style.button}>
      {children}
    </button>
  );
};

export default MyButton;
