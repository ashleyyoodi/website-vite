import { BrowserRouter, Route, Routes } from "react-router-dom";

import "@mantine/core/styles.css";
import { Flex, MantineProvider} from "@mantine/core";
import { theme } from "./theme";
import Header from "./components/Header.js";
import Home from "./page/Home.js";
import About from "./page/About.js";
import Photos from "./page/Photos.js";
import Blog from "./page/Blog.js";
import Music from "./page/Music.js";
import { Footer } from "./components/Footer.js";
import { AppCache } from "./cache/AppCache.tsx";

export default function App() {
  return (
  <MantineProvider theme={theme}>
        <BrowserRouter>
          <Header></Header>
            <div className="content-wrapper">
              <Flex className="inner-content">
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/blog" element={<Blog />} />
                  <Route path="/music" element={<Music />} />
                  <Route path="/photos" element={<Photos />} />
                  <Route path="/about" element={<About />} />
                </Routes>
              </Flex>
            </div>
            <Footer></Footer>
        </BrowserRouter>
  </MantineProvider>
  );
}
