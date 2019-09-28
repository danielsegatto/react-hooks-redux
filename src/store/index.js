import { createStore } from 'redux';

const INITIAL_STATE = {
    techs: []
}
const ThecsReducer = (state = INITIAL_STATE, action) => {
	let techs = JSON.parse(localStorage.getItem('techs'));
	if(techs !== null) state.techs = techs;

	switch(action.type) {
		case 'ADD_TECH': 
			return {...state, techs: [...state.techs, action.newTech]};
		case 'REMOVE_TECH': 
			return {...state, techs: action.techs};
		default: 
			return state;
	}
}

export default createStore(ThecsReducer);
