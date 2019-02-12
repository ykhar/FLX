function formatTime(val) {
  var day, hour, minute;
	day = val / (60 * 24) | 0;
	hour = (val - day * 1440) / 60 | 0;
	minute = val % 60;
	return `${day} day(s) ${hour} hour(s) ${minute} minute(s).`;
} 
formatTime(3061);