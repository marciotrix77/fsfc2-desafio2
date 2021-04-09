export class Route {
  title: string;
  startPosition: {
    lat: number;
    lng: number;
  };
  endPosition: {
    lat: number;
    lng: number;
  };

  constructor(partial: Partial<Route>) {
    Object.assign(this, partial);
  }
}
