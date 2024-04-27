// 문제와 관련된 실제 세계의 Object
export type Square = null | "X" | "O";

export type Board = Square[];

type HistoryStep = {
  board: Board;
};

export type History = HistoryStep[];
