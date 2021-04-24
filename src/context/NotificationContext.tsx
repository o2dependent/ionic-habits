import React, { createContext, useContext, useState, useEffect } from "react";
import { isPlatform } from "@ionic/react";
import {
  Capacitor,
  FilesystemDirectory,
  FilesystemEncoding,
  LocalNotification,
  Plugins,
  Toast
} from "@capacitor/core";
import { I_Habit, T_On } from "../types/habits";
const { LocalNotifications } = Plugins;

// TODO : Add times settings or refactor later
const times = {
  Morning: {
    hour: 8
  },
  Afternoon: {
    hour: 14
  },
  Night: {
    hour: 16
  }
};

// --- ts types ---
interface NotificationContextValues {
  setNotification: (habit: I_Habit, onTime: T_On) => Promise<void>;
  clearNotifications: () => Promise<void>;
  sendImediateNotification: () => Promise<void>;
}

const NotificationContext = createContext({} as NotificationContextValues);

// use photo context
export default function useNotification() {
  return useContext(NotificationContext);
}

// habit
const HABIT_STORAGE = "habit";

export const NotificationContextProvider: React.FC = ({ children }) => {
  // --- plugins ---

  // --- hooks ---
  // > state

  // > use effect
  // request permisions
  useEffect(() => {
    const req = async () => {
      await LocalNotifications.requestPermission();
    };
    req();
  }, []);

  // --- functions ---

  const setNotification = async (habit: I_Habit, onTime: T_On) => {
    const { on, type, repeat, title, extra } = habit;

    // * set up drug timer to display dose on each notification
    if (extra && type === "drug") {
      const { dose, metric } = extra;

      const newNotification = {
        title,
        body: `Keep your ${title} habit going!\nTake your dose of ${dose} ${metric}${
          dose > 1 && "s"
        } to stay on track.`,
        id: habit.id,
        schedule: {
          on: times[onTime]
        },
        extra: {
          habit,
          onTime
        }
      };

      await LocalNotifications.schedule({
        notifications: [newNotification]
      });

      return;
    }

    // * set up normal notification and set up daily reminder
    await LocalNotifications.schedule({
      notifications: [
        {
          title,
          body: `Friendly reminder: ${title}`,
          id: habit.id,
          schedule: {
            on: times[onTime],
            repeats: true,
            every: "day" // TODO set up day schedules
          },
          extra: {
            habit,
            onTime
          }
        }
      ]
    });
  };

  const clearNotifications = async () => {
    const pending = await LocalNotifications.getPending();
    console.log(pending);
    await LocalNotifications.cancel(pending);
  };

  LocalNotifications.addListener(
    "localNotificationReceived",
    (notification: LocalNotification) => {
      const {
        extra: { habitName, time }
      } = notification;
      if (time === "night") {
      }
      setNotification(habitName, time);
    }
  );

  const sendImediateNotification = async () => {
    LocalNotifications.schedule({
      notifications: [
        {
          title: "Testr title",
          body: `Heya this is a test notification`,
          id: 1000,
          schedule: { at: new Date(Date.now() + 1000 * 5) }
        }
      ]
    });
  };

  // value
  const value: NotificationContextValues = {
    setNotification,
    clearNotifications,
    sendImediateNotification
  };

  return (
    <NotificationContext.Provider value={value}>
      {children}
    </NotificationContext.Provider>
  );
};
