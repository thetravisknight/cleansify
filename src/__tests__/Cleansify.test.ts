import { cleansify } from '../index';
test('Cleansify', () => {
	expect(cleansify('ijd&jd')).toBe('ijd_jd');
	expect(cleansify('winter_(weather)')).toBe('winter__weather_');
	expect(cleansify('winter (weather)')).toBe('winter _weather_');
	expect(cleansify('winter_(weather)', { maxLength: 8 })).toBe('winter__');
	expect(cleansify('winter_(weather)', { replacement: '-' })).toBe('winter--weather-');
	expect(cleansify('winter_(weather)', { replacement: '-', case: 'upper' })).toBe('WINTER--WEATHER-');
	expect(cleansify('winter_(weather)', { case: 'kebab' })).toBe('winter-weather');
	expect(cleansify('winter weather)', { case: 'kebab' })).toBe('winter-weather');
});
