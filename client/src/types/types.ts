export type BlockCodeType = {
  id: string;
  title: string;
  code: string;
  solution: string;
  href: string;
};

export type HeaderType = {
  tabName: string;
  title: string;
  subTitle?: string;
  solved?: boolean;
};

export type BlockCodeCardType = {
  title: string;
  href: string;
};
