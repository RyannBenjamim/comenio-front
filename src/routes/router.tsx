import { createBrowserRouter } from "react-router-dom"
import Login from "../pages/social/Login/Login";
import Home from '../pages/social/Home/Home';
import Comunidades from '../pages/social/Comunidades/Comunidades'
import Perfil from "../pages/social/Perfil/Perfil";
import Configuracoes from "../pages/social/Configuracoes/Configuracoes";
import SocialLayout from "../pages/social/SocialLayout/SocialLayout";
import PostsPerfil from "../pages/social/Perfil/PostsPerfil";
import ComunidadesPerfil from "../pages/social/Perfil/ComunidadesPerfil";
import RespostasPerfil from "../pages/social/Perfil/RespostasPerfil";
import CurtidasPerfil from "../pages/social/Perfil/CurtidasPerfil";
import Feed from "../pages/social/Feed/Feed";
import Atividades from "../pages/social/Atividades/Atividades";
import Ranking from "../pages/social/Ranking/Ranking";
import { requireAuth, requireNoAuth } from "../utils/loaders";
import ExpandedPost from "../pages/social/ExpandedPost/ExpandedPost";

const router = createBrowserRouter([
  {
    path: '/login',
    element: <Login />,
    loader: requireNoAuth
  },

  {
    path: '',
    element: <SocialLayout />,
    loader: requireAuth,
    children: [
      { index: true, element: <Home /> },
      { path: 'feed', element: <Feed /> },
      { path: 'atividades', element: <Atividades /> },
      { 
        path: '/perfil', 
        element: <Perfil />, 
        children: [
          { index: true, element: <PostsPerfil /> },
          { path: 'comunidades', element: <ComunidadesPerfil /> },
          { path: 'respostas', element: <RespostasPerfil /> },
          { path: 'curtidas', element: <CurtidasPerfil /> }
        ] 
      },
      { path: 'ranking', element: <Ranking /> },
      { path: '/conta', element: <Configuracoes /> },
      { path: '/comunidades', element: <Comunidades /> },
      { path: '/comunidades/:comunidade_id' },
      { path: '/:username/posts/:post_id', element: < ExpandedPost /> },
      { path: '/:username/posts/:post_id/comments/:comment_id' }
    ]
  }
]);

export default router