import { useEffect, useState } from 'react';
import { observer } from 'mobx-react-lite';
import { useStore } from '../../store';

import Colors from '../../resources/models/Colors';
import css from './index.module.css';

const Modal: React.FC = observer(() => {
	const store = useStore();
	const currentPlayer = store.currentPlayer,
		isGameEnded = store.gameEndStatus,
		isGameStalemated = store.gameStalemateStatus;

	const [visible, setVisible] = useState(false); // modal visibility state
	const [colorOfWinner, setColorOfWinner] = useState<string>(''); // winner's color

	useEffect(() => {
		if (isGameEnded || isGameStalemated) {
			setColorOfWinner(currentPlayer?.color === Colors.WHITE ? 'чёрным' : 'белым');
			setVisible(true);
			setTimeout(() => setVisible(false), 3000);
		}
	}, [isGameEnded, isGameStalemated]);

	return (
		<div className={visible === true ? css.ModalActive : css.Modal}>
			<div className={css.ModalContent}>
				{isGameStalemated && (
					<span>
						Игра окончилась <b>ничьей</b>!
					</span>
				)}

				{isGameEnded && !isGameStalemated && (
					<span>
						Победа за <b>{`${colorOfWinner}`}</b> игроком!
					</span>
				)}

				{!isGameEnded && !isGameStalemated && <span>Новая игра уже началась!</span>}
			</div>
		</div>
	);
});

export default Modal;

// import React, { useState, useEffect } from 'react';
// import { observer } from 'mobx-react-lite';
// import { useStore } from '../../store';

// import Colors from '../../resources/models/Colors';
// import css from './index.module.css';
// import { API } from '../../../../axios';

// const Modal: React.FC = observer(() => {
//   const store = useStore();
//   const currentPlayer = store.currentPlayer;
//   const isGameEnded = store.gameEndStatus;
//   const isGameStalemated = store.gameStalemateStatus;

//   const [visible, setVisible] = useState(false);
//   const [colorOfWinner, setColorOfWinner] = useState<string>('');
//   const [winnerData, setWinnerData] = useState({});

//   useEffect(() => {
//     if (isGameEnded || isGameStalemated) {
//       setColorOfWinner(currentPlayer?.color === Colors.WHITE ? 'чёрным' : 'белым');
//       setVisible(true);
//       setTimeout(() => setVisible(false), 3000);

//       const winnerData = {
//         winnerColor: colorOfWinner,
//         gameId: store.gameId,
//         // Add any other relevant data you want to send to the API
//       };
//       setWinnerData(winnerData);

//       API.post('/games/end', winnerData)
//         .then((response) => {
//           console.log(response);
//         })
//         .catch((error) => {
//           console.error(error);
//         });
//     }
//   }, [isGameEnded, isGameStalemated]);

//   return (
//     <div className={visible ? css.ModalActive : css.Modal}>
//       <div className={css.ModalContent}>
//         {isGameStalemated && (
//           <span>
//             Игра окончилась <b>ничьей</b>!
//           </span>
//         )}

//         {isGameEnded && !isGameStalemated && (
//           <span>
//             Победа за <b>{colorOfWinner}</b> игроком!
//           </span>
//         )}

//         {!isGameEnded && !isGameStalemated && <span>Новая игра уже началась!</span>}
//       </div>
//     </div>
//   );
// });

// export default Modal;
