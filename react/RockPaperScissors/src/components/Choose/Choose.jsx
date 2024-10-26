import styles from './Choose.module.css';
import cls from 'classnames';
import { useNavigate } from 'react-router-dom';
import Headers from '../Headers/Headers';

const Choose = () => {
	const navigate = useNavigate();
	return (
		<>
			<div>
				<Headers />
				<div className={styles.ChooseGame}>
					<h1 className={styles.title}>Pick one</h1>
					<div className={styles.cards}>
						<div
							className={cls(styles.card, styles.UnicCard)}
							onClick={() => navigate('/rock')}
						>
							<img src='rockLeft.png' alt='rock' />
							<span className={styles.text}>rock</span>
						</div>

						<div
							className={styles.card}
							onClick={() => navigate('/scissors')}
						>
							<img src='scissorsLeft.png' alt='scissors' />
							<span className={cls(styles.text, styles.newCard)}>
								scissors
							</span>
						</div>

						<div
							className={styles.card}
							onClick={() => navigate('/paper')}
						>
							<img src='paperLeft.png' alt='paper' />
							<span className={styles.text}>paper</span>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Choose;
