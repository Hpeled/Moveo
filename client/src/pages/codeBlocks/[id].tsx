import { javascript } from '@codemirror/lang-javascript';
import { vscodeDark } from '@uiw/codemirror-theme-vscode';
import CodeMirror from '@uiw/react-codemirror';
import dynamic from 'next/dynamic';
import React, { ChangeEvent, useEffect, useState } from 'react';
import io from 'socket.io-client';
import { getServerUrl } from '../../common/helpers';
import { Header } from '../../components/header/Header';
import style from './codeBlockPage.module.scss';

const CodeEditor = dynamic(() => import('@uiw/react-textarea-code-editor').then((mod) => mod.default), { ssr: false });

export async function getServerSideProps(context: any) {
  const { params } = context;
  const serverUrl = getServerUrl();
  const response = await fetch(`${serverUrl}/codeBlocks/${params.id}`);
  const data = await response.json();

  // will be passed to the page component as props
  return {
    props: {
      codeBlock: data?.data,
    },
  };
}

function CodeBlockPage({ codeBlock }: any) {
  const [code, setCode] = useState(codeBlock.code);
  const [users, setUsers] = useState<number>(0);
  const [solved, setSolved] = useState<boolean>(false);

  const socketUrl = getServerUrl();

  const [socket, setSocket] = useState(io(`${socketUrl}`, { transports: ['websocket'] }));

  useEffect(() => {
    return () => {
      socket.disconnect();
    };
  }, [socket]);

  socket.on('clientsCounter', (data: number) => {
    setUsers(data);
  });

  socket.on('sendStudentCode', (data: string) => {
    // this is student
    if (users !== 1) {
      setCode(data);
      if (codeBlock.solution == data) {
        setSolved(true);
      } else {
        setSolved(false);
      }
    }
  });

  const handleCodeChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    socket.emit('codeEdit', { data: e.target.value });
  };
  const onChange = React.useCallback((value: any, viewUpdate: any) => {
    socket.emit('codeEdit', { data: value });
  }, []);
  return (
    <div className={style.codeBlockPage}>
      {users !== 0 && (
        <>
          <Header
            tabName={codeBlock.title}
            title={codeBlock.title}
            subTitle={`${users === 1 ? 'Mentor' : 'Student'} Panel`}
            solved={solved}
          ></Header>
          <CodeMirror
            theme={vscodeDark}
            value={code}
            style={{ textAlign: 'left' }}
            height="400px"
            width="800px"
            extensions={[javascript({ jsx: true })]}
            onChange={onChange}
          />
        </>
      )}
    </div>
  );
}

export default CodeBlockPage;
