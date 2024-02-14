import { Schedule } from './schedule.model';

export class Location {
  constructor(
    public id: number,
    public title: string,
    public content: string,
    public opened: boolean,
    public mask: string,
    public towel: string,
    public fountain: string,
    public locker_room: string,
    public schedules: Schedule[]
  ) {
    this.id = id;
    this.title = title;
    this.content = content;
    this.opened = opened;
    this.mask = mask;
    this.towel = towel;
    this.fountain = fountain;
    this.locker_room = locker_room;
    this.schedules = schedules;
  }
}
