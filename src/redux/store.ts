import { configureStore } from "@reduxjs/toolkit";
import dataReduser from "./features/dataSlice";

export const store = configureStore({
	reducer: {
		data: dataReduser,
	}
});

