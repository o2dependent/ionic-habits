export type T_Repeat = "Morning" | "Afternoon" | "Night";

export type T_Icon = "sun" | "pill" | "terminal" | "bed";

export interface I_Habit {
	title: string;
	repeat: T_Repeat[];
	icon: T_Icon;
	streak: number;
	desc?: string;
}
