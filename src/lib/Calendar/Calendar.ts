export type Item = {
  isBottom?: boolean;
  detailHeader?: string;
  detailContent?: string;
  type?: ItemType;
  className?: string;
  startCol?: number;
  len?: number;
  startRow?: number;
  title?: string;
  date?: Date;
  vlen?: number;
};

export enum ItemType {
  Info = "info",
  Warning = "warning",
  Danger = "danger",
  Primary = "primary",
  Detail = "detail",
}

export type Day = {
  enabled: boolean;
  name: string;
  date?: Date;
};
