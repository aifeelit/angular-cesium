import { EditPoint } from './edit-point';
import { Cartesian3 } from '../../angular-cesium/models/cartesian3';
import { BasicEditUpdate } from './basic-edit-update';

export interface PolygonEditUpdate extends BasicEditUpdate {
  positions?: Cartesian3[];
  updatedPosition?: Cartesian3;
  draggedPosition?: Cartesian3;
  points?: EditPoint[];
  updatedPoint?: EditPoint;
}
