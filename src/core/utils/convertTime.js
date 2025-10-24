const timeFormatter = new Intl.DateTimeFormat(undefined, {
  hour: "2-digit",
  minute: "2-digit",
  hour12: false,
});

export function formatTime(dateInput) {
  if (!dateInput) return "";

  const date = new Date(dateInput);
  if (isNaN(date)) return "";

  return timeFormatter.format(date);
}
