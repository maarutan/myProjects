import styles from '../Choose/Choose.module.css';

const Headers = () => {
	return (
		<header className={styles.header}>
			<div className={styles.logo}>Rock vs Paper vs Scissors</div>
			<div className={styles.results}>
				<p className={styles.win}>
					Wins: <span className={styles.result}>0</span>{' '}
				</p>
				<p className={styles.lose}>
					Loses: <span className={styles.result}>0</span>
				</p>
			</div>
		</header>
	);
};

export default Headers;
