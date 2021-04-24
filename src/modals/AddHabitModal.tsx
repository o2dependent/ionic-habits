import { IonButton, IonInput, IonLabel, IonModal } from "@ionic/react";
import React, { useState } from "react";
import styled from "styled-components";
import { I_Habit } from "../types/habits";

interface Props {
  isOpen: boolean;
  onClose: () => any;
}

export const AddHabitModal: React.FC<Props> = ({ isOpen, onClose }) => {
  // --- hooks ---
  // state
  const [title, setTitle] = useState("");

  // --- functions ---
  const onSubmit = () => {
    const habit: I_Habit = {
      icon,
      id,
      on,
      repeat,
      streak: 0,
      title,
      desc,
      type,
      extra
    };
  };

  return (
    <Modal onDidDismiss={onClose} isOpen={isOpen}>
      <Label>
        Title
        <Input value={title} onIonChange={(e) => setTitle(e.detail.value!)} />
      </Label>
      <AddButton onClick={() => console.log(title)}>Buttin</AddButton>
    </Modal>
  );
};

// --- styled components ---
const Modal = styled(IonModal)`
  --background: var(--ion-color-step-100);
  --backdrop-opacity: 0.5;
  --border-color: none;
  --border-radius: 1rem;
  --border-style: none;
  --border-width: 0;
  --height: 100%;
  --max-height: calc(100% - 6rem);
  --max-width: calc(100% - 2rem);
  --width: 100%;

  .ion-page {
    padding: 1rem;
  }
`;

const AddButton = styled(IonButton)`
  --color: var(--ion-color-primary);
  --border-radius: 1rem;
  --border-style: solid;
  --border-color: var(--ion-color-primary);
  --background: transparent;
  --box-shadow: none;
  height: 2.5rem;
  font-size: 1.125rem;
  text-transform: none;
`;

const Label = styled(IonLabel)`
  font-size: 1.25rem;
`;

const Input = styled(IonInput)`
  flex-grow: 0;
  --padding-top: 0.5rem;
  --padding-bottom: 0.5rem;
  --padding-end: 0;
  --padding-start: 0;
  --border-radius: 0;
  border-bottom: 2px solid var(--ion-color-step-200);
  transition: border 300ms ease;
  font-size: 1rem;

  &.has-focus {
    border-bottom-color: var(--ion-color-step-900);
    border-bottom-width: 3px;
  }
`;
