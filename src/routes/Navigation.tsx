import { Suspense } from 'react';
import {
  BrowserRouter,
  Navigate,
  NavLink,
  Route,
  Routes,
} from 'react-router-dom';

// Components
// import { LazyPage1, LazyPage2, LazyPage3 } from '../modules/lazy-load/pages';
import { routes } from './routes';

const Navigation = () => {
  return (
    <>
      <Suspense fallback={<span>Loading...</span>}>
        <BrowserRouter>
          <div className='main-layout'>
            <nav>
              <img src='/logo.svg' alt='React Logo' />

              <ul>
                {routes.map(({ to, name }) => (
                  <li key={to}>
                    <NavLink
                      to={to}
                      className={({ isActive }) =>
                        isActive ? 'nav-active' : ''
                      }>
                      {name}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </nav>

            <Routes>
              {routes.map(({ path, Component }) => (
                <Route key={path} path={path} element={<Component />} />
              ))}
              <Route
                path='/*'
                element={<Navigate to={routes[0].to} replace />}
              />
            </Routes>
          </div>
        </BrowserRouter>
      </Suspense>
    </>
  );
};

export default Navigation;

// Debemos agregar el <Suspense /> para utilizar componentes que carguen bajo demanda
