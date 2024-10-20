// main.js

function getComputerChoice() {
	const choices = ['камень', 'ножницы', 'бумага'];
	const randomIndex = Math.floor(Math.random() * choices.length);
	return choices[randomIndex];
}

function determineWinner(playerChoice, computerChoice) {
	if (playerChoice === computerChoice) {
		return 'Ничья!';
	}

	if (
		(playerChoice === 'камень' && computerChoice === 'ножницы') ||
		(playerChoice === 'ножницы' && computerChoice === 'бумага') ||
		(playerChoice === 'бумага' && computerChoice === 'камень')
	) {
		return 'Вы выиграли!';
	} else {
		return 'Компьютер выиграл!';
	}
}

function playGame() {
	const playerChoice = prompt(
		'Введите ваш выбор (камень, ножницы, бумага):'
	).toLowerCase();
	const computerChoice = getComputerChoice();
	alert(`Компьютер выбрал: ${computerChoice}`);
	const result = determineWinner(playerChoice, computerChoice);
	alert(result);
}

playGame();
