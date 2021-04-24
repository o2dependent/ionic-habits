import { T_IconName } from "../components/IconSwitch";

export type T_On = "Morning" | "Afternoon" | "Night";

export type T_Metric = "grams" | "milligrams" | "micrograms";

export interface I_Extra_Drug {
	dose: number;
	"stop at": number;
	metric: T_Metric;
	"reduce by": number;
}

export type T_Days = [
	"Mon" | null,
	"Tue" | null,
	"Wed" | null,
	"Thu" | null,
	"Fri" | null,
	"Sat" | null,
	"Sun" | null
];

export type T_Extra_Drug = keyof I_Extra_Drug;

export interface I_Habit {
	title: string;
	on: T_On[];
	icon: T_IconName;
	streak: number;
	repeat: T_Days;
	type?: "drug";
	desc?: string;
	extra?: I_Extra_Drug;
	id: number;
}
