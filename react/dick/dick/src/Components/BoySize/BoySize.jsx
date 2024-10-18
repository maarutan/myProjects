import { useLocation } from 'react-router-dom';
import styles from './style.module.css';

const BoySize = () => {
	const location = useLocation();
	const queryParams = new URLSearchParams(location.search);
	const name = queryParams.get('name'); // Извлекаем имя из параметров URL

	const size = Math.floor(Math.random() * 20) + 1; // Случайный размер от 1 до 20

	let lol;
	if (size < 5) {
		lol = 'ahahahahaha';
	} else if (size > 15) {
		lol = 'you are a big Nerg';
	} else if (size < 8) {
		lol = 'ahahaah';
	} else {
		lol = 'norm';
	}

	// Определяем высоту в зависимости от значения size
	let height;
	if (size <= 5) {
		height = '300px'; // Если размер меньше 5, высота 130px
	} else {
		height = `${size * 50}px`; // Иначе высота зависит от size
	}

	const trunkStyle = {
		height: height, // Присваиваем высоту
	};

	return (
		<>
			<div className={styles.wrapper}>
				<div className={styles.container}>
					<p>
						Name: {name} <br />
						Size: {size} sm <br />
						Your dick is: {size} sm {lol} <br />
					</p>
					<button
						className={styles.button}
						onClick={() => window.location.reload()}
					>
						reload
					</button>
				</div>
				<div className={styles.dick}>
					<div className={styles.eggs}></div>
					<div className={styles.trunk} style={trunkStyle}>
						<div className={styles.headerTrunk}></div>
					</div>
					<div className={styles.eggs}></div>
				</div>
			</div>
		</>
	);
};

export default BoySize;
