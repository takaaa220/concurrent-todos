import React, { FC, useCallback, ChangeEvent, useState, FormEvent } from "react";

type Props = {
  onSubmit: (value: string) => void;
};
export const AddTodo: FC<Props> = ({ onSubmit }) => {
  const [value, setValue] = useState("");

  const handleChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      setValue(e.target.value);
    },
    [setValue],
  );

  const handleSubmit = useCallback(
    async (e: FormEvent) => {
      e.preventDefault();

      await onSubmit(value);
      setValue("");
    },
    [value, onSubmit],
  );

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input type="text" value={value} onChange={handleChange} />
      </form>
    </>
  );
};
