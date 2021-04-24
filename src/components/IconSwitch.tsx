import { IonIcon } from "@ionic/react";
import {
	barbellOutline,
	bedOutline,
	callOutline,
	helpOutline,
	sunnyOutline,
	terminalOutline,
} from "ionicons/icons";
import React, { useEffect, useState } from "react";

export type T_IconName =
	| "sun"
	| "pill"
	| "terminal"
	| "bed"
	| "barbell"
	| "phone";

interface Props {
	iconName: T_IconName;
}

export const IconSwitch: React.FC<Props> = ({ iconName }) => {
	// --- hooks --
	const [icon, setIcon] = useState(<div />);

	useEffect(() => {
		let newIcon: JSX.Element;
		switch (iconName) {
			case "barbell":
				newIcon = <IonIcon icon={barbellOutline} />;
				break;
			case "bed":
				newIcon = <IonIcon icon={bedOutline} />;
				break;
			case "phone":
				newIcon = <IonIcon icon={callOutline} />;
				break;
			case "pill":
				newIcon = (
					<svg
						xmlns="http://www.w3.org/2000/svg"
						version="1.1"
						x="0px"
						y="0px"
						viewBox="0 0 92 92"
						enable-background="new 0 0 92 92"
					>
						<path
							id="XMLID_2257_"
							d="M83.1,8.9C78.7,4.4,72.8,2,66.5,2S54.4,4.4,49.9,8.9L8.9,49.9C4.4,54.4,2,60.3,2,66.5s2.4,12.2,6.9,16.6  c4.4,4.4,10.3,6.9,16.6,6.9s12.2-2.4,16.6-6.9l41.1-41.1c4.4-4.4,6.9-10.3,6.9-16.6S87.6,13.3,83.1,8.9z M36.4,77.5  c-2.9,2.9-6.8,4.5-10.9,4.5s-8-1.6-10.9-4.5c-2.9-2.9-4.5-6.8-4.5-10.9s1.6-8,4.5-10.9l16.7-16.7c4.6,3,15.9,11.1,21.9,21.8  L36.4,77.5z M77.5,36.4L58.3,55.6c-6.4-10.3-16.6-18.1-22-21.8l19.3-19.3c2.9-2.9,6.8-4.5,10.9-4.5s8,1.6,10.9,4.5l0,0  c2.9,2.9,4.5,6.8,4.5,10.9S80.4,33.5,77.5,36.4z M57.5,24.7c1.4,1.4,1.4,3.6,0,5l-4.8,4.8c-0.7,0.7-1.6,1-2.5,1s-1.8-0.3-2.5-1  c-1.4-1.4-1.4-3.6,0-5l4.8-4.8C53.9,23.3,56.1,23.3,57.5,24.7z M65.5,16.6c0.7,0.7,1.2,1.8,1.2,2.8c0,1-0.4,2.1-1.2,2.8  c-0.7,0.7-1.8,1.2-2.8,1.2c-1.1,0-2.1-0.4-2.8-1.2c-0.7-0.8-1.2-1.8-1.2-2.8c0-1.1,0.4-2.1,1.2-2.8c0.8-0.8,1.8-1.2,2.8-1.2  C63.8,15.4,64.8,15.9,65.5,16.6z"
						/>
					</svg>
				);
				break;
			case "sun":
				newIcon = <IonIcon icon={sunnyOutline} />;
				break;
			case "terminal":
				newIcon = <IonIcon icon={terminalOutline} />;
				break;
			default:
				newIcon = <IonIcon icon={helpOutline} />;
		}
		setIcon(newIcon);
	}, [iconName]);

	return icon;
};