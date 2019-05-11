import React from 'react';

const formatter = new Intl.DateTimeFormat('es', {
    // weekday: 'narrow' | 'short' | 'long',
    // era: 'narrow' ,//| 'short' | 'long',
    year: 'numeric',
    month: 'short',
    day: '2-digit',
    // hour: '2-digit',
    // minute: '2-digit',
    // second: 'numeric' | '2-digit',
    // timeZoneName: 'short' | 'long',

    // Time zone to express it in
    // timeZone: 'europe/spain',
    // Force 12-hour or 24-hour
    hour12: false,

    // Rarely-used options
    // hourCycle: 'h11' | 'h12' | 'h23' | 'h24',
    // formatMatcher: 'basic' | 'best fit',
  })
const formatDate = _date => {
  try {
     return formatter.format(new Date(_date));
  } catch (error) {
    return _date
  }
}

const DateDisplay = ({ date }) => <span className='DateDisplay'>{formatDate(date)}</span>;

export default DateDisplay;
