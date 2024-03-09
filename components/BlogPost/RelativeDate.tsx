'use client';

const relativeDate = (date: Date) => {
  const rtf1 = new Intl.RelativeTimeFormat('en', { style: 'short' });
  const aDay = 1000 * 60 * 60 * 24;
  const diffInDays = Math.round((date.getTime() - Date.now()) / aDay);
  return rtf1.format(diffInDays, 'days');
};
export default function RelativeDate({ date }: { date: Date }) {
  return <span suppressHydrationWarning>{relativeDate(date)}</span>;
}
