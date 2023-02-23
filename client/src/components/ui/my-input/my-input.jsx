import style from './my-input.module.css';

const MyInput = ({ children, ...props }) => {
  return <input {...props} className={style.input} />;
};

export default MyInput;
