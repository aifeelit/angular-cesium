import { Component, OnInit, ViewChild } from '@angular/core';
import { WebSocketSupplier } from '../utils/services/webSocketSupplier/webSocketSupplier';
import { MapLayerProviderOptions } from '../../src/models/map-layer-provider-options.enum';
import { AcLabelDescComponent } from '../../src/components/ac-label-desc/ac-label-desc.component';

@Component({
	selector: 'app-root',
	templateUrl: 'app.component.html',
	styleUrls: ['app.component.css'],
	providers: [WebSocketSupplier]
})

export class AppComponent implements OnInit {
	private arcGisMapServerProvider: MapLayerProviderOptions;
	private position: any;
	private positions: any[] = new Array(2);
	private redMatirial: any;
	private aquamarine: any;
	private longitude: number;
	private latitude: number;

	@ViewChild(AcLabelDescComponent) label: AcLabelDescComponent;

	constructor() {
	}

	ngOnInit() {
		this.longitude = 35.1;
		this.latitude = 0.1;
		this.arcGisMapServerProvider = MapLayerProviderOptions.ArcGisMapServer;
		this.position = Cesium.Cartesian3.fromDegrees(34.0, 32.0);
		this.positions[0] = Cesium.Cartesian3.fromDegreesArray(
			[
				34.1, 35.1,
				this.longitude, this.latitude
			]);
		this.positions[1] = Cesium.Cartesian3.fromDegreesArray(
			[
				1.1, 1.1,
				40.0, 40.0
			]);
		this.redMatirial = new Cesium.Material({
			fabric: {
				type: 'Color',
				uniforms: {
					color: new Cesium.Color(1.0, 0.0, 0.0, 1.0)
				}
			}
		});
		this.aquamarine = Cesium.Color.AQUAMARINE;

		setTimeout(() => {
			this.label.removeFromMap();
		}, 10000);
		setInterval(() => {
			this.positions[0] = Cesium.Cartesian3.fromDegreesArray(
				[
					34.1, 35.1,
					++this.longitude, ++this.latitude
				]);
		}, 500);
	}
}
