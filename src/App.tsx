import { BrowserRouter, Route, Routes } from "react-router-dom";

import "@mantine/core/styles.css";
import { Flex, MantineProvider} from "@mantine/core";
import { theme } from "./theme";
import Header from "./components/Header.js";
import Home from "./pages/Home.js";
import About from "./pages/About.js";
import Photos from "./pages/Photos.js";
import Blog from "./pages/Blog.js";
import { Music } from "./pages/Music.js";
import { Footer } from "./components/Footer.js";

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
