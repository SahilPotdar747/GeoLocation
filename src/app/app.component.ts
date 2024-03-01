import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import {
  AfterViewInit,

  ElementRef,
  OnInit,
  ViewChild,
  Renderer2,
} from "@angular/core";



import Swal from "sweetalert2";

import * as L from "leaflet";
import { LatLngBoundsExpression, LatLngExpression, LatLngTuple } from "leaflet";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements AfterViewInit, OnInit {
  @ViewChild("mapElement") mapElement!: ElementRef;
  map!: L.Map;
  arrowMarker:any
  currentLocationMarker:any
  private geofenceRadius = 100; // Radius of the geofence in meters
  private geofenceCenter = L.latLng(19.236208, 72.987586);
  constructor(private renderer: Renderer2, private el: ElementRef ) { }

  ngOnInit(): void {
  }
  ngAfterViewInit(): void {
    this.initMap();
  }

  initMap(): void {
    this.map = L.map('map').setView([this.geofenceCenter.lat, this.geofenceCenter.lng], 13);

    // Add tile layer
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '© OpenStreetMap contributors'
    }).addTo(this.map);

    // Add geofence circle
    L.circle(this.geofenceCenter, {
      radius: this.geofenceRadius,
      color: 'red',
      fillColor: '#f03',
      fillOpacity: 0.2
    }).addTo(this.map);

    // Get current location using Geolocation API with higher accuracy options
    if (navigator.geolocation) {
      navigator.geolocation.watchPosition(
        (position) => {
          const lat = position.coords.latitude;
          const lng = position.coords.longitude;

          // Update the marker for the current location
          if (!this.currentLocationMarker) {
            this.currentLocationMarker = L.marker([lat, lng]).addTo(this.map);
          } else {
            this.currentLocationMarker.setLatLng([lat, lng]);
          }

          // Update the arrow marker position
          if (!this.arrowMarker) {
            this.arrowMarker = L.marker([lat, lng], {
              icon: L.divIcon({
                className: 'arrow-icon',
                html: '<img src="assets/arrow.png" style="transform: rotate(0deg);">'
              })
            }).addTo(this.map);
          } else {
            this.arrowMarker.setLatLng([lat, lng]);
          }
        },
        (error) => {
          console.error('Error getting location:', error.message);
        },
        { enableHighAccuracy: true }
      );
    } else {
      console.error('Geolocation is not supported by this browser.');
    }
  }
  triggerInsideGeofence(): void {
    // Show sweet alert
    Swal.fire('You have reached your destination!');

    // Play ringtone
    // Implement ringtone playing logic here
  }
}

