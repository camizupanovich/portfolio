/* Libraries */
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';
import { useState } from 'react';
/* Old page Component container */
import Landing2022 from './history/2022/components/Landing/Landing';
/* Navigation component */
import NavBar from './history/2023/NavBar/NavBar';
/* Sections components */
import Contact from './history/2023/Contact/Contact';
import Hero from './history/2023/Hero/Hero';
import Services from './history/2023/Services/Services';
import About from './history/2023/About/About';
/* Style and data helper */
import s from './App.module.css';
import colors from './history/2023/helpers/colors';
import { esp, en } from './history/2023/helpers/dataLanding';
import Project from './history/2023/Projects/Project';
import Footer from './history/2023/Footer/Footer';

function App() {
  /* Language set data */
  const lang = navigator.language || navigator.userLanguage;
  const data = lang === 'es-419' ? esp : en;
  /* Theme mode and color configuration vars */
  let [theme, setTheme] = useState('dark');
  const backgroundColorSecondary = theme === 'dark' ? colors.bgSecondary.dark : colors.bgSecondary.light;
  const backgroundColorPrimary = theme === 'dark' ? colors.bgPrimary.dark : colors.bgPrimary.light;
  const textColor = theme === 'dark' ? colors.text.dark : colors.text.light;
  const fontColor = theme === 'dark' ? colors.font.dark : colors.font.light;
  const textOposite = theme === 'dark' ? colors.text.light : colors.text.dark;
  const blurBgColor = theme === 'dark' ? 'rgba(0, 0, 0, 0.445)' : 'rgba(255, 255, 255, 0.445)';
  /* SideBar configuration and setState */
  let [mobileOpen, setMobileOpen] = useState(false);
  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };
  /* Method to change de theme mode */
  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };
  /* Navigation method */
  const handleScroll = (e) => {
    const element = document.getElementById(e);
    element.scrollIntoView({ behavior: "smooth" });
    setMobileOpen(false);

  }
  return (
    <div className={s.app} style={{ minHeight: '100vh !important', backgroundColor: backgroundColorSecondary }}>
      <Router>
        <Switch>
          <Route path='/2022' component={Landing2022} />
          <Route path='/'>
            <NavBar theme={theme} mobileOpen={mobileOpen} data={data} toggleTheme={toggleTheme} handleScroll={handleScroll} handleDrawerToggle={handleDrawerToggle} backgroundColorSecondary={backgroundColorSecondary} backgroundColorPrimary={backgroundColorPrimary} textColor={textColor} fontColor={fontColor} textOposite={textOposite} >
            </NavBar>
            <Hero textColor={textColor} fontColor={fontColor} textOposite={textOposite} data={data} />
            <div id='A-1'><About backgroundColorSecondary={backgroundColorSecondary} backgroundColorPrimary={backgroundColorPrimary} textColor={textColor} fontColor={fontColor} textOposite={textOposite} data={data} /></div>
            <div id='P-3'><Project blurBgColor={blurBgColor} backgroundColorSecondary={backgroundColorSecondary} backgroundColorPrimary={backgroundColorPrimary} data={data} fontColor={fontColor} textOposite={textOposite} /></div>
            {/* <div id='S-2'><Services backgroundColorPrimary={backgroundColorPrimary} textColor={textColor} data={data} /></div> */}
            <div id='C-4'><Contact backgroundColorPrimary={backgroundColorPrimary} textColor={textColor} fontColor={fontColor} data={data} /></div>
            <Footer theme={theme} mobileOpen={mobileOpen} data={data} toggleTheme={toggleTheme} handleScroll={handleScroll} handleDrawerToggle={handleDrawerToggle} backgroundColorSecondary={backgroundColorSecondary} backgroundColorPrimary={backgroundColorPrimary} textColor={textColor} fontColor={fontColor} textOposite={textOposite} />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
