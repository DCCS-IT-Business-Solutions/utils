import * as moment from "moment";

export function timeSpanToText({ start, end }: { start: Date; end: Date }) {
  if (start.getFullYear() === end.getFullYear()) {
    if (start.getMonth() === end.getMonth()) {
      if (start.getDate() === end.getDate()) {
        if (start.getHours() === end.getHours()) {
          return `${moment(start).format("HH:mm")} - ${moment(end).format(
            `mm D.MMM.${decideYearFormat(end)}`
          )}`;
        } else {
          return `${moment(start).format("HH:mm")} - ${moment(end).format(
            `HH:mm D.MMM.${decideYearFormat(end)}`
          )}`;
        }
      } else {
        return `${moment(start).format("D")} - ${moment(end).format(
          `D.MMM.${decideYearFormat(end)}`
        )}`;
      }
    } else {
      return `${moment(start).format("D.MMM")} - ${moment(end).format(
        `D.MMM.${decideYearFormat(end)}`
      )}`;
    }
  } else {
    return `${moment(start).format(
      `D.MMM.${decideYearFormat(start)}`
    )} - ${moment(end).format(`D.MMM.${decideYearFormat(end)}`)}`;
  }
}

function decideYearFormat(date: Date) {
  return sameCentruy(date) ? "YYYY" : "YYYY";
}

function sameCentruy(date: Date) {
  return (
    date
      .getFullYear()
      .toString()
      .slice(0, 2) ===
    new Date()
      .getFullYear()
      .toString()
      .slice(0, 2)
  );
}
