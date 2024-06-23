import React, { useEffect, useRef, useState } from 'react';
import { observer } from 'mobx-react-lite';
import { useStore } from '../../store';

import Colors from '../../resources/models/Colors';
import Player from '../../resources/models/Player';
import Board from '../../resources/models/Board';

import BoxContainer from '../../components/BoxContainer';
import SettingsForm from '../../components/SettingsForm';
import GameBoard from '../../components/GameBoard';
import Timer from '../../components/Timer';
import Modal from '../../components/Modal';
import StatusBar from '../../components/StatusBar';
import { io } from 'socket.io-client';

const socket = io('http://localhost:3001', {
	transports: ['websocket'],
	extraHeaders: {
		'Access-Control-Allow-Origin': '*',
		'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept',
	}
});

const ChessPage: React.FC = observer(() => {
	// store
	const store = useStore();
	const currentPlayer = store.currentPlayer;

	const [board, setBoard] = useState(new Board()); // game board state

	// players states
	const [whitePlayer, setWhitePlayer] = useState(new Player(Colors.WHITE));
	const [blackPlayer, setBlackPlayer] = useState(new Player(Colors.BLACK));

	const currentPlayerBadge = useRef<HTMLSpanElement | null>(null);

	useEffect(() => {
		restart();
	}, []);

	function restart() {
		const newBoard = new Board();
		newBoard.initCells();
		newBoard.addFigures();
		setBoard(newBoard);
		store.setCurrentPlayer(whitePlayer);
		store.restartGame();
		currentPlayerBadge?.current?.classList.remove('flipped');
	}

	function swapPlayer() {
		let move = store.moves[store.moves.length - 1]
		socket.emit("move", move)
		store.setCurrentPlayer(currentPlayer?.color === Colors.WHITE ? blackPlayer : whitePlayer);
	}

	return (
		<main>
			<div className='settings'>
				<SettingsForm restart={restart} />
				<Timer restart={restart} />
				<StatusBar currentPlayerBadge={currentPlayerBadge} />
			</div>
			<div className='board'>
				<GameBoard board={board} setBoard={setBoard} swapPlayer={swapPlayer} />
			</div>
			<div className='info'>
				<div>
					<h3>Побеждённые фигуры</h3>
					<div className='lost-figures'>
						<BoxContainer title={'Чёрные'} figures={board.lostBlackFigures} />
						<BoxContainer title={'Белые'} figures={board.lostWhiteFigures} />
					</div>
				</div>

				<div className='Moves'>
					<table className='Moves_Table'>
						<thead>
							<tr>
								<th>№</th>
								<th>Фигура</th>
							</tr>
						</thead>
						<tbody>
							{store.moves.map((move, index) => (
								<tr key={index}>
									<td>{index + 1}</td>
									<td>{move}</td>
								</tr>
							))}
						</tbody>
					</table>
				</div>
				<Modal />
			</div>
		</main>
	);
});

export default ChessPage;
