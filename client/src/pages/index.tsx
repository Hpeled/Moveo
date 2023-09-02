import { useEffect, useState } from 'react';
import style from './index.module.scss';
import { BlockCodeType } from '../types/types';
import { CodeBlocks } from '../components/codeBlocks/CodeBlocks';
import { Header } from '../components/header/Header';
import { getServerUrl } from '../common/helpers';

export default function Home() {
  const [codeBlocks, setCodeBlocks] = useState<BlockCodeType[]>([]);

  const getCodeBlocks = async () => {
    const serverUrl = getServerUrl();
    const codeBlocksResponse = await fetch(`${serverUrl}`);
    if (codeBlocksResponse.ok) {
      const codeBlocksBody = await codeBlocksResponse.json();
      setCodeBlocks(codeBlocksBody?.data);
    }
  };

  useEffect(() => {
    getCodeBlocks();
  }, []);

  return (
    <div className={style.lobbyContainer}>
      <Header tabName={'Lobby'} title={'Lobby'} subTitle={'Choose code block'} />
      <CodeBlocks data={codeBlocks} />
    </div>
  );
}
