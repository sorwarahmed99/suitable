import React from 'react';
import { render } from 'react-dom';
import { createInertiaApp } from '@inertiajs/inertia-react';
import { InertiaProgress } from '@inertiajs/progress';
import { ThemeProvider } from './context/ThemeContext';

const appName = window.document.getElementsByTagName('title')[0]?.innerText || '';

createInertiaApp({
    title: (title) => `${title} - ${appName}`,
    resolve: (name) => require(`./Pages/${name}`),
    setup({ el, App, props }) {
        return render(<ThemeProvider><App {...props} /></ThemeProvider>, el);
    },
});

InertiaProgress.init({ color: '#4B5563' });
