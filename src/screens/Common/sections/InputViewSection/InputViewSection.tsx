import React from "react";
import { Keypad } from "../../../../components/common/Keypad";

export const InputViewSection = (): JSX.Element => {
  return (
    <section className="flex-col justify-end w-full flex items-center">
      <Keypad
        submitText="확인"
        submitButtonColor="#b7ccf7"
      />
    </section>
  );
};
