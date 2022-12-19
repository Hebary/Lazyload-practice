import React, { lazy, LazyExoticComponent } from "react";

type JSXComponent = () => JSX.Element

interface Route {
    to: string
    name: string;
    path: string;
    Component : React.LazyExoticComponent<JSXComponent> | JSXComponent;
}


export const LazyOne = lazy(() => import(/* webPackChunkName : LazyPageOne  */"../lazy/pages/LazyPageOne"));
export const LazyTwo = lazy(() => import(/* webPackChunkName : LazyPageTwo  */"../lazy/pages/LazyPageTwo"));
export const LazyThree = lazy(() => import(/* webPackChunkName : LazyPageThree  */"../lazy/pages/LazyPageThree"));

export const routes : Route[] = [
    {
        to : 'lazy-1',
        path: 'lazy-1',
        name: 'Lazy One',
        Component : LazyOne
    },
    {
        to : 'lazy-2',
        path: 'lazy-2',
        name: 'Lazy Two',
        Component : LazyTwo

    },
    {
        to : 'lazy-3',
        path: 'lazy-3',
        name: 'Lazy Three',
        Component : LazyThree
    }
]