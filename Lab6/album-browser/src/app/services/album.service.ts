import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { Album } from '../models/album.model';
import { Photo } from '../models/photo.model';

@Injectable({
    providedIn: 'root'
})
export class AlbumService {
    private apiUrl = 'https://jsonplaceholder.typicode.com/albums';
    private http = inject(HttpClient);

    getAlbums(): Observable<Album[]> {
        return this.http.get<Album[]>(this.apiUrl);
    }

    getAlbum(id: number): Observable<Album> {
        return this.http.get<Album>(`${this.apiUrl}/${id}`);
    }

    getAlbumPhotos(id: number): Observable<Photo[]> {
        return this.http.get<Photo[]>(`${this.apiUrl}/${id}/photos`).pipe(
            map(photos => photos.map(photo => ({
                ...photo,
                url: photo.url.replace('via.placeholder.com', 'dummyimage.com'),
                thumbnailUrl: photo.thumbnailUrl.replace('via.placeholder.com', 'dummyimage.com')
            })))
        );
    }

    updateAlbum(album: Album): Observable<Album> {
        return this.http.put<Album>(`${this.apiUrl}/${album.id}`, album);
    }

    deleteAlbum(id: number): Observable<void> {
        return this.http.delete<void>(`${this.apiUrl}/${id}`);
    }
}
