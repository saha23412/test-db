import { TailSpin } from 'react-loader-spinner';
import style from './loading.module.css';

const Loading = () => {
  return (
    <div className={style.loading}>
      <TailSpin
        height="60"
        width="60"
        color="#307cf5"
        ariaLabel="tail-spin-loading"
        radius="1"
      />
    </div>
  );
};

export default Loading;
