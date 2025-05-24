import React from "react";

import styles from "./styles/App.module.css";

import Layout from "./components/Layout";
import HomePage from "./pages/HomePage";

const App: React.FC = () => {
  return (
    <Layout>
      <div className={styles.app}>
        <HomePage />
      </div>
    </Layout>
  );
};

export default App;
