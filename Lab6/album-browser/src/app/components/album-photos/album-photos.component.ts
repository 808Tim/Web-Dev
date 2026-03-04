import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { Location } from '@angular/common';
import { AlbumService } from '../../services/album.service';
import { Photo } from '../../models/photo.model';

@Component({
    selector: 'app-album-photos',
    standalone: true,
    imports: [RouterLink],
    templateUrl: './album-photos.component.html',
    styleUrl: './album-photos.component.css'
})
export class AlbumPhotosComponent implements OnInit {
    private route = inject(ActivatedRoute);
    private albumService = inject(AlbumService);
    private location = inject(Location);

    photos: Photo[] = [];
    albumId: number | null = null;
    isLoading = true;

    ngOnInit(): void {
        this.route.paramMap.subscribe(params => {
            const id = Number(params.get('id'));
            if (id) {
                this.albumId = id;
                this.loadPhotos(id);
            }
        });
    }

    loadPhotos(albumId: number): void {
        this.isLoading = true;
        this.albumService.getAlbumPhotos(albumId).subscribe({
            next: (data) => {
                this.photos = data;
                this.isLoading = false;
            },
            error: (err) => {
                console.error('Error fetching photos', err);
                this.isLoading = false;
            }
        });
    }

    goBack(): void {
        this.location.back();
    }
}
