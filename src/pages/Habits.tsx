import { IonButton, IonIcon } from "@ionic/react";
import { motion } from "framer-motion";
import { addOutline } from "ionicons/icons";
import React, { useState } from "react";
import styled from "styled-components";
import HabitCard from "../components/HabitCard";
import { AddHabitModal } from "../modals/AddHabitModal";
import { I_Habit } from "../types/habits";
import useNotification from "../context/NotificationContext";
import "./Habits.css";

interface Props {}

export const Habits: React.FC = (props: Props) => {
  // --- hooks ---
  // state
  const [isModalOpen, setIsModalOpen] = useState(false);

  // notifications
  const { setNotification, sendImediateNotification } = useNotification();

  const TEST: I_Habit = {
    id: 0,
    title: "Drug tapering",
    streak: 4,
    icon: "sun",
    on: ["Morning", "Afternoon", "Night"],
    repeat: ["Mon", null, "Wed", null, "Fri", "Sat", "Sun"],
    type: "drug",
    desc: "Taper off from kratom to have a cleaner lifestyle",
    extra: {
      dose: 4,
      "reduce by": 0.5,
      metric: "grams",
      "stop at": 0
    }
  };

  const TEST2: I_Habit = {
    id: 1,
    title: "Eat health",
    streak: 4,
    icon: "barbell",
    on: ["Morning"],
    repeat: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    desc: "Taper off from kratom to have a cleaner lifestyle"
  };

  return (
    <>
      <AddHabitModal
        onClose={() => setIsModalOpen(false)}
        isOpen={isModalOpen}
      />
      <ScrollContainer>
        <AddHabitButton onClick={() => setIsModalOpen(true)}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M8.79985 0.784256C8.79146 0.349695 8.43657 0 8 0C7.55817 0 7.2 0.358172 7.2 0.8V7.2H0.8L0.784256 7.20015C0.349695 7.20854 0 7.56343 0 8C0 8.44183 0.358172 8.8 0.8 8.8H7.2V15.2L7.20015 15.2157C7.20854 15.6503 7.56343 16 8 16C8.44183 16 8.8 15.6418 8.8 15.2V8.8H15.2L15.2157 8.79985C15.6503 8.79146 16 8.43657 16 8C16 7.55817 15.6418 7.2 15.2 7.2H8.8V0.8L8.79985 0.784256Z"
              fill="currentColor"
            />
          </svg>
          <span>Add new habit</span>
        </AddHabitButton>
        <IonButton
          onClick={() => {
            TEST.on.forEach((val) => {
              setNotification(TEST, val);
            });
          }}
        >
          Set notification for test values
        </IonButton>
        <IonButton
          onClick={() => {
            sendImediateNotification();
          }}
        >
          Send notif now!
        </IonButton>
        <HabitCard showExtra habit={TEST} />
        <HabitCard showExtra habit={TEST2} />
      </ScrollContainer>
    </>
  );
};

// --- styled components ---
const ScrollContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  height: auto;
  z-index: 10;
`;

const AddHabitButton = styled(motion.button)`
  width: 100%;
  border-radius: 1rem;
  background-color: var(--ion-color-step-200);
  color: #fafafa;
  padding: 1rem;
  box-shadow: var(--shadow);
  margin: 0 1rem;
  display: flex;
  gap: 0.5rem;
  justify-content: flex-start;
  align-items: center;
  text-align: start;
  font-size: 1rem;

  ion-icon {
    height: 1rem;
    width: 1rem;
  }
`;
