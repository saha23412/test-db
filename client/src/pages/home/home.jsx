import { useEffect, useMemo, useState } from 'react';
import style from './home.module.css';
import Table from '../../components/ordinary/table/table';
import Loading from '../../components/simple/loading/loading';
import { getUsers } from '../../http/userApi';

const Home = () => {
  const [data, setData] = useState(null);
  const defaultColDef = useMemo(
    () => ({
      sortable: true,
      filter: true,
    }),
    []
  );
  const getUsersRow = async () => {
    const users = await getUsers();
    setData(users);
  };
  const columnUsers = [
    { field: 'id', width: 250 },
    { field: 'email', width: 250 },
    { field: 'dateOfVisit', width: 250 },
    { field: 'monies', width: 250 },
  ];
  useEffect(() => {
    getUsersRow();
  }, []);
  return (
    <div className={style.home}>
      {data ? (
        <Table
          columnDefs={columnUsers}
          rowData={data}
          defaultColDef={defaultColDef}
        />
      ) : (
        <Loading />
      )}
    </div>
  );
};

export default Home;
