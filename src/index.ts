import { Cleansify } from './Cleansify';

export const cleansify = (s: string, c: any = {}) => {
	return Cleansify._c(s, c);
};
