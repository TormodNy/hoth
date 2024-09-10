import { createContext, useState } from "react";
import { BoxContainer } from "./components/BoxContainer";
import { AddBoxButton } from "./components/AddBoxButton";
import { ThemeProvider } from "@emotion/react";
import { createTheme } from "@mui/material";
import { BoxType } from "./types";

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

interface IAppContext {
  boxes: BoxType[];
  setBoxes: React.Dispatch<React.SetStateAction<BoxType[]>>;
}

export const AppContext = createContext<IAppContext>({
  boxes: [],
  setBoxes: () => {},
});

function App() {
  const [boxes, setBoxes] = useState<BoxType[]>([BoxType.Undefined]);

  return (
    <ThemeProvider theme={darkTheme}>
      <AppContext.Provider value={{ boxes, setBoxes }}>
        <div className="w-full flex flex-col items-center p-10 gap-8">
          <BoxContainer />
          <AddBoxButton />
        </div>
      </AppContext.Provider>
    </ThemeProvider>
  );
}

export default App;
