const squareSolid =
  '<svg xmlns="http://www.w3.org/2000/svg" width="25" height="25"  viewBox="0 0 448 512"><path fill="#7986cb" d="M400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48z"/></svg>';
const squareCross =
  '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="#1dbcec" d="M0 80v352c0 26.51 21.49 48 48 48h416c26.51 0 48-21.49 48-48V80c0-26.51-21.49-48-48-48H48C21.49 32 0 53.49 0 80zm232 0v152H48V86a6 6 0 0 1 6-6h178zM48 280h184v152H54a6 6 0 0 1-6-6V280zm232 152V280h184v146a6 6 0 0 1-6 6H280zm184-200H280V80h178a6 6 0 0 1 6 6v146z"/></svg>';
const triangleSolid =
  '<svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 600 600"><path fill="#33d935" d="M329.6 24c-18.4-32-64.7-32-83.2 0L6.5 440c-18.4 31.9 4.6 72 41.6 72H528c36.9 0 60-40 41.6-72l-240-416z"/></svg>';
const closedValve = (color: String) => {
  return (
    '<svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 512 512"><path fill="' +
    color +
    '" d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8z"></path><path fill="currentColor" d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm0 448c-110.5 0-200-89.5-200-200S145.5 56 256 56s200 89.5 200 200-89.5 200-200 200z"></path><g transform="translate(192 256)"><g transform="translate(0, 0)  scale(1, 1)  rotate(0 0 0)"><path fill="currentColor" d="M217.5 256l137.2-137.2c4.7-4.7 4.7-12.3 0-17l-8.5-8.5c-4.7-4.7-12.3-4.7-17 0L192 230.5 54.8 93.4c-4.7-4.7-12.3-4.7-17 0l-8.5 8.5c-4.7 4.7-4.7 12.3 0 17L166.5 256 29.4 393.2c-4.7 4.7-4.7 12.3 0 17l8.5 8.5c4.7 4.7 12.3 4.7 17 0L192 281.5l137.2 137.2c4.7 4.7 12.3 4.7 17 0l8.5-8.5c4.7-4.7 4.7-12.3 0-17L217.5 256z" transform="translate(-130 -260)"></path></g></g></svg>'
  );
};

const defaultClosedValve =
  '<svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 780 780"><path fill="#b300ff" d="M476 97Q572 126 633 204T694 380Q694 477 633 555T476 664V97ZM294 664Q199 640 138 564T76 380Q76 269 136 193T294 96V234V446V664ZM0 233T0 387T113 650T388 760Q548 760 660 651T773 387Q773 233 660 123T388 13Q228 13 114 123Z"/></svg>';

const defaultValve = (color: String) => {
  return (
    '<svg  xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 780 780"><path fill="' +
    color +
    '" d="M6 6V786H305V6H6Z"/></svg>'
  );
};
const washoutValve =
  '<svg  xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 780 780"><path fill="#b300ff" d="M378 6V786H677V6H378ZM6 6V786H305V6H6Z"/></svg>';

const pressureReducing =
  '<svg  xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 780 780"><path fill="#b300ff" d="M90 78H661V684H90L660 385L90 78ZM17 18V747H740V18H17Z"/></svg>';
const pressureRelief =
  '<svg  xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 780 780"><path fill="#b300ff" d="M376 381L90 78H661L376 381ZM376 392L661 684H90L376 392ZM17 18V747H740V18H17Z"/></svg>';
const pressureSustaining =
  '<svg  xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 780 780"><path fill="#b300ff" d="M88 626V148L658 381L88 626ZM661 684H90L661 428V684ZM661 331L90 78H661V331ZM17 18V747H740V18H17Z"/></svg>';
const refluxValve =
  '<svg  xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 780 780"><path fill="#b300ff" d="M90 78L17 38V716L90 684L660 428V684V747H740V18H660V78V331L90 78Z"/></svg>';

const meter =
  '<svg  xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 780 780"><path fill="#b300ff" d="M192 181V596H581V181H192ZM93 82H674V693H93V82ZM17 18V747H740V18H17Z"/></svg>';

const mapMarker =
  '<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 384 512"><path fill="#000" d="M172.268 501.67C26.97 291.031 0 269.413 0 192 0 85.961 85.961 0 192 0s192 85.961 192 192c0 77.413-26.97 99.031-172.268 309.67-9.535 13.774-29.93 13.773-39.464 0z"/></svg>';

const WaterIcons = {
  squareSolid,
  squareCross,
  triangleSolid,
  closedValve,
  defaultClosedValve,
  pressureReducing,
  pressureRelief,
  pressureSustaining,
  refluxValve,
  defaultValve,
  washoutValve,
  meter,
  mapMarker,
};

export default WaterIcons;
