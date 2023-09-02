import React from 'react';
import { CodeBlock } from './codeBlock/CodeBlock';
import { BlockCodeType } from '../../types/types';
import style from './CodeBlocks.module.scss';

export const CodeBlocks = ({ data }: { data: BlockCodeType[] }) => {
  return (
    <div className={style.codeBlocks}>
      {data.map((codeBlock: BlockCodeType) => (
        <CodeBlock key={codeBlock.id} title={codeBlock.title} href={codeBlock.href} />
      ))}
    </div>
  );
};
