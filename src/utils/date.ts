// utils/date.ts
interface DateFormatOptions {
  locale?: string;
  format?: "short" | "medium" | "long";
}

export function formatDate(
  date: string | Date,
  options: DateFormatOptions = {}
) {
  const { locale = "en-US", format = "medium" } = options;

  const dateObj = typeof date === "string" ? new Date(date) : date;

  const formatOptions: Intl.DateTimeFormatOptions = {
    // short: "MM/DD/YYYY"
    // medium: "Month DD, YYYY"
    // long: "Month DD, YYYY, HH:mm"
    ...(format === "short" && {
      month: "numeric",
      day: "numeric",
      year: "numeric",
    }),
    ...(format === "medium" && {
      month: "long",
      day: "numeric",
      year: "numeric",
    }),
    ...(format === "long" && {
      month: "long",
      day: "numeric",
      year: "numeric",
      hour: "numeric",
      minute: "numeric",
    }),
  };

  try {
    return new Intl.DateTimeFormat(locale, formatOptions).format(dateObj);
  } catch (error) {
    console.error("Error formatting date:", error);
    return dateObj.toLocaleDateString();
  }
}

// Примеры использования:
// formatDate('2025-01-10')                    -> "January 10, 2025"
// formatDate('2025-01-10', { format: 'short'})  -> "01/10/2025"
// formatDate('2025-01-10', { format: 'long' })  -> "January 10, 2025, 12:00"
// formatDate('2025-01-10', { locale: 'ru-RU' }) -> "10 января 2025 г."
