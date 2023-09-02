import React from 'react';
import Head from 'next/head';
import type { HeaderType } from '../../types/types';

export const Header = ({ tabName, title, subTitle, solved }: HeaderType) => {
  return (
    <div>
      <Head>
        <title>{tabName}</title>
      </Head>
      <h1>{title}</h1>
      <p>{subTitle}</p>
      {solved && <div>Correct 😀</div>}
    </div>
  );
};
