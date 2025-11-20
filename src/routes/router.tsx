import { createBrowserRouter } from "react-router-dom"

import Login from "../pages/social/Login/Login";
import Home from '../pages/social/Home/Home';
import Comunidades from '../pages/social/Comunidades/Comunidades'
import Perfil from "../pages/social/Perfil/Perfil";
import Configuracoes from "../pages/social/Configuracoes/Configuracoes";
import SocialLayout from "../pages/social/SocialLayout/SocialLayout";

const router = createBrowserRouter([
  {
    path: '/login',
    element: <Login />,
  },

  {
    path: '',
    element: <SocialLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: '/perfil', element: <Perfil /> },
      { path: '/conta', element: <Configuracoes /> },
      { path: '/comunidades/:comunidade_id', element: <Comunidades /> }
    ]
  }
]);

export default router