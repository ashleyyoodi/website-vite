import { BrowserRouter, Route, Routes } from "react-router-dom";

import "@mantine/core/styles.css";
import { Flex, MantineProvider} from "@mantine/core";
import { theme } from "./theme";
import SimpleHeader from "./components/SimpleHeader";
import Home from "./pages/Home.js";
import About from "./pages/About.js";
import Photos from "./pages/Photos.js";
import Blog from "./pages/Blog.js";
import LeafOverlay from "./components/LeafOverlay.js";

export default function App() {
  return (
  <MantineProvider theme={theme}>
        <BrowserRouter>
          <LeafOverlay></LeafOverlay>
          <SimpleHeader></SimpleHeader>
          <div className="content-wrapper">
            <Flex className="inner-content">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/blog" element={<Blog />} />
                <Route path="/photos" element={<Photos />} />
                <Route path="/about" element={<About />} />
              </Routes>
              </Flex>
          </div>
        </BrowserRouter>
  </MantineProvider>
  );
}
