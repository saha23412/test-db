import { Routes, Route } from 'react-router-dom';

const AppRouter = ({ publickRoutes }) => {
  return (
    <Routes>
      {publickRoutes.map((route) => (
        <Route key={route.path} path={route.path} element={<route.element />} />
      ))}
    </Routes>
  );
};

export default AppRouter;
