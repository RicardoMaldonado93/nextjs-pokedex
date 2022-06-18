import { NextPage } from 'next';
import { ReactNode, ReactElement } from 'react';
import { AppProps } from 'next/app';


export interface ILayout {
  children: React.ReactNode;
  title?: string;
  description?: string;
}

type NextPageWithLayout = NextPage & {
    getLayout: (page: ReactElement)=> ReactNode;
}

export type AppPropsWithLayout = AppProps & {
    Component: NextPageWithLayout
}
