import React from 'react';

interface NotificationValue {}

const NotificationContext: React.FC = ({ children }) => {
	const value = {};

	return <div>{children}</div>;
};

export default NotificationContext;
