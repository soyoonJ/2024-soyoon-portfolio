// 모델에 접근 가능한 인터페이스 제공
import type { Board } from "../Model/index";

export type Step = {
  board: Board;
  stepNumber: number;
  numOfAllSteps: number;
};

export interface Repository {
  getCurrentStep(): Promise<Step>;
  setCurrentStepNumber(stepNumber: number): Promise<void>;
  deleteStepsAfterCurrentStepNumber(): Promise<void>;
  addStep(board: Board): Promise<void>;
}
