export type Item = {
  isBottom?: boolean;
  detailHeader?: string;
  detailContent?: string;
  className?: string;
  startCol?: number;
  len?: number;
  startRow?: number;
  title?: string;
  date?: Date;
  vlen?: number;
};

export type Day = {
  enabled: boolean;
  name: string;
  date?: Date;
};
