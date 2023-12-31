import Header2 from "./components/header/Header2";
// @ts-ignore
import Header1 from "./components/header/Header1";
// @ts-ignore
import Header3 from "./components/header/Header3";

import { Box, CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "./theme";
import Hero from "./components/hero/hero";
import Main from "./components/main/main";
import Footer from "./components/footer/footer";
import ScrollToTop from "./components/scroll/ScrollToTop";
function App() {

  const [theme, colorMode] = useMode();
  return (
    
    <ColorModeContext.Provider 
// @ts-ignore
    value={colorMode}>
      <ThemeProvider 
// @ts-ignore
      theme={theme}>
      <CssBaseline />
      <Header1 />

<Header2 />
<Header3 />
<Box
          bgcolor={
            // @ts-ignore
            theme.palette.bg.main
          }
        >
        <Hero />
          < Main/>
          <main />
        </Box>
      <Footer/>
      </ThemeProvider>
< ScrollToTop/>

    </ColorModeContext.Provider>
    
    );
} 
export default App;
