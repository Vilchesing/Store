import React from "react";

import { MainStore } from '../components/MainStore.jsx'
import MainLayout from "../components/layout/MainLayou.jsx";

export function HomePage() {

    return (
      
      <>
      <MainLayout>
        <MainStore />
      </MainLayout>
      </>
    )
  
}
