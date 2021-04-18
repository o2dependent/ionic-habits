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
	IonTitle,
} from "@ionic/react";
import { sunnyOutline, terminalOutline } from "ionicons/icons";
import React, { useRef, useState } from "react";
import "./Today.css";
import { motion } from "framer-motion";
import { I_Habit } from "../types/habits";
import { Layout } from "../components/Layout";

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
		title: "Kratom tapering",
		streak: 4,
		icon: "sun",
		repeat: ["Morning", "Afternoon", "Night"],
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
		Night: [TEST],
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
		<motion.div
			className="habitcard__body"
			onClick={() => setIsExpanded(!isExpanded)}
			layout
		>
			<motion.div
				className={`habitcard__icon ${repeat.join("-").toLowerCase()}`}
			>
				<IonIcon icon={sunnyOutline} />
			</motion.div>
			<motion.div className="habitcard__text">
				<motion.p className="habitcard__title">{title}</motion.p>
				<motion.p className="habitcard__repeat">{repeat.join(" - ")}</motion.p>
			</motion.div>
			<motion.div className="habitcard__streak">
				<p>{streak}</p>
				<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128">
					<path
						fill="currentColor"
						d="M89.08323,25.03406c-4.34439-6.38475-9.15348-13.36851-9.15354-21.41481,0-.6319-1.66,1.47794-1.76705,1.61717a18.17147,18.17147,0,0,0-2.6346,5.54746c-2.41183,8.39464,1.22536,17.51131-.032,26.14186-1.03416,7.09835-6.20577,14.34345-12.95925,17.01681-8.61989,3.4122-14.787-2.23952-16.12737-10.63383-1.24752-7.81314.755-16.52853-4.5418-23.27155-.11786-.15-1.97061-2.50609-1.97061-1.799-.223,7.95145-4.3476,15.031-8.24076,21.71955-11.69774,20.09656-17.9358,49.16194-2.012,68.82976,17.95711,22.17934,53.61255,20.53073,69.83091-2.76285a47.54524,47.54524,0,0,0,8.38725-25.2615C108.828,61.25636,99.66862,40.59085,89.08323,25.03406Z"
					/>
				</svg>
			</motion.div>
		</motion.div>
	);
};

const Waves: React.FC = () => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width="100%"
		viewBox="0 0 375 179"
		fill="none"
		style={{
			position: "absolute",
			top: 0,
			left: 0,
			zIndex: 1,
		}}
	>
		<path
			d="M0 21.5L39.0508 34.4552C82.763 48.9569 129.227 53.1998 174.843 46.8552L261.743 34.7684C296.316 29.9597 331.462 31.2215 365.602 38.4971L375 40.5V178.5H0V21.5Z"
			fill="url(#paint0_linear)"
		/>
		<path
			d="M0 68.5C54.1465 26.59 127.454 19.2303 188.851 49.5402L208.079 59.0325C258.034 83.6939 315.654 87.8375 368.624 70.5777L375 68.5V178.5H0V68.5Z"
			fill="url(#paint1_linear)"
		/>
		<defs>
			<linearGradient
				id="paint0_linear"
				x1="187"
				y1="-23.5"
				x2="187"
				y2="178"
				gradientUnits="userSpaceOnUse"
			>
				<stop stop-color="#4D4D4D" />
				<stop offset="0.638122" stop-color="#2E2E2E" />
			</linearGradient>
			<linearGradient
				id="paint1_linear"
				x1="-2.33971e-06"
				y1="-165"
				x2="0.000127284"
				y2="164"
				gradientUnits="userSpaceOnUse"
			>
				<stop stop-color="#383838" />
				<stop offset="1" stop-color="#292929" />
			</linearGradient>
		</defs>
	</svg>
);
