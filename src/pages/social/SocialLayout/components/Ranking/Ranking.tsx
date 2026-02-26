import styles from './styles.module.css'
import { useWindowHeight } from '../../../../../hooks/useWindowHeight';

interface RankingItem {
  username: string,
  points: number,
  url: string
}

const ranking: RankingItem[] = [
  {
    username: 'Ciclana',
    points: 550,
    url: '/images/avatar-default.png'
  },
  {
    username: 'Beltrano',
    points: 484,
    url: '/images/avatar-default.png'
  },
  {
    username: 'Fulano',
    points: 397,
    url: '/images/avatar-default.png'
  },
  {
    username: 'Mariana',
    points: 365,
    url: '/images/avatar-default.png'
  },
  {
    username: 'Aline',
    points: 318,
    url: '/images/avatar-default.png'
  },
  {
    username: 'Renato',
    points: 290,
    url: '/images/avatar-default.png'
  },
  {
    username: 'Bruna',
    points: 268,
    url: '/images/avatar-default.png'
  },
  {
    username: 'Thiago',
    points: 251,
    url: '/images/avatar-default.png'
  }
]

const Ranking = () => {
  const windowHeight = useWindowHeight();

  const rankingItensSize = (rankingArray: RankingItem[]) => {
    if (windowHeight <= 770) {
      return rankingArray.slice(2, 6);
    } else if (windowHeight <= 800) {
      return rankingArray.slice(3)
    } else if (windowHeight <= 880) { 
      return rankingArray.slice(2, 6);
    } else {
      return rankingArray.slice(3)
    }
  } 
  
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
          <div
            className={styles.profile_picture_t3}
            style={{ backgroundImage: `url(${ranking[1].url})` }}
          ></div>
          <div className={styles.position_t3}>2</div>
          <p className={styles.username_t3}>{ranking[2].username}</p>
          <p className={styles.points_t3}>{ranking[2].points}</p>
        </div>

        <div className={styles.top3_item}>
          <div
            className={styles.profile_picture_t3}
            style={{ backgroundImage: `url(${ranking[0].url})` }}
          ></div>
          <div className={styles.position_t3}>1</div>
          <p className={styles.username_t3}>{ranking[1].username}</p>
          <p className={styles.points_t3}>{ranking[1].points}</p>
        </div>

        <div className={styles.top3_item}>
          <div
            className={styles.profile_picture_t3}
            style={{ backgroundImage: `url(${ranking[2].url})` }}
          ></div>
          <div className={styles.position_t3}>3</div>
          <p className={styles.username_t3}>{ranking[2].username}</p>
          <p className={styles.points_t3}>{ranking[2].points}</p>
        </div>
      </div>

      <div className={styles.afterTheTop3_box}>
        {rankingItensSize(ranking).map((item, index) => (
          <div className={styles.ranking_card} key={index}>
            <div className={styles.infos}>
              <p className={styles.position}>{index + 4}</p>
              <div
                className={styles.profile_picture}
                style={{ backgroundImage: `url(${item.url})` }}
              ></div>
              <p className={styles.username}>{item.username}</p>
            </div>
            <p className={styles.points}>{item.points}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Ranking