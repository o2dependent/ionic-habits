import { IonContent, IonPage } from "@ionic/react";
import React from "react";

interface Props {
	computedMatch?: any;
}

export const Layout: React.FC<Props> = ({ computedMatch, children }) => {
	const title = computedMatch?.path?.split("/")[1];

	return (
		<IonPage>
			<IonContent fullscreen>
				<div
					style={{
						width: "100vw",
						height: "100%",
						display: "flex",
						flexDirection: "column",
					}}
				>
					<div
						style={{
							padding: "1rem 0",
						}}
					>
						<h1
							style={{
								fontSize: "2.25rem",
								textAlign: "center",
								textTransform: "capitalize",
							}}
						>
							{title}
						</h1>
					</div>
					<div
						style={{
							flexGrow: 1,
							display: "flex",
							flexDirection: "column",
							position: "relative",
						}}
					>
						<Waves />
						{children}
					</div>
				</div>
			</IonContent>
		</IonPage>
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
