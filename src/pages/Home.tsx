import {
	IonCard,
	IonCardContent,
	IonCardTitle,
	IonContent,
	IonHeader,
	IonIcon,
	IonPage,
} from '@ionic/react';
import { terminalOutline } from 'ionicons/icons';
import React, { useState } from 'react';
import './Home.css';
import { AnimatePresence, AnimateSharedLayout, motion } from 'framer-motion';

interface HomeProps {}

export const Home: React.FC = (props: HomeProps) => {
	return (
		<IonPage>
			<IonContent fullscreen>
				<AnimateSharedLayout>
					<HabitCard title='Kratom tapering' streak={4} icon='placeholder' />
				</AnimateSharedLayout>
			</IonContent>
		</IonPage>
	);
};

interface HabitCardProps {
	title: string;
	streak: number;
	icon: string;
}

const HabitCard: React.FC<HabitCardProps> = ({ title, streak, icon }) => {
	// --- hooks ---
	// state
	const [isExpanded, setIsExpanded] = useState(false);

	return (
		<motion.div
			className='habitcard_body'
			onClick={() => setIsExpanded(!isExpanded)}
			layout
		>
			<motion.h5>{title}</motion.h5>
			<AnimatePresence>
				{isExpanded && <motion.h5>Just expanded content</motion.h5>}
			</AnimatePresence>
		</motion.div>
	);
};
