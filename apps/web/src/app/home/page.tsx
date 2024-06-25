'use client';
import React, { useEffect, useState } from 'react';
import LandingPage from './component/Jumbotron';
import Category from './component/Categories';
import UpcomingEvent from './component/UpcomingEvent';
import FilterGeologi from './component/FilterGeologi';

const HomePage = () => {
  return (
    <div>
      <LandingPage />
      <Category />
      <FilterGeologi />
      <UpcomingEvent />
    </div>
  );
};

export default HomePage;
