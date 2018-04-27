// tslint:disable-next-line:no-implicit-dependencies
import { } from "googlemaps";
import mapPin from "../images/map-pin.svg";

export function initGoogleMap() {
    const mapElement = document.getElementById("js-google-map");
    if (mapElement === null) {
        throw Error("Target div for map doesn't exist.");
    }

    const position: google.maps.LatLngLiteral = {
        lat: 37.830856,
        lng: -122.2493,
    };

    const mapParams: google.maps.MapOptions = {
        center: position,
        zoom: 13,
    };

    const map = new google.maps.Map(mapElement, mapParams);

    const markerParams: google.maps.MarkerOptions = {
        icon: mapPin,
        map,
        position,
    };

    const marker = new google.maps.Marker(markerParams);
}
