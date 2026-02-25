import { useEffect, useState } from 'react'
import styles from './styles.module.css'

type RankingItem = {
  username: string;
  points: number;
  turma: string;
  url: string;
};

const Ranking = () => {
  const [rankingArray, setRankingArray] = useState<RankingItem[]>([])

  async function gerarRankingComFotos() {
    const nomes = [
      'Ciclana', 'Beltrano', 'Fulano', 'Mariana', 'Aline', 'Renato', 'Bruna', 'Thiago',
      'Gabriel','Larissa','João Pedro','Sofia','Luana','Lucas','Pedro','Marcela',
      'Diego','Clara','Henrique','Victor','Isabela','Murilo','Patrícia','Carla',
      'Eduardo','Fernanda','André','Otávio','Paula'
    ];

    const pontos = [
      550,484,397,365,318,290,268,251,
      240,232,228,221,215,208,202,198,
      193,187,182,176,170,165,158,150,
      143,139,133,128,122
    ];

    const turmas = [
      'Médio - 1° ano A', 'Médio - 1° ano A', 'Médio - 1° ano A', 'Médio - 1° ano A',
      'Médio - 1° ano B', 'Médio - 1° ano B', 'Médio - 1° ano B', 'Médio - 1° ano B',
      'Fundamental - 3° ano A','Fundamental - 3° ano A','Fundamental - 3° ano A',
      'Fundamental - 3° ano A','Fundamental - 3° ano B','Fundamental - 3° ano B',
      'Fundamental - 3° ano B','Fundamental - 3° ano B','Fundamental - 4° ano A',
      'Fundamental - 4° ano A','Fundamental - 4° ano A','Fundamental - 4° ano A',
      'Fundamental - 5° ano A','Fundamental - 5° ano A','Fundamental - 5° ano A',
      'Fundamental - 5° ano A','Médio - 2° ano A','Médio - 2° ano A',
      'Médio - 2° ano A','Médio - 2° ano B','Médio - 3° ano A'
    ];

    const ranking = [];

    for (let i = 0; i < nomes.length; i++) {
      const fotoUrl = '/images/avatar-default.png';

      ranking.push({
        username: nomes[i],
        points: pontos[i],
        turma: turmas[i], 
        url: fotoUrl
      });
    }

    setRankingArray(ranking);
  }

  useEffect(() => {
    gerarRankingComFotos();
  }, [])

  return (
    <div className={styles.ranking_box }>
      <p className={styles.title}>Ranking</p>

      <div className={styles.tabs}>
        <button className={styles.tab_btn}>Semana</button>
        <button className={styles.tab_btn}>Mês</button>
        <button className={styles.tab_btn}>Geral</button>
      </div>

      <div className={styles.top3_box}>
        <div className={styles.top3_item}>
          <div className={styles.crown}><i className="fa-solid fa-crown"></i></div>
          <div
            className={styles.profile_picture_t3}
            style={{ backgroundImage: `url(${rankingArray[1]?.url})` }}
          ></div>
          <div className={styles.position_t3}>2</div>
          <p className={styles.username_t3}>{rankingArray[1]?.username}</p>
          <p className={styles.points_t3}>{rankingArray[1]?.points}</p>
        </div>

        <div className={styles.top3_item}>
          <div className={styles.crown}><i className="fa-solid fa-crown"></i></div>
          <div
            className={styles.profile_picture_t3}
            style={{ backgroundImage: `url(${rankingArray[0]?.url})` }}
          ></div>
          <div className={styles.position_t3}>1</div>
          <p className={styles.username_t3}>{rankingArray[0]?.username}</p>
          <p className={styles.points_t3}>{rankingArray[0]?.points}</p>
        </div>

        <div className={styles.top3_item}>
          <div className={styles.crown}><i className="fa-solid fa-crown"></i></div>
          <div
            className={styles.profile_picture_t3}
            style={{ backgroundImage: `url(${rankingArray[2]?.url})` }}
          ></div>
          <div className={styles.position_t3}>3</div>
          <p className={styles.username_t3}>{rankingArray[2]?.username}</p>
          <p className={styles.points_t3}>{rankingArray[2]?.points}</p>
        </div>
      </div>

      <div className={styles.afterTheTop3_box}>
        {rankingArray?.length > 0 && rankingArray.slice(3).map((item, index) => (
          <div className={styles.ranking_card} key={index}>
            <div className={styles.infos}>
              <p className={styles.position}>{index + 4}</p>
              <div
                className={styles.profile_picture}
                style={{ backgroundImage: `url(${item.url})` }}
              ></div>
              <p className={styles.text_infos}>{item.username} • {item.turma}</p>
            </div>
            <p className={styles.points}>{item.points}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Ranking