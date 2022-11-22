import { createSlice } from "@reduxjs/toolkit";
import { IData } from "../../constant/interface";

export const initialState:IData[] = []

export const dataSlice = createSlice({
	name: "data",
	initialState,
	reducers: {
		addState: (state, action) => {
			const newState = action.payload;
			let newMass: IData[] = []
			for (let i = 0; i < newState.lenght; i++) {
				console.log(i);
			 }
			 newState.forEach((item:any)  => {
				newMass = [...newMass, {
				date: item.date,
				conditions: item.day.condition.text ,
				mintempc: item.day.mintemp_c,
				maxtempc: item.day.maxtemp_c,
				maxwindkph: item.day. maxwind_kph,
				precipmm: item.day.totalprecip_mm,
				humidity: item.day.avghumidity,
			}] })
			return newMass
		},
	}
});

export const { addState } = dataSlice.actions;
export default dataSlice.reducer;
