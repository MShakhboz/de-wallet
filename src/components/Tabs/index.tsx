import { memo, useCallback, useState } from "react";
import { TabsContainer, TabBox } from "./style";

const Tabs = ({
    tabs = [],
    className,
    onTabSelect,
    ...props
}: {
    tabs?: any[];
    className?: string | undefined;
    onTabSelect: (ind: number) => void;
}) => {
    const [selected, setSelected] = useState(0);

    const onSelect = useCallback(
        (ind: number) => {
            setSelected(ind);
            onTabSelect(ind);
        },
        [onTabSelect]
    );

    return (
        <TabsContainer className={className} {...props}>
            {tabs &&
                tabs.map((elm, index: number) => (
                    <TabBox
                        key={`tab_unq_key_${index + 1}`}
                        className={selected == index ? "active" : ""}
                        onClick={() => onSelect(index)}
                    >
                        <span>{elm.title}</span>
                    </TabBox>
                ))}
        </TabsContainer>
    );
};

export default memo(Tabs);
