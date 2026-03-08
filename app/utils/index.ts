import { encodeSVGPath, SVGPathData } from "svg-pathdata";

export const SMALL_DEVICE_BREAKPOINT = 720;
export const MEDIUM_DEVICE_BREAKPOINT = 1200;

export function getSaloonOutlinePath({
  width,
  height,
  radiusX,
  radiusY,
  paddingX = 0,
  paddingY = 0,
}: {
  width: number;
  height: number;
  radiusX: number;
  radiusY: number;
  paddingX?: number;
  paddingY?: number;
}) {
  return encodeSVGPath([
    {
      type: SVGPathData.MOVE_TO,
      relative: false,
      x: width - (radiusX + paddingX),
      y: paddingY,
    },
    {
      type: SVGPathData.ARC,
      relative: false,
      lArcFlag: 0,
      rX: radiusX,
      rY: radiusY,
      sweepFlag: 0,
      x: width - paddingX,
      y: radiusY + paddingY,
      xRot: 0,
    },
    {
      type: SVGPathData.VERT_LINE_TO,
      relative: false,
      y: width - (radiusY + paddingY),
    },
    {
      type: SVGPathData.ARC,
      relative: false,
      lArcFlag: 0,
      rX: radiusX,
      rY: radiusY,
      sweepFlag: 0,
      x: width - (radiusX + paddingX),
      y: height - paddingY,
      xRot: 0,
    },
    {
      type: SVGPathData.HORIZ_LINE_TO,
      relative: false,
      x: radiusX + paddingX,
    },
    {
      type: SVGPathData.ARC,
      relative: false,
      lArcFlag: 0,
      rX: radiusX,
      rY: radiusY,
      sweepFlag: 0,
      x: paddingX,
      y: height - (radiusY + paddingY),
      xRot: 0,
    },
    {
      type: SVGPathData.VERT_LINE_TO,
      relative: false,
      y: radiusY + paddingY,
    },
    {
      type: SVGPathData.ARC,
      relative: false,
      lArcFlag: 0,
      rX: radiusX,
      rY: radiusY,
      sweepFlag: 0,
      x: radiusX + paddingX,
      y: paddingY,
      xRot: 0,
    },
    {
      type: SVGPathData.CLOSE_PATH,
    },
  ]);
}
