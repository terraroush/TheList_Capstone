export default function format(dateString) {
  if (!dateString) return null;
  return new Intl.DateTimeFormat("en-US", {
    day: "numeric",
    month: "short",
    year: "numeric",
    hour: "numeric",
    minute: "numeric",
  }).format(new Date(dateString));
}
