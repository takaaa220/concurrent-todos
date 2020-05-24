import React, { FC, useCallback, ChangeEvent, useState, FormEvent } from "react";
import { Loader } from "../Loader";

type Props = {
  onSubmit: (value: string) => void;
  adding: boolean;
};
export const AddTodo: FC<Props> = ({ onSubmit, adding }) => {
  const [value, setValue] = useState("");

  const handleChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      if (adding) return;

      setValue(e.target.value);
    },
    [setValue, adding],
  );

  const handleSubmit = useCallback(
    async (e: FormEvent) => {
      e.preventDefault();

      if (adding) return;

      await onSubmit(value);
      setValue("");
    },
    [value, onSubmit, adding],
  );

  return (
    <>
      <form onSubmit={handleSubmit}>
        {adding && <Loader text="Adding..." />}
        <input type="text" value={value} onChange={handleChange} disabled={adding} />
      </form>
    </>
  );
};
