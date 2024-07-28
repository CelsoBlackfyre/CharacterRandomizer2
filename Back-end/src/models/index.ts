import Character from "./character";

const initModels = async () => {
    await Character.sync();
} 

export default initModels;