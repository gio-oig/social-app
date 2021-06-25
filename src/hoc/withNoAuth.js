import { Redirect } from 'react-router';
import { AUTH_TOKEN } from '../utils/constants';
import { HOME_PATH } from '../utils/routePath';

export const withNoAuth = (Component) => {
	const WithNoAuth = (props) => {
		const token = localStorage.getItem(AUTH_TOKEN);
		if (token) {
			return <Redirect to={HOME_PATH} />;
		}
		return <Component {...props} />;
	};

	return WithNoAuth;
};

export default withNoAuth;
