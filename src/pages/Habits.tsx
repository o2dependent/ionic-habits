import { IonIcon } from "@ionic/react";
import { motion } from "framer-motion";
import { sunnyOutline } from "ionicons/icons";
import React, { useState } from "react";
import styled from "styled-components";
import { I_Habit, T_Repeat } from "../types/habits";
import "./Habits.css";

interface Props {}

export const Habits: React.FC = (props: Props) => {
	const TEST: I_Habit = {
		title: "Kratom tapering",
		streak: 4,
		icon: "sun",
		repeat: ["Morning", "Afternoon", "Night"],
	};

	return (
		<>
			<ScrollContainer>
				<HabitCard habit={TEST} />
			</ScrollContainer>
		</>
	);
};

interface HabitCardProps {
	habit: I_Habit;
}

const HabitCard: React.FC<HabitCardProps> = ({
	habit: { title, streak, icon, repeat },
}) => {
	// --- hooks ---
	// state
	const [isExpanded, setIsExpanded] = useState(false);

	return (
		<HabitBody onClick={() => setIsExpanded(!isExpanded)}>
			<TopContainer>
				<IconContainer repeat={repeat}>
					<IonIcon icon={sunnyOutline} />
				</IconContainer>
				<TopText>
					<motion.p>{title}</motion.p>
					<motion.p>{repeat.join(" - ")}</motion.p>
				</TopText>
				<StreakContainer>
					<p>{streak}</p>
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128">
						<path
							fill="currentColor"
							d="M89.08323,25.03406c-4.34439-6.38475-9.15348-13.36851-9.15354-21.41481,0-.6319-1.66,1.47794-1.76705,1.61717a18.17147,18.17147,0,0,0-2.6346,5.54746c-2.41183,8.39464,1.22536,17.51131-.032,26.14186-1.03416,7.09835-6.20577,14.34345-12.95925,17.01681-8.61989,3.4122-14.787-2.23952-16.12737-10.63383-1.24752-7.81314.755-16.52853-4.5418-23.27155-.11786-.15-1.97061-2.50609-1.97061-1.799-.223,7.95145-4.3476,15.031-8.24076,21.71955-11.69774,20.09656-17.9358,49.16194-2.012,68.82976,17.95711,22.17934,53.61255,20.53073,69.83091-2.76285a47.54524,47.54524,0,0,0,8.38725-25.2615C108.828,61.25636,99.66862,40.59085,89.08323,25.03406Z"
						/>
					</svg>
				</StreakContainer>
			</TopContainer>
			<InfoContainer>
				<Info></Info>
				<Actions></Actions>
			</InfoContainer>
		</HabitBody>
	);
};

// --- styled components ---
const ScrollContainer = styled.div`
	width: 100%;
	height: auto;
	z-index: 10;
`;

const HabitBody = styled.div`
	border-radius: 1rem;
	background-color: var(--ion-color-step-200);
	padding: 1rem;
	box-shadow: var(--shadow);
	margin: 0 1rem;
	display: flex;
	flex-direction: column;
	gap: 0.75rem;
	justify-content: center;
	align-items: flex-start;
	text-align: start;
`;

const TopContainer = styled.div`
	display: flex;
	gap: 1rem;
	justify-content: center;
	align-items: flex-start;
	width: 100%;

	* {
		margin: 0;
	}
`;

const IconContainer = styled.div<{ repeat: T_Repeat[] }>`
	color: ${(p) =>
		p?.repeat ? `var(--color-${p.repeat.join("-").toLowerCase()})` : "#fafafa"};
	height: 2rem;
	width: 2rem;

	ion-icon {
		height: 2rem;
		width: 2rem;
	}
`;

const TopText = styled.div`
	flex-grow: 1;
`;

const StreakContainer = styled.div`
	width: 2rem;
	height: 2rem;
	display: flex;
	justify-content: center;
	align-items: center;
	gap: 0.25rem;
	color: var(--color-fire);
`;

const InfoContainer = styled.div``;

const Info = styled.div``;

const Actions = styled.div``;
