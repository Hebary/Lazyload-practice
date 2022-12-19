import React, { lazy, LazyExoticComponent } from "react";
import { NoLazyComponent } from "../lazy/pages";

type JSXComponent = () => JSX.Element

interface Route {
    to: string
    name: string;
    path: string;
    Component : LazyExoticComponent<JSXComponent> | JSXComponent;
}


export const LazyLayout = lazy(() => import(/* webPackChunkName : LazyLayout */"../lazy/layout/LazyLayout"));

export const routes : Route[] = [
    {
        to : '/lazyload',
        path: '/lazyload/*',
        name: 'Lazy Layout',
        Component : LazyLayout,
        
    },
    {
        to : '/no-lazy',
        path: 'no-lazy',
        name: 'No Lazy',
        Component : NoLazyComponent

    }
]