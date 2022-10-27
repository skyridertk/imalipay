import React from 'react';

export type MenuModalProp = {
    showMenuModal: boolean;
    setShowMenuModal: (value: boolean) => void;
    children: React.ReactNode;
};
