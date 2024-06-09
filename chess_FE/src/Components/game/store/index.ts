import React from 'react';
import StoreContext from '../context';
import { makeAutoObservable, toJS } from 'mobx';

import Player from '../resources/models/Player';
import Cell from '../resources/models/Cell';

export default class chessStore {
  private _currentPlayer: Player | null;
  private _gameTime: number | null;
  private _isAiEnabled: boolean;
  private _isGameEnded: boolean;
  private _isGameStarted: boolean;
  private _isStalemated: boolean;
  private _moves: string[] = [];

  get aiStatus(): boolean {
    return this._isAiEnabled;
  }

  get currentPlayer(): Player | null {
    return this._currentPlayer;
  }

  get gameEndStatus(): boolean {
    return this._isGameEnded;
  }

  get gameStalemateStatus(): boolean {
    return this._isStalemated;
  }

  get moves(): string[] {
    return this._moves;
  }
  
  constructor() {
    this._gameTime = null;
    this._currentPlayer = null;

    this._isGameStarted = false;
    this._isGameEnded = false;
    this._isStalemated = false;

    this._isAiEnabled = false;

    makeAutoObservable(this);
  }

  // ACTIONS
  setGameTime(time: number | null) {
    this._gameTime = time;
  }

  setGameEnd() {
    this._isGameEnded = true;
  }

  setGameStalemate() {
    this._isStalemated = true;
  }

  restartGame() {
    this._isGameStarted = false;
    this._isGameEnded = false;
    this._isStalemated = false;
    this._moves = [];
  }

  startGame() {
    this._isGameStarted = true;
  }

  setCurrentPlayer(player: Player) {
    this._currentPlayer = player;
  }

  switchAiStatus(newStatus: boolean) {
    this._isAiEnabled = newStatus;
  }

  addMove(from: Cell, to: Cell) {
	const pieceType = to.figure ? to.figure.constructor.name.charAt(0) : '';
	const toFile = String.fromCharCode(97 + to.x);
	const toRank = 8 - to.y;
	const formattedMove = `${pieceType}-${toFile}${toRank}`;
	this._moves.push(formattedMove);
  }
  

  // GETTERS
  get gameStartStatus(): boolean {
    return this._isGameStarted;
  }

  get gameTime(): number | null {
    return this._gameTime;
  }
}

export const useStore = () => React.useContext(StoreContext);
