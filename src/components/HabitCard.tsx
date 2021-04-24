import { IonIcon } from "@ionic/react";
import { motion } from "framer-motion";
import { sunnyOutline } from "ionicons/icons";
import React, { useState } from "react";
import styled from "styled-components";
import { I_Habit, T_On } from "../types/habits";
import { IconSwitch } from "./IconSwitch";

interface HabitCardProps {
	habit: I_Habit;
	showExtra?: boolean;
}

const HabitCard: React.FC<HabitCardProps> = ({
	habit: { title, streak, icon, repeat, extra, on, type, desc },
	showExtra,
}) => {
	// --- hooks ---
	// state
	const [isExpanded, setIsExpanded] = useState(false);

	// --- functions ---
	const makeDateRange = () => {
		let dateRange = "";
		let start: null | string = null;
		let prev: null | string = null;

		repeat.forEach((day, idx) => {
			// TODO : fix this absolute garbage. Why do it like this?
			if (start === null && day !== null) {
				start = day;
				prev = day;
				return;
			}

			if (day == null) {
				dateRange +=
					(dateRange.length > 0 ? " " : "") +
					start +
					(start === prev ? "" : "-" + prev);
				start = null;
				prev = null;
				return;
			}

			if (idx === repeat.length - 1) {
				dateRange +=
					(dateRange.length > 0 ? " " : "") +
					start +
					(start === day ? "" : "-" + day);
			}

			prev = day;
		});
		return dateRange;
	};

	return (
		<HabitBody onClick={() => setIsExpanded(!isExpanded)}>
			<TopContainer>
				<IconContainer on={on}>
					<IconSwitch iconName={icon} />
				</IconContainer>
				<TopText>
					<Title>{title}</Title>
					<RepeatText>{on.join(" - ")}</RepeatText>
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
			{showExtra && (
				<ExtraContainer>
					<InfoContainer>
						<Desc>{desc}</Desc>
						<ExtraInfo
							initial={{ height: "0px" }}
							animate={{ height: isExpanded ? "auto" : "0px" }}
						>
							<Info>
								<Key>Repeat</Key>
								<Value>{makeDateRange()}</Value>
							</Info>
							{extra &&
								Object.keys(extra).map((key) => (
									<Info>
										<Key>{key}</Key>
										{/* @ts-ignore */}
										<Value>{extra[key]}</Value>
									</Info>
								))}
						</ExtraInfo>
					</InfoContainer>
					<Actions>
						<StreakButton whileTap={{ scale: 0.85 }}>
							<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128">
								<path
									fill="currentColor"
									d="M89.08323,25.03406c-4.34439-6.38475-9.15348-13.36851-9.15354-21.41481,0-.6319-1.66,1.47794-1.76705,1.61717a18.17147,18.17147,0,0,0-2.6346,5.54746c-2.41183,8.39464,1.22536,17.51131-.032,26.14186-1.03416,7.09835-6.20577,14.34345-12.95925,17.01681-8.61989,3.4122-14.787-2.23952-16.12737-10.63383-1.24752-7.81314.755-16.52853-4.5418-23.27155-.11786-.15-1.97061-2.50609-1.97061-1.799-.223,7.95145-4.3476,15.031-8.24076,21.71955-11.69774,20.09656-17.9358,49.16194-2.012,68.82976,17.95711,22.17934,53.61255,20.53073,69.83091-2.76285a47.54524,47.54524,0,0,0,8.38725-25.2615C108.828,61.25636,99.66862,40.59085,89.08323,25.03406Z"
								/>
							</svg>
						</StreakButton>
					</Actions>
				</ExtraContainer>
			)}
		</HabitBody>
	);
};

export default HabitCard;

// --- styled components ---
const HabitBody = styled.div`
	width: 100%;
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
	justify-content: space-around;
	align-items: center;
	width: 100%;

	* {
		margin: 0;
	}
`;

const IconContainer = styled.div<{ on: T_On[] }>`
	font-size: 0.875rem;
	color: ${(p) =>
		p?.on ? `var(--color-${p.on.join("-").toLowerCase()})` : "#fafafa"};
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

const Title = styled.h5``;

const RepeatText = styled.p`
	font-size: 0.875rem;
	margin: 0;
	color: var(--ion-color-step-700);
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

const ExtraContainer = styled.div`
	width: 100%;
	display: flex;
`;

const ExtraInfo = styled(motion.div)`
	overflow: hidden;
	display: flex;
	flex-direction: column;
	gap: 0.25rem;
`;

const InfoContainer = styled.div`
	flex-grow: 1;
	display: flex;
	flex-direction: column;
	gap: 0.25rem;

	p {
		text-overflow: ellipsis;
		overflow: hidden;
		white-space: nowrap;
	}
`;

const Desc = styled.p`
	margin: 0;
	font-size: 0.825rem;
	height: 2.25rem;
	line-height: calc(100% + 0.25rem);
	&& {
		white-space: normal;
	}
`;

const Info = styled.div`
	display: grid;
	grid-template-columns: 5rem 1fr;
	gap: 0.25rem;
	font-size: 0.825rem;
	text-transform: capitalize;

	* {
		margin: 0;
	}
`;

const Key = styled.p`
	opacity: 0.5;
`;

const Value = styled.p``;

const Actions = styled.div`
	display: flex;
	align-items: flex-end;
`;

const StreakButton = styled(motion.button)`
	width: 2.25rem;
	height: 2.25rem;
	color: var(--color-fire);
	background-color: transparent;
	border: 2px solid var(--color-fire);
	border-radius: 0.5rem;
`;
