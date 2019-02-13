import {
  defaultCharWidth,
  defaultContainerWidth,
  defaultMarginWidth
} from "../constants/rowviewContants";

export default function getBpsPerRow({
  charWidth = defaultCharWidth,
  width = defaultContainerWidth,
  dimensions: { width: width2 } = {},
  marginWidth = defaultMarginWidth,
  sequenceData
}) {
  const toRet = Math.floor(
    ((width2 || width) - marginWidth) /
      (sequenceData.isProtein || true ? charWidth * 3 : charWidth)
  );
  return sequenceData.isProtein || true ? toRet * 3 : toRet;
}
