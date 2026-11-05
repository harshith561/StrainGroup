'use client';

import React from 'react';
import CommonErrorView from './CommonErrorView';

export default function UnderMaintenance({ routeName = '' }) {
  return <CommonErrorView type="409" routeName={routeName} />;
}
