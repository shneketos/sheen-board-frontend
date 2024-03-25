export const GenerateColor = () => {
    const color = Math.random().toString(16).substr(-6);
    return color;
};
