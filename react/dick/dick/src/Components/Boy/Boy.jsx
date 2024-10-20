import styles from './style.module.css';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

const Boy = () => {
	const [name, setName] = useState('');
	const navigate = useNavigate();

	const handleKeyDown = event => {
		if (event.key === 'Enter') {
			if (name === '') {
				alert('Please enter your name');
			} else {
				navigate(`/boySize?name=${encodeURIComponent(name)}`); // Передаем имя
			}
		}
	};

	return (
		<>
			<div className={styles.wrapper}>
				<div className={styles.boy}>
					<img src='boy.png' alt='Boy' />
				</div>
				<div className={styles.title}>
					<label htmlFor='name'>
						<p>
							<span className={styles.span}>name:</span> <br />
							<input
								className={styles.input}
								type='text'
								id='name'
								value={name}
								onChange={e => setName(e.target.value)}
								onKeyDown={handleKeyDown}
							/>
						</p>
					</label>
					<button
						className={styles.button}
						onClick={() => {
							if (name === '') {
								alert('Please enter your name');
							} else {
								navigate(
									`/boySize?name=${encodeURIComponent(name)}`
								);
							}
						}}
					>
						Go
					</button>
				</div>
			</div>
		</>
	);
};

export default Boy;
