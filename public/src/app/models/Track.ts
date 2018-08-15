import { Artist } from './Artist';
import { Album } from './Album';

export class Track {
   id: number;
   album: Album;
   artists: Artist;
   images: any;
   name: string;
   type: string;
}
