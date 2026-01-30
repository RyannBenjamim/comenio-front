import { createBrowserRouter } from "react-router-dom"
import Login from "../pages/social/Login/Login";
import Home from '../pages/social/Home/Home';
import Comunidades from '../pages/social/Comunidades/Comunidades'
import Perfil from "../pages/social/Perfil/Perfil";
import Configuracoes from "../pages/social/Configuracoes/Configuracoes";
import SocialLayout from "../pages/social/SocialLayout/SocialLayout";
import RespostasPerfil from "../pages/social/Perfil/RespostasPerfil";
import CurtidasPerfil from "../pages/social/Perfil/CurtidasPerfil";
import Feed from "../pages/social/Feed/Feed";
import Atividades from "../pages/social/Atividades/Atividades";
import Ranking from "../pages/social/Ranking/Ranking";
import { requireAuth, requireNoAuth } from "../utils/loaders";
import ExpandedPost from "../pages/social/ExpandedPost/ExpandedPost";
import FeedComunidade from "../pages/social/FeedComunidade/FeedComunidade";
import AtividadesComunidade from "../pages/social/AtividadesComunidade/AtividadesComunidade";
import AtividadesPendentes from "../pages/social/AtividadesComunidade/AtividadesPendentes";
import AtividadesCorrigidas from "../pages/social/AtividadesComunidade/AtividadesCorrigidas";
import AtividadesEntregues from "../pages/social/AtividadesComunidade/AtividadesEntregues";
import DetalhesPendente from "../pages/social/DetalhesPendente/DetalhesPendente";
import DetalhesEntregue from "../pages/social/DetalhesEntregue/DetalhesEntregue";
import DetalhesCorrecao from "../pages/social/DetalhesCorrecao/DetalhesCorrecao";
import MidiasPerfil from "../pages/social/Perfil/MidiasPerfil";
import PostsPerfil from "../pages/social/Perfil/PostsPerfil";

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
        path: 'atividades/:comunidade_id',
        element: <AtividadesComunidade />, 
        children: [
          { index: true, element: <AtividadesPendentes /> },
          { path: 'pendentes', element: <AtividadesPendentes /> },
          { path: 'entregues', element: <AtividadesEntregues /> },
          { path: 'corrigidas', element: <AtividadesCorrigidas /> },
        ]
      },
      {
        path: 'atividades/:comunidade_id/pendentes/:atividade_id',
        element: <DetalhesPendente />
      },
      {
        path: 'atividades/:comunidade_id/entregues/:resolucao_id',
        element: <DetalhesEntregue />
      },
      {
        path: 'atividades/:comunidade_id/corrigidas/:correcao_id',
        element: <DetalhesCorrecao />
      },
      { 
        path: '/perfil/:nickname?', 
        element: <Perfil />, 
        children: [
          { index: true, element: <MidiasPerfil /> },
          { path: 'posts', element: <PostsPerfil /> },
          { path: 'respostas', element: <RespostasPerfil /> },
          { path: 'curtidas', element: <CurtidasPerfil /> }
        ] 
      },
      { path: 'ranking', element: <Ranking /> },
      { path: '/conta', element: <Configuracoes /> },
      { path: '/comunidades', element: <Comunidades /> },
      { path: '/comunidades/:comunidade_id', element: <FeedComunidade /> },
      { path: '/:username/posts/:post_id', element: < ExpandedPost /> },
      { path: '/:username/posts/:post_id/comments/:comment_id' }
    ]
  }
]);

export default router