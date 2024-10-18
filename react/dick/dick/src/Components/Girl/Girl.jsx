import styles from './style.module.css';
import { useNavigate } from 'react-router-dom';

const Girl = () => {
	const navigate = useNavigate();
	return (
		<>
			<div className={styles.wrapper}>
				<div className={styles.girl}>
					<img src='girl.png' alt='Girl' />
				</div>
				<div className={styles.title}>
					are you serious?
					<br />
					<span className={styles.span1}>this is a game</span> <br />
					<span className={styles.span2}>for real men</span> <br />
					<button
						className={styles.button}
						onClick={() => navigate('/')}
					>
						Change Gender
					</button>
				</div>
			</div>
		</>
	);
};

export default Girl;
