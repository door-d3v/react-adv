import { lazy, LazyExoticComponent } from 'react';

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

const Lazy1 = lazy(
  () =>
    import(
      /* webpackChunckName: LazyPage1 */ '../modules/lazy-load/pages/LazyPage1'
    )
);
const Lazy2 = lazy(
  () =>
    import(
      /* webpackChunckName: LazyPage2 */ '../modules/lazy-load/pages/LazyPage2'
    )
);
const Lazy3 = lazy(
  () =>
    import(
      /* webpackChunckName: LazyPage3 */ '../modules/lazy-load/pages/LazyPage3'
    )
);

export const routes: Route[] = [
  {
    Component: Lazy1,
    name: 'Lazy Page 1',
    path: 'lazy1',
    to: '/lazy1',
  },
  {
    Component: Lazy2,
    name: 'Lazy Page 2',
    path: 'lazy2',
    to: '/lazy2',
  },
  {
    Component: Lazy3,
    name: 'Lazy Page 3',
    path: 'lazy3',
    to: '/lazy3',
  },
];
