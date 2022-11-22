import React from 'react';
import { store } from './redux/store';
import { Provider } from 'react-redux';
import SearchCity from './components/SearchCity';

const AppReact = React.createElement;

export const App = () => {
	return (
		<Provider store={store}>
			<SearchCity />
		</Provider>
	);
};

export default App;
