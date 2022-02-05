export const formatDate = (value: Date) => {
  const day = Intl.DateTimeFormat("pt-BR", {
    day: "numeric",
  }).format(value);

  const month = Intl.DateTimeFormat("pt-BR", {
    month: "long",
  }).format(value);

  const monthShort =
    month.charAt(0).toUpperCase() + month.slice(1).substring(0, 2);

  return `${day} de ${monthShort}`;
};

export const formatHour = (value: Date) => {
  const hour = Intl.DateTimeFormat("pt-BR", {
    hour: "2-digit",
    hour12: false,
  }).format(value);

  const minutes = Intl.DateTimeFormat("pt-BR", {
    minute: "2-digit",
  }).format(value);

  const minutesFormat = minutes.length === 1 ? `0${minutes}` : minutes;

  return `${hour}:${minutesFormat}h`;
};
