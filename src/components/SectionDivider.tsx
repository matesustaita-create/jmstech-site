interface SectionDividerProps {
  color?: string;
}

const SectionDivider = ({ color = '#0e3e4c' }: SectionDividerProps) => {
  const backgroundStyle = {
    background: `linear-gradient(to bottom, ${color}, ${color})`
  };

  return (
    <div className="relative h-16 -mt-8 overflow-hidden">
      <div className="absolute inset-0" style={backgroundStyle}></div>
      <div className="absolute bottom-0 left-0 right-0 h-8" style={{ backgroundColor: color }}>
        <div className="absolute -top-1 left-1/2 transform -translate-x-1/2 w-11/12 max-w-4xl h-0.5 bg-gradient-to-r from-transparent via-[#2CB6C4] to-transparent"></div>
      </div>
    </div>
  );
};

export default SectionDivider;
