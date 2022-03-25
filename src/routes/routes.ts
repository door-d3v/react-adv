import { lazy, LazyExoticComponent } from 'react';
import NoLazyPage from '../modules/lazy-load/pages/NoLazyPage';

// :No importaremos de esta forma
// import { LazyPage1, LazyPage2, LazyPage3 } from '../modules/lazy-load/pages';

// Definimos un type para manejar de forma flexible el posible valor de la propiedad Component en nuesra interface

type JSXComponent = () => JSX.Element;

interface Route {
  Component: LazyExoticComponent<JSXComponent> | JSXComponent;
  name: string;
  path: string;
  to: string;
}

// Definición del componente que será cargado bajo demanda (LazyLoad)
// :Carga por modulo. Este componente se carga bajo demanda pero sus componentes internos no

const LazyLayout = lazy(
  () =>
    /* webpackChunkName: LazyLayout */ import(
      '../modules/lazy-load/layouts/LazyLayout'
    )
);

export const routes: Route[] = [
  {
    Component: LazyLayout,
    name: 'Lazy Layout',
    path: '/lazyload/*',
    to: '/lazyload/',
  },
  {
    Component: NoLazyPage,
    name: 'No Lazy',
    path: 'no-lazy',
    to: '/no-lazy',
  },
];
