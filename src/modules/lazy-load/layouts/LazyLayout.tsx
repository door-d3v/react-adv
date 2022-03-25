import { NavLink, Routes, Route, Navigate } from 'react-router-dom';
import { LazyPage1, LazyPage2, LazyPage3 } from '../pages';

const LazyLayout = () => {
  return (
    <>
      <div className='lazyload-container'>
        <h1>LazyLayout Page</h1>
        <ul className='menu'>
          <NavLink
            to='lazy1'
            className={({ isActive }) => (isActive ? 'anchor-active' : '')}>
            Lazy 1
          </NavLink>
          <NavLink
            to='lazy2'
            className={({ isActive }) => (isActive ? 'anchor-active' : '')}>
            Lazy 2
          </NavLink>
          <NavLink
            to='lazy3'
            className={({ isActive }) => (isActive ? 'anchor-active' : '')}>
            Lazy 3
          </NavLink>
        </ul>

        <Routes>
          <Route path='lazy1' element={<LazyPage1 />} />
          <Route path='lazy2' element={<LazyPage2 />} />
          <Route path='lazy3' element={<LazyPage3 />} />

          <Route path='*' element={<Navigate to='lazy1' replace />} />
        </Routes>
      </div>
    </>
  );
};

export default LazyLayout;