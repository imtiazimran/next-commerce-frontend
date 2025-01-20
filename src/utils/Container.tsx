const Container = ({children, className}: {children: React.ReactNode, className?: string | undefined}) => {
    return (
        <div className={`${className ?? className } max-w-7xl mx-auto px-2`}>
          {children}
        </div>
    );
};

export default Container;