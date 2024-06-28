import React from 'react';
import { DropDown, DropDownList, DropDownItem } from "./Styles";

const DropDownMenu = React.forwardRef(({ items }, ref) => (
    <div>
        <DropDown ref={ref}>
            <DropDownList>
            {items.map((item, index) => (
                <DropDownItem key={index}>
                    <a href={item.url} target="_blank" rel="noopener noreferrer">
                        {item.text}
                    </a>
                </DropDownItem>
            ))}
            </DropDownList>
        </DropDown>
        </div>
))

export default DropDownMenu