import { useNavigate } from 'react-router-dom';
import styles from './style.module.css';

const Cards = () => {
	const navigate = useNavigate();

	return (
		<>
			<h1 className={styles.title}>Your gender ???</h1>
			<div className={styles.wrapper}>
				<div className={styles.card} onClick={() => navigate('/boy')}>
					<img src='boy.png' alt='Boy' />
				</div>
				<div className={styles.card} onClick={() => navigate('/girl')}>
					<img src='girl.png' alt='Girl' />
				</div>
			</div>
		</>
	);
};

export default Cards;
