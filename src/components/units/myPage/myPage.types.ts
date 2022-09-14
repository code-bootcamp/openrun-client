import { MouseEventHandler, RefObject } from "react";
import {
  FieldValues,
  FormState,
  SubmitHandler,
  UseFormHandleSubmit,
  UseFormRegister,
} from "react-hook-form";
import {
  IBoard,
  IPaymentHistory,
} from "../../../commons/types/generated/types";

export interface IEditAccountProps {
  register: UseFormRegister<FieldValues>;
  handleSubmit: UseFormHandleSubmit<FieldValues>;
  formState: FormState<FieldValues>;
  onClickEdit: SubmitHandler<FieldValues>;
  onClickCancel: () => void;
  fileUrls: string[];
  onChangeFileUrls: (arg0: string) => void;
}

export interface IDealListProps {
  onFetchMore: () => void;
  onClickCompleteModal: () => void;
  onClickTop: () => void;
  scrollRef: RefObject<HTMLDivElement>;
  data?: IPaymentHistory[];
}

export interface IWrittenBoardsProps {
  onFetchMore: () => void;
  onClickMoveToDetail: (arg: string) => MouseEventHandler<HTMLDivElement>;
  onClickTop: () => void;
  scrollRef: RefObject<HTMLDivElement>;
  data?: IBoard[];
}