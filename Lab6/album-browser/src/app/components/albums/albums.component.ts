import { Component, inject, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { AlbumService } from '../../services/album.service';
import { Album } from '../../models/album.model';

@Component({
    selector: 'app-albums',
    standalone: true,
    imports: [RouterLink],
    templateUrl: './albums.component.html',
    styleUrl: './albums.component.css'
})
export class AlbumsComponent implements OnInit {
    private albumService = inject(AlbumService);
    albums: Album[] = [];
    isLoading = true;

    ngOnInit(): void {
        this.albumService.getAlbums().subscribe({
            next: (data) => {
                this.albums = data;
                this.isLoading = false;
            },
            error: (err) => {
                console.error('Error fetching albums', err);
                this.isLoading = false;
            }
        });
    }

    deleteAlbum(id: number, event: Event): void {
        event.stopPropagation();
        event.preventDefault();
        this.albumService.deleteAlbum(id).subscribe({
            next: () => {
                this.albums = this.albums.filter(a => a.id !== id);
            },
            error: (err) => {
                console.error('Error deleting album', err);
            }
        });
    }
}
