import { BrowserRouter, Route, RouterProvider, Routes } from "react-router-dom";

import "@mantine/core/styles.css";
import { Flex, MantineProvider} from "@mantine/core";
import { theme } from "./theme";
import { HeaderSimple } from "./components/SimpleHeader";
import Home from "./pages/Home.js";
import About from "./pages/About..js";

export default function App() {
  return (
  <MantineProvider theme={theme}>
    <HeaderSimple></HeaderSimple>
    <div className="content-wrapper">
      <Flex className="inner-content">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </BrowserRouter>
      </Flex>
    </div>
  </MantineProvider>
  );
}
