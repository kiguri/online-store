import { useState, createContext, useContext, Children } from 'react';

const TabsContext = createContext();

export const Tabs = ({ children }) => {
    const [activeIndex, setActiveIndex] = useState(0);
    return (
        <TabsContext.Provider value={{ activeIndex, setActiveIndex }}>
            <div className='flex flex-col'>{children}</div>
        </TabsContext.Provider>
    );
};

const TabListContext = createContext();

export const TabList = ({ children }) => {
    return (
        <div className='flex justify-center'>
            <div className='bg-gray-50 rounded-lg px-2 py-1'>
                {Children.toArray(children).map((child, index) => (
                    <TabListContext.Provider value={{ index }}>
                        {child}
                    </TabListContext.Provider>
                ))}
            </div>
        </div>
    );
};

export const Tab = ({ children }) => {
    const { index } = useContext(TabListContext);
    const { activeIndex, setActiveIndex } = useContext(TabsContext);
    const isActive = index === activeIndex;

    return (
        <button
            onClick={() => setActiveIndex(index)}
            className={`${
                isActive
                    ? 'text-white  bg-gradient-to-r from-teal-400 to-teal-500'
                    : ''
            } uppercase px-3 py-2 rounded-lg focus:outline-none`}
        >
            {children}
        </button>
    );
};

export const TabLabels = ({ children }) => {
    const { activeIndex } = useContext(TabsContext);
    return (
        <h3 className='text-gray-700 font-bold text-4xl mt-6 mb-5'>
            {Children.toArray(children)[activeIndex]}
        </h3>
    );
};

export const TabLabel = ({ children }) => {
    return children;
};

export const TabPanels = ({ children }) => {
    const { activeIndex } = useContext(TabsContext);
    return Children.toArray(children)[activeIndex];
};
