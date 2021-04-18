import { Redirect, Route } from 'react-router-dom';
import {
	IonApp,
	IonIcon,
	IonLabel,
	IonRouterOutlet,
	IonTabBar,
	IonTabButton,
	IonTabs,
} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import {
	calendarOutline,
	checkmarkCircleOutline,
	homeOutline,
	settingsOutline,
} from 'ionicons/icons';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';
import './App.css';
import { Home } from './pages/Home';
import { Habits } from './pages/Habits';
import { Calendar } from './pages/Calendar';
import { Settings } from './pages/Settings';

const App: React.FC = () => (
	<IonApp>
		<IonReactRouter>
			<IonTabs>
				<IonRouterOutlet>
					<Route exact path='/home'>
						<Home />
					</Route>
					<Route exact path='/habits'>
						<Habits />
					</Route>
					<Route path='/calendar'>
						<Calendar />
					</Route>
					<Route path='/settings'>
						<Settings />
					</Route>
					<Route exact path='/'>
						<Redirect to='/home' />
					</Route>
				</IonRouterOutlet>
				<IonTabBar slot='bottom'>
					<IonTabButton tab='home' href='/home'>
						<IonIcon icon={homeOutline} />
						<IonLabel>Home</IonLabel>
					</IonTabButton>
					<IonTabButton tab='habits' href='/habits'>
						<IonIcon icon={checkmarkCircleOutline} />
						<IonLabel>Habits</IonLabel>
					</IonTabButton>
					<IonTabButton tab='calendar' href='/calendar'>
						<IonIcon icon={calendarOutline} />
						<IonLabel>Calendar</IonLabel>
					</IonTabButton>
					<IonTabButton tab='settings' href='/settings'>
						<IonIcon icon={settingsOutline} />
						<IonLabel>Settings</IonLabel>
					</IonTabButton>
				</IonTabBar>
			</IonTabs>
		</IonReactRouter>
	</IonApp>
);

export default App;
