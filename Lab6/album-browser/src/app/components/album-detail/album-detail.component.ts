import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { Location } from '@angular/common';
import { AlbumService } from '../../services/album.service';
import { Album } from '../../models/album.model';

@Component({
    selector: 'app-album-detail',
    standalone: true,
    imports: [RouterLink, FormsModule],
    templateUrl: './album-detail.component.html',
    styleUrl: './album-detail.component.css'
})
export class AlbumDetailComponent implements OnInit {
    private route = inject(ActivatedRoute);
    private albumService = inject(AlbumService);
    private location = inject(Location);

    album: Album | null = null;
    isLoading = true;
    isSaving = false;

    ngOnInit(): void {
        this.route.paramMap.subscribe(params => {
            const id = Number(params.get('id'));
            if (id) {
                this.loadAlbum(id);
            }
        });
    }

    loadAlbum(id: number): void {
        this.isLoading = true;
        this.albumService.getAlbum(id).subscribe({
            next: (data) => {
                this.album = data;
                this.isLoading = false;
            },
            error: (err) => {
                console.error('Error fetching album', err);
                this.isLoading = false;
            }
        });
    }

    saveAlbum(): void {
        if (this.album) {
            this.isSaving = true;
            this.albumService.updateAlbum(this.album).subscribe({
                next: (updatedAlbum) => {
                    this.album = updatedAlbum;
                    this.isSaving = false;
                    alert('Album updated successfully!');
                },
                error: (err) => {
                    console.error('Error updating album', err);
                    this.isSaving = false;
                }
            });
        }
    }

    goBack(): void {
        this.location.back();
    }
}
