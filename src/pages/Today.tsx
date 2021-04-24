import {
  IonButton,
  IonCard,
  IonCardContent,
  IonCardTitle,
  IonContent,
  IonHeader,
  IonIcon,
  IonPage,
  IonSlide,
  IonSlides,
  IonTitle
} from "@ionic/react";
import { sunnyOutline, terminalOutline } from "ionicons/icons";
import React, { useRef, useState } from "react";
import "./Today.css";
import { motion } from "framer-motion";
import { I_Habit } from "../types/habits";
import { Layout } from "../components/Layout";
import HabitCard from "../components/HabitCard";

interface TodayProps {}

export const Today: React.FC = (props: TodayProps) => {
  // --- hooks ---
  const [contentSwiper, setContentSwiper] = useState<any>(null);
  const [headerSwiper, setHeaderSwiper] = useState<any>(null);

  // --- functions ---
  const handleHeaderClick = async (idx: number) => {
    await contentSwiper.slideTo(idx);
    await headerSwiper.slideTo(idx);
  };

  const TEST: I_Habit = {
    id: 1,
    title: "Drug tapering",
    streak: 4,
    icon: "sun",
    on: ["Morning", "Afternoon", "Night"],
    repeat: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]
  };

  const sortedHabits: {
    "All Day": I_Habit[];
    Morning: I_Habit[];
    Afternoon: I_Habit[];
    Night: I_Habit[];
  } = {
    "All Day": [TEST],
    Morning: [TEST],
    Afternoon: [TEST],
    Night: [TEST]
  };

  return (
    <>
      <IonSlides
        onIonSlidesDidLoad={async function (this: any) {
          setHeaderSwiper(await this.getSwiper());
        }}
        onIonSlideWillChange={async () =>
          await contentSwiper.slideTo(await headerSwiper.activeIndex)
        }
        id="headerslide__container"
        options={{ slidesPerView: 3 }}
        style={{ width: "100vw" }}
      >
        <IonSlide style={{ width: "100vw", height: "100%" }}></IonSlide>
        {Object.keys(sortedHabits).map((title, idx) => (
          <IonSlide style={{ width: "100vw", height: "100%" }}>
            <h1
              className="headerslide__title"
              onClick={() => handleHeaderClick(idx)}
            >
              {title}
            </h1>
          </IonSlide>
        ))}

        <IonSlide style={{ width: "100vw", height: "100%" }}></IonSlide>
      </IonSlides>
      <IonSlides
        onIonSlidesDidLoad={async function (this: any) {
          setContentSwiper(await this.getSwiper());
        }}
        onIonSlideWillChange={async () =>
          await headerSwiper.slideTo(await contentSwiper.activeIndex)
        }
        id="contentslide__container"
        style={{ width: "100vw", flexGrow: 1, paddingTop: "2rem" }}
        options={{ initalSlide: 1 }}
      >
        {Object.keys(sortedHabits).map((title) => (
          <IonSlide style={{ width: "100vw", height: "100%" }}>
            {/* @ts-ignore */}
            {sortedHabits[title].map((habit) => (
              <HabitCard habit={habit} />
            ))}
          </IonSlide>
        ))}
      </IonSlides>
    </>
  );
};
