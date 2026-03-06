import { encodeSVGPath, SVGPathData } from "svg-pathdata";

export type ResizeToFitOneLineOptions = {
  maxFontSizePx?: number;
  widthMultiplier?: number;
};

export function resizeToFitOneLine(
  textElement: HTMLElement | null,
  containerElement: HTMLElement | null,
  options?: ResizeToFitOneLineOptions,
) {
  if (!textElement || !containerElement) return;

  // Set default values of options
  const actualOptions = Object.assign(
    {
      maxFontSizePx: 160,
      widthMultiplier: 0.95,
    },
    options,
  );

  const textElementStyle = getComputedStyle(textElement);

  const currentFontSizeString = textElementStyle.fontSize;
  const currentFontSize = parseInt(
    currentFontSizeString.substring(0, currentFontSizeString.length - 2),
  );
  const currentWidth = textElement.scrollWidth;
  const targetWidth =
    containerElement.offsetWidth * actualOptions.widthMultiplier;

  const targetFontSize = Math.min(
    targetWidth * (currentFontSize / currentWidth),
    actualOptions.maxFontSizePx,
  );

  if (targetFontSize > currentFontSize && targetFontSize <= currentFontSize + 1)
    return;
  textElement.style.fontSize = `${targetFontSize}px`;
}

export function getSaloonOutlinePath(
  width: number,
  height: number,
  radius: number,
  padding: number = 0,
) {
  return encodeSVGPath([
    {
      type: SVGPathData.MOVE_TO,
      relative: false,
      x: width - (radius + padding),
      y: padding,
    },
    {
      type: SVGPathData.ARC,
      relative: false,
      lArcFlag: 0,
      rX: radius,
      rY: radius,
      sweepFlag: 0,
      x: width - padding,
      y: radius + padding,
      xRot: 0,
    },
    {
      type: SVGPathData.VERT_LINE_TO,
      relative: false,
      y: width - (radius + padding),
    },
    {
      type: SVGPathData.ARC,
      relative: false,
      lArcFlag: 0,
      rX: radius,
      rY: radius,
      sweepFlag: 0,
      x: width - (radius + padding),
      y: height - padding,
      xRot: 0,
    },
    {
      type: SVGPathData.HORIZ_LINE_TO,
      relative: false,
      x: radius + padding,
    },
    {
      type: SVGPathData.ARC,
      relative: false,
      lArcFlag: 0,
      rX: radius,
      rY: radius,
      sweepFlag: 0,
      x: padding,
      y: height - (radius + padding),
      xRot: 0,
    },
    {
      type: SVGPathData.VERT_LINE_TO,
      relative: false,
      y: radius + padding,
    },
    {
      type: SVGPathData.ARC,
      relative: false,
      lArcFlag: 0,
      rX: radius,
      rY: radius,
      sweepFlag: 0,
      x: radius + padding,
      y: padding,
      xRot: 0,
    },
    {
      type: SVGPathData.CLOSE_PATH,
    },
  ]);
}

export function getSaloonOutlinePath2({
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
