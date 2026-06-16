// BEGIN
export function Point(x, y) {
  this.x = x;
  this.y = y;
}

Point.prototype.getX = function getX() {
  return this.x;
};

Point.prototype.getY = function getY() {
  return this.y;
};

export function Segment(beginPoint, endPoint) {
  this.beginPoint = beginPoint;
  this.endPoint = endPoint;
}

Segment.prototype.getBeginPoint = function getBeginPoint() {
  return this.beginPoint;
};

Segment.prototype.getEndPoint = function getEndPoint() {
  return this.endPoint;
};

export const reverse = (segment) => {
  const begin = segment.getBeginPoint();
  const end = segment.getEndPoint();
  const newBegin = new Point(end.getX(), end.getY());
  const newEnd = new Point(begin.getX(), begin.getY());

  return new Segment(newBegin, newEnd);
};
// END
