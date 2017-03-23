import { Component } from '@angular/core';
import { BasicDesc } from '../../services/basic-desc/basic-desc.service';
import { LayerService } from '../../services/layer-service/layer-service.service';
import { DynamicPolylineDrawerService } from '../../services/dynamic-polyline-drawer/dynamic-polyline-drawer.service';
import { ComputationCache } from '../../services/computation-cache/computation-cache.service';
import { CesiumProperties } from '../../services/cesium-properties/cesium-properties.service';

/**
 *  This is a dynamic(position is updatable) implementation of an polyline.
 *  The ac-dynamic-polyline-desc element must be a child of ac-layer element.
 *  __Usage when the parent element is ac-layer:__
 *  ```
 *    &lt;ac-dynamic-polyline-desc props="{width : polyline.width, //optional
 *                                      positions: polyline.positions,
 *                                      material: polyline.material //optional
 *                                      }"
 *    &gt;
 *    &lt;/ac-dynamic-polyline-desc&gt;
 * ```
 *  __Usage when the parent element is ac-map:__
 *  ```
 *    &lt;ac-dynamic-polyline-desc [props]="{positions: positions,
 *                                          width: 3,
 *                                          material: redMatirial}"
 *                                 [isOnMap]="true"
 *    &gt;
 *    &lt;/ac-dynamic-polyline-desc&gt;
 * ```

 */
@Component({
	selector: 'ac-dynamic-polyline-desc',
	template: ''
})
export class AcDynamicPolylineDescComponent extends BasicDesc {

	constructor(dynamicPolylineDrawerService: DynamicPolylineDrawerService, layerService: LayerService,
	            computationCache: ComputationCache, cesiumProperties: CesiumProperties) {
		super(dynamicPolylineDrawerService, layerService, computationCache, cesiumProperties);
	}
}
