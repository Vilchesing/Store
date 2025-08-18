import React from "react";

import { MainStore } from '../components/MainStore.jsx'
import MainLayout from "../../layout/components/MainLayout.jsx";

export function HomePage() {

    return (
      
      <>
      <MainLayout>
        <MainStore />
      </MainLayout>
      </>
    )
  
}
