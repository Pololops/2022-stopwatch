const reducer = (state, action) => {
	switch (action.type) {
		case 'CHANGE_BUTTON_LABEL': {
			if (action.payload === 'Start')
				return [{ ...state[0], label: 'Turn' }, { ...state[1] }];

			if (action.payload === 'Stop')
				return [
					{ ...state[0], label: 'Start' },
					{ ...state[1], label: 'Reset' },
				];

			if (action.payload === 'Reset') return [{ ...state[0] }, { ...state[1], label: 'Stop' }];
		
			return state;
		}

		default:
			return state;
	}
};

export default reducer;
