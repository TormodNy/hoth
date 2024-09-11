import { createContext, useEffect, useState } from "react";
import { BoxContainer } from "./components/boxes/BoxContainer";
import { AddBoxButton } from "./components/AddBoxButton";
import { ThemeProvider } from "@emotion/react";
import { createTheme, IconButton } from "@mui/material";
import { BoxType, IBox } from "./types";
import { Save } from "@mui/icons-material";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

interface IAppContext {
  boxes: IBox[];
  setBoxes: React.Dispatch<React.SetStateAction<IBox[]>>;
}

export const AppContext = createContext<IAppContext>({
  boxes: [],
  setBoxes: () => {},
});

function App() {
  const [boxes, setBoxes] = useState<IBox[]>([]);

  useEffect(() => {
    if (boxes.length === 0) {
      const localStorageBoxes = localStorage.getItem("state");
      if (localStorageBoxes) {
        setBoxes(JSON.parse(localStorageBoxes));
      } else {
        setBoxes([{ id: crypto.randomUUID(), boxType: BoxType.Undefined }]);
      }
    }
  }, []);

  return (
    <ThemeProvider theme={darkTheme}>
      <AppContext.Provider value={{ boxes, setBoxes }}>
        <div className="w-full h-full flex flex-col items-center p-10 gap-8">
          <BoxContainer />
          {boxes.length < 8 && <AddBoxButton />}

          <IconButton
            color="info"
            sx={{ position: "fixed", top: 4, right: 4, zIndex: 1000 }}
            onClick={() => localStorage.setItem("state", JSON.stringify(boxes))}
          >
            <Save />
          </IconButton>
        </div>
      </AppContext.Provider>
    </ThemeProvider>
  );
}

export default App;
